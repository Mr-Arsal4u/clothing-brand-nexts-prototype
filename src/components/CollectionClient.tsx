 'use client';
 
 import { useMemo, useState } from "react";
 import { products } from "@/lib/products";
 import ProductCard from "@/components/ProductCard";
 import Filters, { type Filters as F } from "@/components/Filters";
 import { useSearchParams, useRouter } from "next/navigation";
 
 export default function CollectionClient() {
   const params = useSearchParams();
   const router = useRouter();
   const [filters, setFilters] = useState<F>({
     query: params.get("query") || "",
     category: params.get("category") || "",
     color: params.get("color") || "",
     size: params.get("size") || "",
     sort: (params.get("sort") as F["sort"]) || "featured",
   });
 
   function updateFilters(patch: Partial<F>) {
     const next = { ...filters, ...patch };
     setFilters(next);
     const q = new URLSearchParams();
     if (next.query) q.set("query", next.query);
     if (next.category) q.set("category", next.category);
     if (next.color) q.set("color", next.color);
     if (next.size) q.set("size", next.size);
     if (next.sort && next.sort !== "featured") q.set("sort", next.sort);
     router.replace(`/collection?${q.toString()}`);
   }
 
   const filtered = useMemo(() => {
     let arr = products.slice();
     if (filters.query) {
       const q = filters.query.toLowerCase();
       arr = arr.filter(
         (p) =>
           p.title.toLowerCase().includes(q) ||
           p.category.toLowerCase().includes(q) ||
           p.description.toLowerCase().includes(q)
       );
     }
     if (filters.category) {
       arr = arr.filter((p) => p.category === filters.category);
     }
     if (filters.color) {
       arr = arr.filter((p) => p.colors.includes(filters.color));
     }
     if (filters.size) {
       arr = arr.filter((p) => p.sizes.includes(filters.size));
     }
     if (filters.sort === "price-asc") {
       arr.sort((a, b) => a.price - b.price);
     } else if (filters.sort === "price-desc") {
       arr.sort((a, b) => b.price - a.price);
     }
     return arr;
   }, [filters]);
 
   return (
     <div className="mx-auto max-w-6xl px-6 py-10">
       <h1 className="mb-4 text-2xl text-ink">Collection</h1>
       <Filters value={filters} onChange={updateFilters} />
       <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
         {filtered.map((p) => (
           <ProductCard key={p.slug} p={p} />
         ))}
       </div>
     </div>
   );
 }
