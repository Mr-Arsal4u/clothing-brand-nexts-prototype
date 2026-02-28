import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";
import { formatPrice } from "@/lib/currency";

export default function ProductCard({ p }: { p: Product }) {
  const primary = p.images[0];
  const secondary = p.images[1] ?? p.images[0];
  return (
    <Link
      href={`/product/${p.slug}`}
      className="group block overflow-hidden rounded-lg bg-offwhite"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-md bg-sand/40">
        <Image
          src={primary}
          alt={p.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <Image
          src={secondary}
          alt={`${p.title} alternative`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
      </div>
      <div className="flex items-center justify-between px-2.5 py-3">
        <div>
          <div className="text-sm font-medium text-ink">{p.title}</div>
          <div className="text-xs text-ink/60">{p.category}</div>
        </div>
        <div className="text-sm text-ink">{formatPrice(p.price)}</div>
      </div>
      <div className="px-2.5 pb-3">
        <div className="flex gap-1.5">
          {p.colors.slice(0, 6).map((c) => (
            <span
              key={c}
              title={c}
              className={
                "h-2.5 w-2.5 rounded-full ring-1 ring-black/10 " +
                (c === "cream"
                  ? "bg-[#F6F2EA]"
                  : c === "sand"
                  ? "bg-[#E8E2D6]"
                  : c === "taupe"
                  ? "bg-[#B7AFA3]"
                  : "bg-[#FCFAF7]")
              }
            />
          ))}
        </div>
      </div>
    </Link>
  );
}
