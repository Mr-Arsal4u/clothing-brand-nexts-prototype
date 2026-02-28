"use client";

import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/currency";
import Link from "next/link";

export default function CheckoutPage() {
  const { items, totalPrice } = useCart();
  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="mb-6 text-2xl text-ink">Checkout</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <form className="space-y-4 md:col-span-2">
          <div className="rounded-lg border border-ink/10 bg-offwhite p-5">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="block text-xs text-ink/60">First name</label>
                <input className="mt-1 w-full rounded-md border border-ink/10 bg-white px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="block text-xs text-ink/60">Last name</label>
                <input className="mt-1 w-full rounded-md border border-ink/10 bg-white px-3 py-2 text-sm" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs text-ink/60">Email</label>
                <input type="email" className="mt-1 w-full rounded-md border border-ink/10 bg-white px-3 py-2 text-sm" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs text-ink/60">Address</label>
                <input className="mt-1 w-full rounded-md border border-ink/10 bg-white px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="block text-xs text-ink/60">City</label>
                <input className="mt-1 w-full rounded-md border border-ink/10 bg-white px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="block text-xs text-ink/60">Postal code</label>
                <input className="mt-1 w-full rounded-md border border-ink/10 bg-white px-3 py-2 text-sm" />
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-ink/10 bg-offwhite p-5">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="md:col-span-2 text-sm text-ink/60">Payment details</div>
              <div className="md:col-span-2">
                <label className="block text-xs text-ink/60">Card number</label>
                <input className="mt-1 w-full rounded-md border border-ink/10 bg-white px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="block text-xs text-ink/60">Expiry</label>
                <input placeholder="MM/YY" className="mt-1 w-full rounded-md border border-ink/10 bg-white px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="block text-xs text-ink/60">CVC</label>
                <input className="mt-1 w-full rounded-md border border-ink/10 bg-white px-3 py-2 text-sm" />
              </div>
            </div>
          </div>
          <button className="rounded-md bg-ink px-5 py-3 text-sm text-offwhite hover:bg-ink/90">
            Place Order
          </button>
        </form>
        <div>
          <div className="rounded-lg border border-ink/10 bg-offwhite p-5">
            <div className="mb-2 text-sm text-ink/60">Order summary</div>
            <div className="space-y-1 text-sm">
              {items.map((i) => (
                <div key={i.slug} className="flex items-center justify-between">
                  <span className="text-ink/70">
                    {i.title} × {i.qty}
                  </span>
                  <span className="text-ink">{formatPrice(i.price * i.qty)}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between text-sm">
              <span className="text-ink/70">Subtotal</span>
              <span className="text-ink">{formatPrice(totalPrice)}</span>
            </div>
            <Link href="/cart" className="mt-2 block text-xs text-ink/60 hover:text-ink">
              Edit cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
