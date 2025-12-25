"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ShoppingCart, Search, Heart, Eye, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/context/language-context";

export default function Shop() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("all");

  const products = [
    {
      id: 1,
      image: "/shop/violin-1.jpg",
      nameKey: "violin1",
      price: 8500,
      category: "violins",
      tag: "sale"
    },
    {
      id: 2,
      image: "/shop/violin-2.jpg",
      nameKey: "violin2",
      price: 15000,
      category: "violins",
      tag: "new"
    },
    {
      id: 3,
      image: "/shop/violin-3.jpg",
      nameKey: "violin3",
      price: 45000,
      category: "violins",
      tag: null
    },
    {
      id: 4,
      image: "/shop/violin-4.jpg",
      nameKey: "violin4",
      price: 25000,
      category: "violins",
      tag: null
    },
    {
      id: 5,
      image: "/shop/violin-5.jpg",
      nameKey: "violin5",
      price: 30000,
      category: "violins",
      tag: "new"
    },
    {
      id: 6,
      image: "/shop/violin-related-1.jpg",
      nameKey: "bow1",
      price: 3500,
      category: "bows",
      tag: null
    },
  ];

  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const categories = [
    { id: "all", label: t.shop.filters.all },
    { id: "violins", label: t.shop.filters.violins },
    { id: "bows", label: t.shop.filters.bows },
    { id: "accessories", label: t.shop.filters.accessories },
  ];

  return (
    <div className="min-h-screen bg-[var(--background)] selection:bg-[#8B4513]/20 selection:text-[#8B4513]">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          
          {/* Header & Search */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl font-serif">
                {t.shop.title}
              </h1>
              <p className="text-[var(--muted)] mt-2">
                {t.shop.subtitle}
              </p>
            </div>
            
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--muted)]" size={18} />
              <input 
                type="text" 
                placeholder={t.shop.searchPlaceholder}
                className="w-full pl-10 pr-4 py-2 rounded-full border border-[var(--border)] bg-transparent focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20 text-[var(--foreground)] placeholder:text-[var(--muted)]"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
             {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === cat.id 
                      ? "bg-[var(--primary)] text-white shadow-md" 
                      : "bg-[var(--background)] border border-[var(--border)] text-[var(--muted)] hover:bg-[var(--accent)] hover:text-[var(--foreground)]"
                  }`}
                >
                  {cat.label}
                </button>
             ))}
          </div>

          {/* Product Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-[var(--background)] rounded-xl border border-[var(--border)] overflow-hidden hover:shadow-xl hover:border-[var(--primary)]/20 transition-all duration-300 flex flex-col relative"
                >
                  {/* Badge */}
                  {product.tag && (
                    <div className={`absolute top-3 left-3 z-10 px-2 py-1 text-xs font-bold uppercase rounded-md tracking-wider ${
                      product.tag === 'sale' ? 'bg-red-500 text-white' : 'bg-[var(--primary)] text-white'
                    }`}>
                      {t.shop.tags[product.tag as keyof typeof t.shop.tags]}
                    </div>
                  )}

                  {/* Image Container - Smaller & Padded */}
                  <div className="relative h-64 w-full bg-[#f4f4f5] dark:bg-[#27272a]/50 p-6 overflow-hidden group-hover:bg-[#f5e6d3]/30 transition-colors duration-300">
                    <Image
                      src={product.image}
                      alt={t.shop.products[product.nameKey as keyof typeof t.shop.products]}
                      fill
                      className="object-contain mix-blend-multiply dark:mix-blend-normal transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Hover Actions */}
                    <div className="absolute right-3 top-3 flex flex-col gap-2 translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                      <button className="p-2 rounded-full bg-white shadow-md text-zinc-600 hover:text-red-500 hover:bg-red-50 transition-colors">
                        <Heart size={18} />
                      </button>
                      <button className="p-2 rounded-full bg-white shadow-md text-zinc-600 hover:text-[var(--primary)] hover:bg-[var(--accent)] transition-colors">
                        <Eye size={18} />
                      </button>
                    </div>
                  </div>
                  
                  <div className="p-4 flex flex-col flex-grow">
                    <div className="mb-2">
                       <span className="text-xs font-medium text-[var(--muted)] uppercase tracking-wide">
                          {t.shop.filters[product.category as keyof typeof t.shop.filters]}
                       </span>
                       <h3 className="text-lg font-semibold text-[var(--foreground)] font-serif line-clamp-1">
                        {t.shop.products[product.nameKey as keyof typeof t.shop.products]}
                      </h3>
                    </div>
                    
                    <div className="mt-auto flex items-center justify-between gap-3">
                      <span className="text-lg font-bold text-[var(--primary)]">
                         {t.shop.price} {product.price.toLocaleString()}
                      </span>
                      <Button size="sm" variant="outline" className="gap-2 rounded-full hover:bg-[var(--primary)] hover:text-white border-[var(--primary)]/20 text-[var(--primary)]">
                        <ShoppingCart size={16} />
                        <span className="sr-only sm:not-sr-only text-xs">{t.shop.addToCart}</span>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}