"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Music } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import { cn } from "./ui/button"; // Re-using cn utility
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { useLanguage } from "@/context/language-context";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t.navbar.home, href: "/" },
    { name: t.navbar.shop, href: "/shop" },
    { name: t.navbar.community, href: "/#community" },
    { name: t.navbar.learn, href: "/#learn" },
    { name: t.navbar.events, href: "/#events" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled
          ? "bg-[var(--background)]/90 backdrop-blur-md border-[var(--border)] py-3 shadow-sm"
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 overflow-hidden rounded-lg">
              <Image 
                src="/logo.png" 
                alt={t.navbar.title} 
                fill 
                className="object-cover"
              />
            </div>
            <span className="text-xl font-bold tracking-tight text-[var(--foreground)] font-serif">
              {t.navbar.title}
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-[var(--muted)] hover:text-[var(--primary)] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4">
               <LanguageToggle />
               <ThemeToggle />
               <Link href="/login" className="text-sm font-medium text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">
                  {t.navbar.login}
               </Link>
               <Button size="sm">{t.navbar.getStarted}</Button>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="flex md:hidden items-center gap-4">
            <LanguageToggle />
            <ThemeToggle />
            <button
              className="text-[var(--foreground)]"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>

                {/* Mobile Nav */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="md:hidden bg-[var(--background)] border-b border-[var(--border)] overflow-hidden"
                >
                  <ul className="flex flex-col p-4 gap-4">
                    {navLinks.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className="block text-base font-medium text-[var(--foreground)] hover:text-[var(--primary)]"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                     <li className="pt-2 border-t border-[var(--border)] flex flex-col gap-3">
                        <Link href="/login" onClick={() => setIsOpen(false)} className="text-base font-medium text-[var(--foreground)]">
                          {t.navbar.login}
                        </Link>
                        <Button className="w-full">{t.navbar.getStarted}</Button>
                     </li>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </header>  );
}
