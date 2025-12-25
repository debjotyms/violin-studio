import Link from "next/link";
import { Music, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[var(--background)] border-t border-[var(--border)]">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="bg-[var(--primary)] p-1.5 rounded-lg text-white">
                <Music size={20} />
              </div>
              <span className="text-xl font-bold text-[var(--foreground)] font-serif">
                Violin Studio
              </span>
            </Link>
            <p className="text-[var(--muted)] max-w-sm mb-6">
              Building the largest and most vibrant violin community in Bangladesh. 
              Connecting hearts through strings.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-[var(--muted)] hover:text-[var(--primary)] transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-[var(--muted)] hover:text-[var(--primary)] transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-[var(--muted)] hover:text-[var(--primary)] transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-[var(--muted)] hover:text-[var(--primary)] transition-colors"><Youtube size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-[var(--foreground)] mb-4 font-serif">Platform</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="#" className="text-[var(--muted)] hover:text-[var(--primary)] transition-colors">Community</Link></li>
              <li><Link href="#" className="text-[var(--muted)] hover:text-[var(--primary)] transition-colors">Courses</Link></li>
              <li><Link href="#" className="text-[var(--muted)] hover:text-[var(--primary)] transition-colors">Events</Link></li>
              <li><Link href="#" className="text-[var(--muted)] hover:text-[var(--primary)] transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[var(--foreground)] mb-4 font-serif">Support</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="#" className="text-[var(--muted)] hover:text-[var(--primary)] transition-colors">Contact Us</Link></li>
              <li><Link href="#" className="text-[var(--muted)] hover:text-[var(--primary)] transition-colors">FAQ</Link></li>
              <li><Link href="#" className="text-[var(--muted)] hover:text-[var(--primary)] transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="text-[var(--muted)] hover:text-[var(--primary)] transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--border)] text-center text-[var(--muted)] text-sm">
          © {new Date().getFullYear()} Violin Studio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}