'use client';

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ImageCarousel({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);

  function prev() {
    setIndex((i) => (i - 1 + images.length) % images.length);
  }
  function next() {
    setIndex((i) => (i + 1) % images.length);
  }

  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-md bg-sand/40">
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={images[index]}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0.4, scale: 0.98 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0"
        >
          <Image
            src={images[index]}
            alt="Product image"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
      </AnimatePresence>

      {images.length > 1 && (
        <>
          <button
            aria-label="Previous image"
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-offwhite/80 px-3 py-2 text-xs text-ink hover:bg-offwhite"
          >
            ◀
          </button>
          <button
            aria-label="Next image"
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-offwhite/80 px-3 py-2 text-xs text-ink hover:bg-offwhite"
          >
            ▶
          </button>
          <div className="pointer-events-none absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
            {images.map((_, i) => (
              <span
                key={i}
                className={"h-1.5 w-1.5 rounded-full " + (i === index ? "bg-ink" : "bg-ink/30")}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
