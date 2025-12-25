"use client";

import { motion } from "framer-motion";
import { Users, Music, BookOpen, Trophy, Video, Mic2 } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export function Features() {
  const { t } = useLanguage();

  const iconMap = [Users, BookOpen, Video, Trophy, Mic2, Music];

  return (
    <section id="features" className="py-20 bg-[var(--accent)]/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl mb-4 font-serif">
            {t.features.title}
          </h2>
          <p className="text-lg text-[var(--muted)]">
            {t.features.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.features.items.map((feature, index) => {
             const Icon = iconMap[index];
             return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[var(--background)] p-8 rounded-2xl border border-[var(--border)] hover:shadow-lg hover:border-[var(--secondary)]/30 transition-all group"
            >
              <div className="w-12 h-12 bg-[var(--accent)] rounded-xl flex items-center justify-center text-[var(--primary)] mb-6 group-hover:bg-[var(--primary)] group-hover:text-[var(--primary-foreground)] transition-colors">
                <Icon size={24} />
              </div>
              <h3 className="text-xl font-semibold text-[var(--foreground)] mb-3 font-serif">
                {feature.title}
              </h3>
              <p className="text-[var(--muted)] leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          )})}
        </div>
      </div>
    </section>
  );
}