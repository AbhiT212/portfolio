'use client';

import { motion } from 'framer-motion';
import { Github, Star, GitFork, ArrowUpRight, Terminal, ExternalLink, BookOpen, Video, FileText } from 'lucide-react';

interface ProjectCardProps {
    title: string;
    description: string;
    category: 'AI/ML' | 'Systems' | 'Networking';
    techStack: string[];
    githubUrl: string;
    demoUrl?: string;
    docsUrl?: string;
    videoUrl?: string;
    paperUrl?: string;
    stars?: number;
    forks?: number;
    index?: number;
}

const categoryStyles = {
    'AI/ML': {
        gradient: 'from-blue-500/20 via-cyan-500/10 to-transparent',
        border: 'border-blue-500/50',
        badge: 'bg-blue-500/20 text-blue-300 border-blue-500/40',
        glow: 'group-hover:shadow-blue-500/30',
        accentColor: 'text-blue-400',
        terminalPrompt: 'ai@ml',
    },
    'Systems': {
        gradient: 'from-green-500/20 via-emerald-500/10 to-transparent',
        border: 'border-green-500/50',
        badge: 'bg-green-500/20 text-green-300 border-green-500/40',
        glow: 'group-hover:shadow-green-500/30',
        accentColor: 'text-green-400',
        terminalPrompt: 'root@kernel',
    },
    'Networking': {
        gradient: 'from-purple-500/20 via-pink-500/10 to-transparent',
        border: 'border-purple-500/50',
        badge: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
        glow: 'group-hover:shadow-purple-500/30',
        accentColor: 'text-purple-400',
        terminalPrompt: 'net@5g',
    },
};

export default function ProjectCard({
    title,
    description,
    category,
    techStack,
    githubUrl,
    demoUrl,
    docsUrl,
    videoUrl,
    paperUrl,
    stars,
    forks,
    index = 0,
}: ProjectCardProps) {
    const styles = categoryStyles[category];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative"
        >
            {/* Gradient background glow */}
            <div className={`absolute inset-0 bg-gradient-to-br ${styles.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />

            {/* Card content */}
            <div className={`relative border-2 ${styles.border} rounded-2xl bg-black/90 backdrop-blur-sm transition-all duration-300 ${styles.glow} group-hover:shadow-2xl h-full flex flex-col overflow-hidden`}>

                {/* Terminal-style header */}
                <div className="bg-gray-900/80 border-b border-gray-800 px-4 py-2.5 flex items-center justify-between font-mono text-xs">
                    <div className="flex items-center gap-2">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500/80" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                            <div className="w-3 h-3 rounded-full bg-green-500/80" />
                        </div>
                        <span className={`${styles.accentColor} ml-2`}>
                            {styles.terminalPrompt}:~$
                        </span>
                    </div>
                    <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
                    >
                        <Github className="w-4 h-4" />
                    </a>
                </div>

                {/* Main content */}
                <div className="p-6 flex flex-col flex-grow">
                    {/* Category badge */}
                    <div className="mb-4">
                        <span className={`inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 border rounded-full ${styles.badge}`}>
                            <Terminal className="w-3 h-3" />
                            {category}
                        </span>
                    </div>

                    {/* Title with ASCII decoration */}
                    <div className="mb-3">
                        <h3 className="text-2xl font-bold group-hover:text-white transition-colors mb-1">
                            {title}
                        </h3>
                        <div className={`h-0.5 w-16 ${styles.accentColor.replace('text-', 'bg-')} group-hover:w-24 transition-all duration-300`} />
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 mb-6 leading-relaxed flex-grow">
                        {description}
                    </p>

                    {/* Tech Stack with OS-style tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        {techStack.map((tech, i) => (
                            <motion.span
                                key={tech}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 + i * 0.05 }}
                                className="text-xs font-mono px-3 py-1.5 bg-gray-900/80 text-gray-300 rounded border border-gray-800 hover:border-gray-600 transition-colors"
                            >
                                [{tech}]
                            </motion.span>
                        ))}
                    </div>

                    {/* Footer with action buttons */}
                    <div className="pt-4 border-t border-gray-800/50">
                        {/* Stats row */}
                        <div className="flex gap-4 text-sm font-mono mb-4">
                            {stars !== undefined && (
                                <div className="flex items-center gap-1.5 text-gray-500">
                                    <Star className="w-4 h-4" />
                                    <span>{stars}</span>
                                </div>
                            )}
                            {forks !== undefined && (
                                <div className="flex items-center gap-1.5 text-gray-500">
                                    <GitFork className="w-4 h-4" />
                                    <span>{forks}</span>
                                </div>
                            )}
                        </div>

                        {/* Action buttons */}
                        <div className="flex flex-wrap gap-2">
                            {/* GitHub Button */}
                            <a
                                href={githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center gap-1.5 px-3 py-2 text-xs font-mono ${styles.accentColor} bg-gray-900/50 border border-gray-800 rounded hover:bg-gray-800 hover:border-gray-600 transition-all duration-300 group/btn`}
                            >
                                <Github className="w-3.5 h-3.5" />
                                <span>Code</span>
                                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                            </a>

                            {/* Demo Button */}
                            {demoUrl && (
                                <a
                                    href={demoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex items-center gap-1.5 px-3 py-2 text-xs font-mono ${styles.accentColor} bg-gray-900/50 border border-gray-800 rounded hover:bg-gray-800 hover:border-gray-600 transition-all duration-300 group/btn`}
                                >
                                    <ExternalLink className="w-3.5 h-3.5" />
                                    <span>Demo</span>
                                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                                </a>
                            )}

                            {/* Docs Button */}
                            {docsUrl && (
                                <a
                                    href={docsUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex items-center gap-1.5 px-3 py-2 text-xs font-mono ${styles.accentColor} bg-gray-900/50 border border-gray-800 rounded hover:bg-gray-800 hover:border-gray-600 transition-all duration-300 group/btn`}
                                >
                                    <BookOpen className="w-3.5 h-3.5" />
                                    <span>Docs</span>
                                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                                </a>
                            )}

                            {/* Video Button */}
                            {videoUrl && (
                                <a
                                    href={videoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex items-center gap-1.5 px-3 py-2 text-xs font-mono ${styles.accentColor} bg-gray-900/50 border border-gray-800 rounded hover:bg-gray-800 hover:border-gray-600 transition-all duration-300 group/btn`}
                                >
                                    <Video className="w-3.5 h-3.5" />
                                    <span>Video</span>
                                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                                </a>
                            )}

                            {/* Paper Button */}
                            {paperUrl && (
                                <a
                                    href={paperUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex items-center gap-1.5 px-3 py-2 text-xs font-mono ${styles.accentColor} bg-gray-900/50 border border-gray-800 rounded hover:bg-gray-800 hover:border-gray-600 transition-all duration-300 group/btn`}
                                >
                                    <FileText className="w-3.5 h-3.5" />
                                    <span>Paper</span>
                                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                {/* Decorative corner accent */}
                <div className={`absolute top-0 right-0 w-20 h-20 ${styles.gradient} opacity-30 blur-2xl pointer-events-none`} />
            </div>
        </motion.div>
    );
}
