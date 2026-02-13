'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Terminal, ExternalLink } from 'lucide-react';

export default function Contact() {
    const contactInfo = [
        {
            name: 'GitHub',
            url: 'https://github.com/AbhiT212',
            icon: Github,
            color: 'text-purple-400',
            hoverColor: 'hover:text-purple-300',
            display: '@AbhiT212',
        },
        {
            name: 'Email',
            url: 'mailto:abhipareshpatel4@gmail.com',
            icon: Mail,
            color: 'text-green-400',
            hoverColor: 'hover:text-green-300',
            display: 'abhipareshpatel4@gmail.com',
        },
        {
            name: 'Institution Email',
            url: 'mailto:202211095@diu.iiitvadodara.ac.in',
            icon: Mail,
            color: 'text-blue-400',
            hoverColor: 'hover:text-blue-300',
            display: '202211095@diu.iiitvadodara.ac.in',
        },
    ];

    return (
        <section id="contact" className="py-20 px-6">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-5xl font-bold mb-4">Get In Touch</h2>
                    <p className="text-gray-400 text-lg mb-12">
                        Feel free to reach out for collaborations or just a friendly chat
                    </p>

                    {/* Terminal-style contact info box */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="border-2 border-cyan-500/50 rounded-2xl bg-black/90 backdrop-blur-sm overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300"
                    >
                        {/* Terminal header */}
                        <div className="bg-gray-900/80 border-b border-gray-800 px-4 py-2.5 flex items-center justify-between font-mono text-xs">
                            <div className="flex items-center gap-2">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                </div>
                                <span className="text-cyan-400 ml-2">
                                    contact@terminal:~$
                                </span>
                            </div>
                            <Terminal className="w-4 h-4 text-gray-400" />
                        </div>

                        {/* Content */}
                        <div className="p-8 space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold mb-3 text-cyan-400">
                                    Let's Connect
                                </h3>
                                <p className="text-gray-400 leading-relaxed text-lg">
                                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                                </p>
                            </div>

                            {/* Contact Links */}
                            <div className="space-y-4">
                                {contactInfo.map((contact, index) => (
                                    <motion.a
                                        key={contact.name}
                                        href={contact.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 + index * 0.1 }}
                                        className={`flex items-center gap-4 p-4 rounded-lg bg-gray-900/50 border border-gray-800 ${contact.hoverColor} hover:border-gray-600 transition-all duration-300 group/link`}
                                    >
                                        <contact.icon className={`w-6 h-6 ${contact.color}`} />
                                        <div className="flex-1">
                                            <div className="text-xs font-mono text-gray-500 mb-1">
                                                {contact.name}
                                            </div>
                                            <div className="font-mono text-sm text-gray-300 group-hover/link:text-white transition-colors">
                                                {contact.display}
                                            </div>
                                        </div>
                                        <ExternalLink className="w-5 h-5 text-gray-600 group-hover/link:text-gray-400 transition-colors" />
                                    </motion.a>
                                ))}
                            </div>

                            {/* Status indicator */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6 }}
                                className="pt-6 border-t border-gray-800"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                                    <p className="text-gray-400 font-mono text-sm">
                                        <span className="text-green-400">Available</span> for opportunities and collaborations
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
