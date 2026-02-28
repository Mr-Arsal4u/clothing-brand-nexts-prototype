"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/currency";

export default function CartPage() {
  const { items, totalPrice, changeQty, removeFromCart } = useCart();
  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="mb-6 text-2xl text-ink">Shopping Cart</h1>
      {items.length === 0 ? (
        <div className="rounded-xl border border-ink/10 bg-offwhite p-8 text-ink/70">
          Your cart is empty.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <div className="space-y-4">
              {items.map((i) => (
                <div
                  key={i.slug}
                  className="flex items-center gap-4 rounded-lg border border-ink/10 bg-white p-3"
                >
                  <div className="relative h-24 w-20 overflow-hidden rounded-md bg-sand/40">
                    <Image
                      src={i.image}
                      alt={i.title}
                      fill
                      sizes="120px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-ink">{i.title}</div>
                    <div className="text-xs text-ink/60">
                      {i.color ? `${i.color} · ` : ""} {i.size || ""}
                    </div>
                    <div className="mt-2 flex items-center gap-2">
                      <button
                        onClick={() => changeQty(i.slug, -1)}
                        className="rounded border border-ink/20 px-2 py-1 text-sm"
                      >
                        -
                      </button>
                      <div className="w-10 text-center text-sm">{i.qty}</div>
                      <button
                        onClick={() => changeQty(i.slug, 1)}
                        className="rounded border border-ink/20 px-2 py-1 text-sm"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeFromCart(i.slug)}
                        className="ml-3 text-xs text-ink/60 hover:text-ink"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="text-sm text-ink">
                    {formatPrice(i.price * i.qty)}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="rounded-lg border border-ink/10 bg-offwhite p-5">
              <div className="flex items-center justify-between text-sm">
                <span className="text-ink/70">Subtotal</span>
                <span className="text-ink">{formatPrice(totalPrice)}</span>
              </div>
              <Link
                href="/checkout"
                className="mt-4 block rounded-md bg-ink px-4 py-2 text-center text-sm text-offwhite hover:bg-ink/90"
              >
                Checkout
              </Link>
              <Link
                href="/collection"
                className="mt-2 block rounded-md border border-ink/20 bg-white px-4 py-2 text-center text-sm text-ink hover:border-ink/40"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
