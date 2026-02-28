'use client';

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const images = [
    "https://images.unsplash.com/photo-1520975940173-25b5d3baf3ea?auto=format&fit=crop&w=2000&q=80",
    "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=2000&q=80",
    "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=2000&q=80",
    "https://images.unsplash.com/photo-1503342217505-b0a15cf70449?auto=format&fit=crop&w=2000&q=80",
  ];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 5000);
    return () => clearInterval(id);
  }, [images.length]);
  return (
    <section className="relative mx-auto max-w-6xl px-6 pt-8">
      <div className="relative overflow-hidden rounded-2xl">
        <div className="absolute inset-0">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={images[index]}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0.4, scale: 0.98 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0"
            >
              <Image
                src={images[index]}
                alt="Nord Atelier hero"
                fill
                priority
                className="object-cover"
                sizes="100vw"
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative p-10 md:p-16"
        >
          <h1 className="max-w-3xl text-4xl tracking-tight text-offwhite md:text-6xl">
            Quiet Luxury. Modern Ease.
          </h1>
          <p className="mt-4 max-w-2xl text-offwhite/90 md:text-lg">
            Elevated essentials in cream, sand, and taupe — designed for a refined, understated wardrobe.
          </p>
          <div className="mt-6 flex gap-3">
            <Link
              href="/collection"
              className="rounded-full bg-ink px-6 py-3 text-sm text-offwhite hover:bg-ink/90"
            >
              Shop New Arrivals
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-offwhite/50 bg-offwhite/20 px-6 py-3 text-sm text-offwhite hover:bg-offwhite/30"
            >
              Our Philosophy
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
