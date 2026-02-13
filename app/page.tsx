import Hero from '@/components/Hero';
import Introduction from '@/components/Introduction';
import ProjectGrid from '@/components/ProjectGrid';
import Terminal from '@/components/Terminal';
import Contact from '@/components/Contact';
import { getBatchRepoStats } from '@/lib/github';

// Project data - easily editable!
// To add/remove projects, simply modify this array
const projects = [
    {
        title: 'Linux Kernel Input Subsystem Hook',
        description: 'Keylogger and interrupt handling at the kernel level. Deep dive into Linux input subsystem architecture.',
        category: 'Systems' as const,
        techStack: ['C', 'Linux Kernel', 'Driver Development', 'Interrupt Handling'],
        githubUrl: 'https://github.com/AbhiT212/Linux-Kernel-Input-Subsystem-Hook',
        docsUrl: 'https://drive.google.com/file/d/1JnDadkBjkW-lglbvW9u1OqVdZ3J58TDD/view?usp=drive_link',
        featured: true,
        repoName: 'Linux-Kernel-Input-Subsystem-Hook',
    },
    {
        title: 'Mini Distributed Operating System',
        description: 'P2P file system with real-time synchronization across multiple nodes. Implements distributed consensus algorithms.',
        category: 'Systems' as const,
        techStack: ['C', 'Networking', 'Distributed Systems', 'P2P'],
        githubUrl: 'https://github.com/AbhiT212/Mini-distributed-operating-system',
        docsUrl: 'https://drive.google.com/file/d/1QPC6xVilXWIy0quygkavW_zHhkukDbsg/view?usp=drive_link',
        featured: true,
        repoName: 'Mini-distributed-operating-system',
    },
    {
        title: 'Underwater Image Enhancement',
        description: 'P2PNet implementation for enhancing underwater imagery using deep learning techniques.',
        category: 'AI/ML' as const,
        techStack: ['PyTorch', 'Computer Vision', 'Python', 'Deep Learning'],
        githubUrl: 'https://github.com/AbhiT212/UnderWaterImageEnhancement',
        docsUrl: 'https://github.com/AbhiT212/UnderWaterImageEnhancement#readme',
        demoUrl: 'https://underwater-enhancer-service-451806891859.us-central1.run.app/',
        featured: true,
        repoName: 'UnderWaterImageEnhancement',
    },
    {
        title: 'AXORA AI',
        description: 'Implementation of Ai Fundamentals, including State space searches, Annealing',
        category: 'AI/ML' as const,
        techStack: ['PyTorch', 'OpenCV', 'Python', 'Numpy', 'Pandas'],
        githubUrl: 'https://github.com/AbhiT212/AXORA_AI',
        featured: true,
        repoName: 'AXORA_AI',
    },
    {
        title: 'NeuroAI',
        description: '3D Vision Transformer for Brain tumour segmentation on BraTs Dataset.',
        category: 'AI/ML' as const,
        techStack: ['Python', 'Pytorch', 'Plotly Dash', 'Research'],
        githubUrl: 'https://github.com/AbhiT212/NeuroAI',
        docsUrl: 'https://github.com/AbhiT212/NeuroAI#readme',
        demoUrl: 'https://neuroai-451806891859.europe-west1.run.app/',
        featured: true,
        repoName: 'NeuroAI',
    },
    {
        title: 'AegisCore ML Linux',
        description: 'An embedded ML-based kernel enforcement module for adaptive process anomaly detection in Linux',
        category: 'Systems' as const,
        techStack: ['C', 'Linux', 'etc'],
        githubUrl: 'https://github.com/AbhiT212/AegisCore-ML-Linux',
        docsUrl: 'https://drive.google.com/file/d/1OFy-6a-trsXyFzww5nNZEQSbQDuG6V5m/view?usp=drive_link',
        featured: true,
        repoName: 'AegisCore-ML-Linux', // for GitHub stats
    },
];

export default async function Home() {
    // Fetch GitHub stats for all projects
    const repoNames = projects.map(p => p.repoName);
    const stats = await getBatchRepoStats('AbhiT212', repoNames);

    // Merge stats with project data
    const projectsWithStats = projects.map(project => ({
        ...project,
        stars: stats[project.repoName]?.stars,
        forks: stats[project.repoName]?.forks,
    }));

    return (
        <main className="min-h-screen">
            <Hero />

            {/* Introduction & Areas of Interest */}
            <Introduction />

            <ProjectGrid projects={projectsWithStats} showFilters={true} />

            {/* Contact Section */}
            <Contact />

            {/* Footer */}
            <footer className="py-12 px-6 border-t border-gray-800 text-center text-gray-500">
                <p>© 2026 Abhi Tundiya. Built with Next.js, TypeScript, and Tailwind CSS.</p>
            </footer>

            <Terminal />
        </main>
    );
}
