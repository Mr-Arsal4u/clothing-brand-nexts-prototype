import Link from "next/link";
import { notFound } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import ProductPageClient from "@/components/ProductPageClient";
import { findProduct, products } from "@/lib/products";

export default function ProductPage({ params }: { params: { slug: string } }) {
  const p = findProduct(params.slug);
  if (!p) return notFound();

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <div className="mb-4 text-xs text-ink/60">
        <Link className="hover:text-ink" href="/collection">
          Collection
        </Link>{" "}
        / <span className="capitalize">{p.category.toLowerCase()}</span> / {p.title}
      </div>
      <ProductPageClient product={p} />
      <section className="mx-auto mt-12 max-w-6xl">
        <h3 className="mb-4 text-lg text-ink">Related</h3>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {products
            .filter((rp) => rp.category === p.category && rp.slug !== p.slug)
            .slice(0, 3)
            .map((rp) => (
              <ProductCard key={rp.slug} p={rp} />
            ))}
        </div>
      </section>
    </div>
  );
}

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}
