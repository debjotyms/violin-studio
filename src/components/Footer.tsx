"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[var(--background)] border-t border-[var(--border)]">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="relative w-8 h-8 overflow-hidden rounded-md">
                <Image 
                  src="/logo.png" 
                  alt={t.navbar.title} 
                  fill 
                  className="object-cover"
                />
              </div>
              <span className="text-xl font-bold text-[var(--foreground)] font-serif">
                {t.navbar.title}
              </span>
            </Link>
            <p className="text-[var(--muted)] max-w-sm mb-6">
              {t.footer.description}
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-[var(--muted)] hover:text-[var(--primary)] transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-[var(--muted)] hover:text-[var(--primary)] transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-[var(--muted)] hover:text-[var(--primary)] transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-[var(--muted)] hover:text-[var(--primary)] transition-colors"><Youtube size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-[var(--foreground)] mb-4 font-serif">{t.footer.platform}</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="#" className="text-[var(--muted)] hover:text-[var(--primary)] transition-colors">{t.footer.links.community}</Link></li>
              <li><Link href="#" className="text-[var(--muted)] hover:text-[var(--primary)] transition-colors">{t.footer.links.courses}</Link></li>
              <li><Link href="#" className="text-[var(--muted)] hover:text-[var(--primary)] transition-colors">{t.footer.links.events}</Link></li>
              <li><Link href="#" className="text-[var(--muted)] hover:text-[var(--primary)] transition-colors">{t.footer.links.blog}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[var(--foreground)] mb-4 font-serif">{t.footer.support}</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="#" className="text-[var(--muted)] hover:text-[var(--primary)] transition-colors">{t.footer.links.contact}</Link></li>
              <li><Link href="#" className="text-[var(--muted)] hover:text-[var(--primary)] transition-colors">{t.footer.links.faq}</Link></li>
              <li><Link href="#" className="text-[var(--muted)] hover:text-[var(--primary)] transition-colors">{t.footer.links.terms}</Link></li>
              <li><Link href="#" className="text-[var(--muted)] hover:text-[var(--primary)] transition-colors">{t.footer.links.privacy}</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--border)] text-center text-[var(--muted)] text-sm">
          © {new Date().getFullYear()} {t.footer.copyright}
        </div>
      </div>
    </footer>
  );
}