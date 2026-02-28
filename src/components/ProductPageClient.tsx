 'use client';
 
 import ImageCarousel from "@/components/ImageCarousel";
 import { formatPrice } from "@/lib/currency";
 import { useCart } from "@/context/CartContext";
 import Link from "next/link";
 import { useState } from "react";
 import type { Product } from "@/lib/products";
 
 export default function ProductPageClient({ product }: { product: Product }) {
   const p = product;
   const { addToCart } = useCart();
   const [size, setSize] = useState(p.sizes[0]);
   const [color, setColor] = useState(p.colors[0]);
   const [qty, setQty] = useState(1);
 
   return (
     <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
       <ImageCarousel images={p.images} />
       <div className="md:sticky md:top-24">
         <h1 className="text-2xl text-ink">{p.title}</h1>
         <div className="mt-1 text-ink/70">{p.category}</div>
         <div className="mt-2 text-lg text-ink">{formatPrice(p.price)}</div>
         <div className="mt-1 text-xs text-ink/60">Free shipping on orders over $200</div>
         <div className="mt-2 text-xs text-ink/60">In stock — ships in 1–2 days</div>
         <p className="mt-4 text-sm text-ink/80">{p.description}</p>
 
         <div className="mt-6 grid grid-cols-2 gap-4">
           <div>
             <div className="text-xs text-ink/60">Color</div>
             <div className="mt-1 flex flex-wrap gap-2">
               {p.colors.map((c) => (
                 <button
                   key={c}
                   onClick={() => setColor(c)}
                   className={
                     "rounded-full border px-3 py-1 text-sm capitalize " +
                     (c === color
                       ? "border-ink bg-offwhite"
                       : "border-ink/20 bg-white hover:border-ink/40")
                   }
                 >
                   {c}
                 </button>
               ))}
             </div>
           </div>
           <div>
             <div className="text-xs text-ink/60">Size</div>
             <div className="mt-1 flex flex-wrap gap-2">
               {p.sizes.map((s) => (
                 <button
                   key={s}
                   onClick={() => setSize(s)}
                   className={
                     "rounded-full border px-3 py-1 text-sm " +
                     (s === size
                       ? "border-ink bg-offwhite"
                       : "border-ink/20 bg-white hover:border-ink/40")
                   }
                 >
                   {s}
                 </button>
               ))}
             </div>
           </div>
         </div>
 
         <div className="mt-6 flex items-center gap-3">
           <div className="flex items-center rounded-md border border-ink/20 bg-white">
             <button
               aria-label="Decrease"
               onClick={() => setQty((q) => Math.max(1, q - 1))}
               className="px-3 py-2 text-sm"
             >
               -
             </button>
             <div className="w-10 text-center text-sm">{qty}</div>
             <button
               aria-label="Increase"
               onClick={() => setQty((q) => q + 1)}
               className="px-3 py-2 text-sm"
             >
               +
             </button>
           </div>
           <button
             onClick={() => addToCart(p, { size, color, qty })}
             className="rounded-md bg-ink px-5 py-3 text-sm text-offwhite hover:bg-ink/90"
           >
             Add to Cart
           </button>
           <Link
             href="/collection"
             className="rounded-md border border-ink/20 bg-white px-5 py-3 text-sm text-ink hover:border-ink/40"
           >
             Continue Shopping
           </Link>
         </div>
 
         <div className="mt-6 grid gap-2">
           <details className="rounded-md border border-ink/10 bg-offwhite p-4">
             <summary className="cursor-pointer text-sm text-ink">Details</summary>
             <p className="mt-2 text-sm text-ink/70">
               Tailored fit with clean finishing. Designed for comfort and layering.
             </p>
           </details>
           <details className="rounded-md border border-ink/10 bg-offwhite p-4">
             <summary className="cursor-pointer text-sm text-ink">Materials</summary>
             <p className="mt-2 text-sm text-ink/70">
               Natural fibers sourced responsibly. Subtle texture and soft hand feel.
             </p>
           </details>
           <details className="rounded-md border border-ink/10 bg-offwhite p-4">
             <summary className="cursor-pointer text-sm text-ink">Care</summary>
             <p className="mt-2 text-sm text-ink/70">Dry clean or gentle cold wash. Lay flat to dry.</p>
           </details>
         </div>
       </div>
     </div>
   );
 }
