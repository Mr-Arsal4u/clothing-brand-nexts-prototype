'use client';

import { allCategories, allColors, allSizes } from "@/lib/products";

export type Filters = {
  query: string;
  category: string;
  color: string;
  size: string;
  sort: "featured" | "price-asc" | "price-desc";
};

export default function Filters({
  value,
  onChange,
}: {
  value: Filters;
  onChange: (v: Partial<Filters>) => void;
}) {
  return (
    <div className="flex flex-col gap-3 rounded-lg border border-ink/10 bg-offwhite p-4 md:flex-row md:items-end">
      <div className="flex-1">
        <label className="block text-xs text-ink/60">Search</label>
        <input
          value={value.query}
          onChange={(e) => onChange({ query: e.target.value })}
          placeholder="Linen, knit, trouser..."
          className="mt-1 w-full rounded-md border border-ink/10 bg-white px-3 py-2 text-sm outline-none ring-0 placeholder:text-ink/40 focus:border-ink/30"
        />
      </div>
      <div>
        <label className="block text-xs text-ink/60">Category</label>
        <select
          value={value.category}
          onChange={(e) => onChange({ category: e.target.value })}
          className="mt-1 rounded-md border border-ink/10 bg-white px-3 py-2 text-sm"
        >
          <option value="">All</option>
          {allCategories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-xs text-ink/60">Color</label>
        <select
          value={value.color}
          onChange={(e) => onChange({ color: e.target.value })}
          className="mt-1 rounded-md border border-ink/10 bg-white px-3 py-2 text-sm"
        >
          <option value="">All</option>
          {allColors.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-xs text-ink/60">Size</label>
        <select
          value={value.size}
          onChange={(e) => onChange({ size: e.target.value })}
          className="mt-1 rounded-md border border-ink/10 bg-white px-3 py-2 text-sm"
        >
          <option value="">All</option>
          {allSizes.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-xs text-ink/60">Sort</label>
        <select
          value={value.sort}
          onChange={(e) =>
            onChange({ sort: e.target.value as Filters["sort"] })
          }
          className="mt-1 rounded-md border border-ink/10 bg-white px-3 py-2 text-sm"
        >
          <option value="featured">Featured</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>
    </div>
  );
}
