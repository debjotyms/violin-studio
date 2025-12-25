"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-[var(--background)]">
      {/* Background blobs - Warm tones */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl -z-10 pointer-events-none">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[var(--secondary)]/10 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen dark:bg-[var(--secondary)]/20" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--primary)]/10 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen dark:bg-[var(--primary)]/20" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-[var(--accent)] text-[var(--foreground)] text-sm font-medium mb-6 border border-[var(--border)]">
                The #1 Violin Community in Bangladesh
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[var(--foreground)] mb-6 font-serif"
            >
              Master the Art of <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]">
                Violin Playing
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-[var(--muted)] mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed"
            >
              Join a vibrant community of passionate violinists. 
              Learn from experts, connect with fellow musicians, and perform on the grandest stages.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
            >
              <Button size="lg" className="w-full sm:w-auto gap-2">
                Join the Community <ArrowRight size={18} />
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto gap-2">
                <PlayCircle size={18} /> Watch Demo
              </Button>
            </motion.div>
          </div>

          {/* Visual Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 w-full relative"
          >
             <div className="relative aspect-square md:aspect-[4/3] rounded-2xl bg-[var(--background)] border border-[var(--border)] overflow-hidden shadow-2xl">
                {/* Abstract decorative elements simulating wood grain/varnish */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--background)] to-[var(--accent)]" />
                
                {/* Stylized F-hole shape (abstracted) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-64 border-l-4 border-[var(--primary)]/20 rounded-[50%] skew-y-12 blur-sm" />
                <div className="absolute top-1/2 left-1/2 translate-x-8 -translate-y-1/2 w-32 h-64 border-r-4 border-[var(--primary)]/20 rounded-[50%] -skew-y-12 blur-sm" />

                {/* Simulated Grid/UI elements - warmer tones */}
                <div className="absolute top-6 left-6 right-6 bottom-6 border-2 border-dashed border-[var(--border)] rounded-xl flex items-center justify-center">
                    <div className="text-[var(--primary)] font-serif font-bold text-9xl select-none opacity-10 italic">
                        VS
                    </div>
                </div>

                <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-[var(--secondary)]/10 rounded-full blur-2xl" />
                <div className="absolute -top-12 -left-12 w-64 h-64 bg-[var(--primary)]/10 rounded-full blur-2xl" />
             </div>
             
             {/* Floating Badge */}
             <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute bottom-8 -left-4 md:-left-8 bg-[var(--background)] p-4 rounded-xl shadow-xl border border-[var(--border)] flex items-center gap-3"
             >
                <div className="w-10 h-10 bg-[var(--accent)] rounded-full flex items-center justify-center text-[var(--primary)]">
                    <span className="font-bold">5k+</span>
                </div>
                <div>
                    <p className="text-sm font-bold text-[var(--foreground)]">Active Members</p>
                    <p className="text-xs text-[var(--muted)]">Across Bangladesh</p>
                </div>
             </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}