"use client";

import { motion } from "framer-motion";

import Image from "next/image";

import { Button } from "./ui/button";

import { ArrowRight, PlayCircle } from "lucide-react";

import { useLanguage } from "@/context/language-context";



export function Hero() {

  const { t } = useLanguage();



  return (

    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-[var(--background)]">

      {/* Background blobs - Warm tones with animation */}

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl -z-10 pointer-events-none">

        <motion.div 

          animate={{ 

            scale: [1, 1.2, 1],

            opacity: [0.3, 0.5, 0.3],

            rotate: [0, 90, 0]

          }}

          transition={{ 

            duration: 15, 

            repeat: Infinity, 

            ease: "easeInOut" 

          }}

          className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-[var(--secondary)]/20 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen dark:bg-[var(--secondary)]/30" 

        />

        <motion.div 

          animate={{ 

            scale: [1, 1.3, 1],

            opacity: [0.3, 0.6, 0.3],

            x: [0, 50, 0]

          }}

          transition={{ 

            duration: 20, 

            repeat: Infinity, 

            ease: "easeInOut",

            delay: 2

          }}

          className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[var(--primary)]/20 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen dark:bg-[var(--primary)]/30" 

        />

        <motion.div 

          animate={{ 

            scale: [1, 1.1, 1],

            opacity: [0.2, 0.4, 0.2],

          }}

          transition={{ 

            duration: 12, 

            repeat: Infinity, 

            ease: "easeInOut",

            delay: 5

          }}

          className="absolute top-[40%] left-[20%] w-[300px] h-[300px] bg-[#d97706]/20 rounded-full blur-[80px] mix-blend-multiply dark:mix-blend-screen dark:bg-[#d97706]/20" 

        />

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

                {t.hero.badge}

              </span>

            </motion.div>

            

            <motion.h1

              initial={{ opacity: 0, y: 20 }}

              animate={{ opacity: 1, y: 0 }}

              transition={{ duration: 0.5, delay: 0.1 }}

              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[var(--foreground)] mb-6 font-serif"

            >

              {t.hero.titlePre} <br/>

              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]">

                {t.hero.titleHighlight}

              </span>

            </motion.h1>



            <motion.p

              initial={{ opacity: 0, y: 20 }}

              animate={{ opacity: 1, y: 0 }}

              transition={{ duration: 0.5, delay: 0.2 }}

              className="text-lg md:text-xl text-[var(--muted)] mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed"

            >

              {t.hero.description}

            </motion.p>



            <motion.div

              initial={{ opacity: 0, y: 20 }}

              animate={{ opacity: 1, y: 0 }}

              transition={{ duration: 0.5, delay: 0.3 }}

              className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"

            >

              <Button size="lg" className="w-full sm:w-auto gap-2">

                {t.hero.joinBtn} <ArrowRight size={18} />

              </Button>

              <Button variant="outline" size="lg" className="w-full sm:w-auto gap-2">

                <PlayCircle size={18} /> {t.hero.watchBtn}

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

                <Image 

                  src="/violin-hero.webp" 

                  alt="Violinist playing" 

                  fill 

                  className="object-cover"

                  priority

                />

                

                {/* Overlay UI elements */}

                <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/20 to-transparent" />

                

                <div className="absolute top-6 left-6 right-6 bottom-6 border-2 border-dashed border-white/20 rounded-xl" />

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

                    <p className="text-sm font-bold text-[var(--foreground)]">{t.hero.activeMembers}</p>

                    <p className="text-xs text-[var(--muted)]">{t.hero.location}</p>

                </div>

             </motion.div>

          </motion.div>



        </div>

      </div>

    </section>

  );

}
