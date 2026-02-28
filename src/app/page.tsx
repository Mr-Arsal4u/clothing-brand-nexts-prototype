import Link from "next/link";
import { products, allCategories } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />

      <section className="mx-auto max-w-6xl px-6 pb-4 pt-12">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl text-ink">New Arrivals</h2>
          <Link className="text-sm text-ink/70 hover:text-ink" href="/collection">
            View all
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {products.slice(0, 6).map((p) => (
            <ProductCard key={p.slug} p={p} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="rounded-2xl bg-cream p-8">
          <h3 className="text-lg text-ink">Categories</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {allCategories.map((c) => (
              <Link
                key={c}
                href={`/collection?category=${encodeURIComponent(c)}`}
                className="rounded-full border border-ink/15 bg-offwhite px-4 py-2 text-sm text-ink/80 hover:border-ink/30 hover:text-ink"
              >
                {c}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="relative overflow-hidden rounded-2xl">
          <Image
            src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=2000&q=80"
            alt="Editorial banner"
            width={2000}
            height={900}
            className="h-72 w-full object-cover md:h-96"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent" />
          <div className="absolute bottom-6 left-6">
            <h3 className="text-2xl text-offwhite">Editorial — Winter Calm</h3>
            <p className="text-sm text-offwhite/80">Textured layers in sand and taupe</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg text-ink">Best Sellers</h3>
          <Link className="text-sm text-ink/70 hover:text-ink" href="/collection?sort=featured">
            Shop all
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {products
            .slice()
            .sort((a, b) => b.price - a.price)
            .slice(0, 3)
            .map((p) => (
              <ProductCard key={p.slug} p={p} />
            ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-xl bg-offwhite p-8">
            <h3 className="text-ink">Materials</h3>
            <p className="mt-2 text-sm text-ink/70">
              Natural fibers and soft textures in a muted palette. We source responsibly and focus
              on long-wearing construction.
            </p>
          </div>
          <div className="rounded-xl bg-cream p-8">
            <h3 className="text-ink">Sustainability</h3>
            <p className="mt-2 text-sm text-ink/70">
              Small runs, thoughtful production, and lifetime care guidance to extend each
              garment’s life.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div className="rounded-xl bg-sand/40 p-8">
            <h3 className="text-2xl text-ink">Our Story</h3>
            <p className="mt-3 text-ink/70">
              Rooted in the North, we focus on materials, proportion, and permanence. Each piece is
              designed to integrate seamlessly into a contemplative wardrobe.
            </p>
          </div>
          <div className="rounded-xl bg-cream p-8">
            <h3 className="text-2xl text-ink">Reviews</h3>
            <div className="mt-3 space-y-3 text-sm text-ink/80">
              <p>“Impeccable quality and subtle detailing.”</p>
              <p>“The palette is perfect for a minimal wardrobe.”</p>
              <p>“Feels elevated but effortless.”</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="rounded-2xl bg-cream p-8">
          <h3 className="text-ink">Newsletter</h3>
          <p className="mt-1 text-sm text-ink/70">
            Sign up for early access to new collections.
          </p>
          <form action="#" className="mt-4 flex max-w-md gap-2">
            <input
              required
              type="email"
              placeholder="Email address"
              className="flex-1 rounded-md border border-ink/10 bg-white px-3 py-2 text-sm outline-none focus:border-ink/30"
            />
            <button className="rounded-md bg-ink px-4 py-2 text-sm text-offwhite hover:bg-ink/90">
              Join
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
