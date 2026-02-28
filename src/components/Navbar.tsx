'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";

function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Link
      href={href}
      className="px-3 py-2 text-sm tracking-wide text-ink/80 hover:text-ink transition-colors"
    >
      <span className="relative">
        {label}
        {active ? (
          <span className="absolute left-0 -bottom-1 h-px w-full bg-ink" />
        ) : null}
      </span>
    </Link>
  );
}

export default function Navbar() {
  const { totalQty } = useCart();
  return (
    <header className="sticky top-0 z-40 w-full border-b border-ink/10 backdrop-blur bg-offwhite/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl tracking-[0.2em] text-ink">
          NORD ATELIER
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          <NavLink href="/collection" label="Collection" />
          <NavLink href="/about" label="About" />
          <NavLink href="/contact" label="Contact" />
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/collection" className="text-sm text-ink/80 hover:text-ink">
            New Arrivals
          </Link>
          <Link
            aria-label="Cart"
            href="/cart"
            className="relative rounded-full bg-sand/60 px-3 py-2 text-ink hover:bg-sand transition-colors"
          >
            <span>Cart</span>
            <AnimatePresence initial={false}>
              {totalQty > 0 && (
                <motion.span
                  key={totalQty}
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.6, opacity: 0 }}
                  className="absolute -right-2 -top-2 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-ink px-1 text-[10px] text-offwhite"
                >
                  {totalQty}
                </motion.span>
              )}
            </AnimatePresence>
          </Link>
        </div>
      </div>
    </header>
  );
}
