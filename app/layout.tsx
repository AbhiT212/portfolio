import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: '--font-inter',
});

export const metadata: Metadata = {
    title: "Abhi Tundiya | AI & Systems Engineer",
    description: "Building intelligent systems from the kernel up. Specializing in Deep Learning, 5G Core Networks, and Linux Driver Development.",
    keywords: ["Machine Learning", "Systems Engineering", "Linux Kernel", "5G", "Deep Learning"],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${inter.variable} font-sans`}>
                {children}
            </body>
        </html>
    );
}
