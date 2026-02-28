'use client';

import { createContext, useContext, useMemo, useReducer } from "react";
import type { Product } from "@/lib/products";

export type CartItem = {
  slug: string;
  title: string;
  price: number;
  image: string;
  size?: string;
  color?: string;
  qty: number;
};

type State = {
  items: CartItem[];
};

type Action =
  | { type: "add"; item: CartItem }
  | { type: "remove"; slug: string; variant?: string }
  | { type: "qty"; slug: string; delta: number }
  | { type: "clear" };

const CartCtx = createContext<{
  items: CartItem[];
  addToCart: (p: Product, opts?: { size?: string; color?: string; qty?: number }) => void;
  removeFromCart: (slug: string) => void;
  changeQty: (slug: string, delta: number) => void;
  totalQty: number;
  totalPrice: number;
}>({
  items: [],
  addToCart: () => {},
  removeFromCart: () => {},
  changeQty: () => {},
  totalQty: 0,
  totalPrice: 0,
});

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "add": {
      const existing = state.items.find((i) => i.slug === action.item.slug);
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.slug === action.item.slug ? { ...i, qty: i.qty + action.item.qty } : i
          ),
        };
      }
      return { items: [...state.items, action.item] };
    }
    case "remove": {
      return { items: state.items.filter((i) => i.slug !== action.slug) };
    }
    case "qty": {
      return {
        items: state.items
          .map((i) =>
            i.slug === action.slug ? { ...i, qty: Math.max(1, i.qty + action.delta) } : i
          )
          .filter((i) => i.qty > 0),
      };
    }
    case "clear": {
      return { items: [] };
    }
    default:
      return state;
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, { items: [] });

  const addToCart: ReturnType<typeof useMemo> extends never
    ? never
    : (p: Product, opts?: { size?: string; color?: string; qty?: number }) => void = (p, opts) => {
    dispatch({
      type: "add",
      item: {
        slug: p.slug,
        title: p.title,
        price: p.price,
        image: p.images[0],
        size: opts?.size,
        color: opts?.color,
        qty: Math.max(1, opts?.qty ?? 1),
      },
    });
  };

  const value = useMemo(() => {
    const totalQty = state.items.reduce((s, i) => s + i.qty, 0);
    const totalPrice = state.items.reduce((s, i) => s + i.qty * i.price, 0);
    return {
      items: state.items,
      addToCart,
      removeFromCart: (slug: string) => dispatch({ type: "remove", slug }),
      changeQty: (slug: string, delta: number) =>
        dispatch({ type: "qty", slug, delta }),
      totalQty,
      totalPrice,
    };
  }, [state.items]);

  return <CartCtx.Provider value={value}>{children}</CartCtx.Provider>;
}

export function useCart() {
  return useContext(CartCtx);
}
