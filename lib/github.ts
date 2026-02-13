// GitHub API integration for fetching repository stats
// Note: GitHub API has rate limits (60 requests/hour for unauthenticated requests)
// For production, consider adding a GitHub token or implementing caching

interface RepoStats {
    stars: number;
    forks: number;
    language: string;
}

export async function getRepoStats(owner: string, repo: string): Promise<RepoStats | null> {
    try {
        const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
            next: { revalidate: 3600 }, // Cache for 1 hour
        });

        if (!response.ok) {
            console.error(`Failed to fetch stats for ${owner}/${repo}`);
            return null;
        }

        const data = await response.json();

        return {
            stars: data.stargazers_count || 0,
            forks: data.forks_count || 0,
            language: data.language || 'Unknown',
        };
    } catch (error) {
        console.error(`Error fetching repo stats for ${owner}/${repo}:`, error);
        return null;
    }
}

// Batch fetch multiple repos
export async function getBatchRepoStats(
    owner: string,
    repos: string[]
): Promise<Record<string, RepoStats | null>> {
    const results = await Promise.all(
        repos.map(async (repo) => {
            const stats = await getRepoStats(owner, repo);
            return { repo, stats };
        })
    );

    return results.reduce((acc, { repo, stats }) => {
        acc[repo] = stats;
        return acc;
    }, {} as Record<string, RepoStats | null>);
}
