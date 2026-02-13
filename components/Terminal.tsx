'use client';

import { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';

const commands = {
    help: `Available commands:
  help     - Show this help message
  about    - Display bio
  ls       - List all projects
  clear    - Clear terminal
  github   - Open GitHub profile`,

    about: `Abhi Tundiya - AI & Systems Engineer

I specialize in building intelligent systems from the ground up, 
combining expertise in:
  • Deep Learning & Computer Vision
  • 5G Core Networks (Free5GC/Open5GS)
  • Linux Kernel & Driver Development
  • Distributed Systems`,

    ls: `Projects:
  1. Linux-Kernel-Input-Subsystem-Hook
  2. Mini-distributed-operating-system
  3. UnderWaterImageEnhancement
  4. AXORA_AI
  5. NeuroAI`,

    github: 'Opening GitHub profile...',
};

export default function Terminal() {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState<Array<{ command: string; output: string }>>([]);
    const [isOpen, setIsOpen] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const historyRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    useEffect(() => {
        if (historyRef.current) {
            historyRef.current.scrollTop = historyRef.current.scrollHeight;
        }
    }, [history]);

    const handleCommand = (cmd: string) => {
        const trimmedCmd = cmd.trim().toLowerCase();

        if (trimmedCmd === 'clear') {
            setHistory([]);
            return;
        }

        if (trimmedCmd === 'github') {
            window.open('https://github.com/AbhiT212', '_blank');
            setHistory([...history, { command: cmd, output: commands.github }]);
            return;
        }

        const output = commands[trimmedCmd as keyof typeof commands] || `Command not found: ${cmd}. Type 'help' for available commands.`;
        setHistory([...history, { command: cmd, output }]);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim()) {
            handleCommand(input);
            setInput('');
        }
    };

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50">
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="absolute bottom-6 right-6 bg-white text-black p-3 rounded-full hover:bg-gray-200 transition-colors shadow-lg"
                >
                    <TerminalIcon className="w-6 h-6" />
                </button>
            )}

            {isOpen && (
                <div className="bg-black border-t border-gray-800 font-mono text-sm">
                    <div className="flex items-center justify-between px-4 py-2 border-b border-gray-800">
                        <span className="text-green-400">terminal@portfolio:~$</span>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-gray-400 hover:text-white"
                        >
                            ✕
                        </button>
                    </div>

                    <div
                        ref={historyRef}
                        className="h-64 overflow-y-auto px-4 py-2 space-y-2"
                    >
                        {history.map((item, i) => (
                            <div key={i}>
                                <div className="text-green-400">
                                    $ {item.command}
                                </div>
                                <div className="text-gray-300 whitespace-pre-wrap pl-2">
                                    {item.output}
                                </div>
                            </div>
                        ))}
                    </div>

                    <form onSubmit={handleSubmit} className="px-4 py-2 border-t border-gray-800">
                        <div className="flex items-center gap-2">
                            <span className="text-green-400">$</span>
                            <input
                                ref={inputRef}
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                className="flex-1 bg-transparent outline-none text-white"
                                placeholder="Type 'help' for commands..."
                            />
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}
