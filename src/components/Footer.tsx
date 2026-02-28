import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-offwhite">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-12 md:grid-cols-3">
        <div className="space-y-2">
          <div className="text-lg tracking-[0.2em] text-ink">NORD ATELIER</div>
          <p className="text-sm text-ink/60">
            Scandinavian-inspired essentials crafted with care.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="space-y-2">
            <Link href="/collection" className="block text-ink/70 hover:text-ink">
              Collection
            </Link>
            <Link href="/about" className="block text-ink/70 hover:text-ink">
              About
            </Link>
            <Link href="/contact" className="block text-ink/70 hover:text-ink">
              Contact
            </Link>
          </div>
          <div className="space-y-2">
            <Link href="#" className="block text-ink/70 hover:text-ink">
              Shipping
            </Link>
            <Link href="#" className="block text-ink/70 hover:text-ink">
              Returns
            </Link>
            <Link href="#" className="block text-ink/70 hover:text-ink">
              Sustainability
            </Link>
          </div>
        </div>
        <div className="text-sm text-ink/60 md:text-right">
          © {new Date().getFullYear()} Nord Atelier
        </div>
      </div>
    </footer>
  );
}
