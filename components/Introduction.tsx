'use client';

import { motion } from 'framer-motion';
import { Code2, Cpu, Network } from 'lucide-react';

export default function Introduction() {
    const interests = [
        {
            icon: Code2,
            title: 'Computer Vision',
            description: 'Deep learning for image processing, object detection, and underwater image enhancement.',
            gradient: 'from-blue-500/10 to-cyan-500/10',
            borderColor: 'border-blue-500/30',
            iconColor: 'text-blue-400',
        },
        {
            icon: Cpu,
            title: 'System Design & Architecture',
            description: 'Designing scalable, efficient systems with focus on performance optimization and architectural patterns.',
            gradient: 'from-orange-500/10 to-red-500/10',
            borderColor: 'border-orange-500/30',
            iconColor: 'text-orange-400',
        },
        {
            icon: Cpu,
            title: 'Operating Systems',
            description: 'Linux kernel development, driver programming, and distributed operating systems.',
            gradient: 'from-green-500/10 to-emerald-500/10',
            borderColor: 'border-green-500/30',
            iconColor: 'text-green-400',
        },
        {
            icon: Network,
            title: 'Networking',
            description: '5G Core Networks with Free5GC and Open5GS, network protocols, and distributed systems.',
            gradient: 'from-purple-500/10 to-pink-500/10',
            borderColor: 'border-purple-500/30',
            iconColor: 'text-purple-400',
        },
    ];

    return (
        <section className="py-12 px-6 border-b border-gray-800">
            <div className="max-w-7xl mx-auto">
                {/* Introduction */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
                    <div className="max-w-4xl">
                        <p className="text-xl text-gray-300 leading-relaxed mb-6">
                            I'm <span className="text-white font-semibold">Abhi Tundiya</span>, Undergrad student at IIIT Vadodara,
                            passionate about building intelligent systems from the ground up. My work bridges the gap between
                            high-level machine learning and low-level systems programming.
                        </p>
                        <p className="text-lg text-gray-400 leading-relaxed">
                            With expertise spanning from neural networks to kernel drivers, I specialize in creating
                            robust, efficient solutions that leverage both cutting-edge AI and fundamental systems engineering principles.
                        </p>
                    </div>
                </motion.div>

                {/* Areas of Interest */}
                <div>
                    <motion.h3
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold mb-8"
                    >
                        Areas of Interest
                    </motion.h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {interests.map((interest, index) => {
                            const Icon = interest.icon;
                            return (
                                <motion.div
                                    key={interest.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    whileHover={{ y: -5 }}
                                    className={`relative overflow-hidden rounded-xl border ${interest.borderColor} bg-gradient-to-br ${interest.gradient} p-6 backdrop-blur-sm transition-all duration-300`}
                                >
                                    <div className="relative z-10">
                                        <div className={`${interest.iconColor} mb-4`}>
                                            <Icon className="w-10 h-10" strokeWidth={1.5} />
                                        </div>
                                        <h4 className="text-xl font-bold mb-3">{interest.title}</h4>
                                        <p className="text-gray-400 leading-relaxed">
                                            {interest.description}
                                        </p>
                                    </div>

                                    {/* Decorative gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white/5 pointer-events-none" />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
