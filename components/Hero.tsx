'use client';

import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="min-h-[70vh] flex items-center justify-center px-6 py-20">
            <div className="max-w-7xl w-full mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="mb-12"
                    >
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-300 uppercase tracking-wide">
                            Building Intelligent Systems
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="flex gap-4 flex-wrap"
                    >
                        <a
                            href="#projects"
                            className="px-8 py-4 bg-white text-black font-semibold rounded hover:bg-gray-200 transition-colors"
                        >
                            View Projects
                        </a>
                        <a
                            href="https://github.com/AbhiT212"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 border border-white text-white font-semibold rounded hover:bg-white hover:text-black transition-colors"
                        >
                            GitHub
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
