'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';

interface Project {
    title: string;
    description: string;
    category: 'AI/ML' | 'Systems' | 'Networking';
    techStack: string[];
    githubUrl: string;
    demoUrl?: string;
    docsUrl?: string;
    videoUrl?: string;
    paperUrl?: string;
    featured: boolean;
    stars?: number;
    forks?: number;
}

interface ProjectGridProps {
    projects: Project[];
    showFilters?: boolean;
}

export default function ProjectGrid({ projects, showFilters = true }: ProjectGridProps) {
    const [filter, setFilter] = useState<'All' | 'AI/ML' | 'Systems' | 'Networking'>('All');

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.category === filter);

    const filters: Array<'All' | 'AI/ML' | 'Systems' | 'Networking'> = ['All', 'AI/ML', 'Systems', 'Networking'];

    return (
        <section id="projects" className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-5xl font-bold mb-12">Projects</h2>

                {showFilters && (
                    <div className="flex gap-4 mb-12 flex-wrap">
                        {filters.map((f) => (
                            <button
                                key={f}
                                onClick={() => setFilter(f)}
                                className={`px-6 py-2 rounded font-mono text-sm transition-all ${filter === f
                                    ? 'bg-white text-black'
                                    : 'border border-gray-700 text-gray-400 hover:border-gray-500'
                                    }`}
                            >
                                {f}
                            </button>
                        ))}
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <ProjectCard key={project.title} {...project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
