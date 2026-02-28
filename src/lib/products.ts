export type Product = {
  slug: string;
  title: string;
  price: number;
  images: string[];
  colors: string[];
  sizes: string[];
  description: string;
  category: string;
  tags?: string[];
};

export const products: Product[] = [
  {
    slug: "linen-overshirt-sand",
    title: "Linen Overshirt",
    price: 129,
    images: [
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1520975940173-25b5d3baf3ea?auto=format&fit=crop&w=1600&q=80",
    ],
    colors: ["sand", "taupe", "offwhite"],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "Relaxed-fit linen overshirt in sand. Minimal details and drop shoulders for a refined silhouette.",
    category: "Outerwear",
    tags: ["new", "linen"],
  },
  {
    slug: "merino-crew-cream",
    title: "Merino Crew Knit",
    price: 149,
    images: [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1600&q=80",
    ],
    colors: ["cream", "taupe"],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "Lightweight merino wool sweater with a soft hand feel. Designed for layering.",
    category: "Knitwear",
  },
  {
    slug: "tailored-trouser-taupe",
    title: "Tailored Trouser",
    price: 179,
    images: [
      "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1503342217505-b0a15cf70449?auto=format&fit=crop&w=1600&q=80",
    ],
    colors: ["taupe", "sand"],
    sizes: ["28", "30", "32", "34", "36"],
    description: "Straight-leg trouser in a crisp, Italian wool blend.",
    category: "Bottoms",
  },
  {
    slug: "organic-tee-offwhite",
    title: "Organic Cotton Tee",
    price: 49,
    images: [
      "https://images.unsplash.com/photo-1520975922512-9f7ae31e7a36?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1600&q=80",
    ],
    colors: ["offwhite", "cream", "sand"],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "Premium-weight tee with a clean neckline and refined drape.",
    category: "Tops",
    tags: ["new"],
  },
  {
    slug: "wool-coat-taupe",
    title: "Wool Topcoat",
    price: 389,
    images: [
      "https://images.unsplash.com/photo-1516822003754-cca485356ecb?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1503342217505-b0a15cf70449?auto=format&fit=crop&w=1600&q=80",
    ],
    colors: ["taupe", "sand"],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Minimal single-breasted coat with hidden placket.",
    category: "Outerwear",
  },
  {
    slug: "linen-trouser-sand",
    title: "Linen Trouser",
    price: 139,
    images: [
      "https://images.unsplash.com/photo-1520975940173-25b5d3baf3ea?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1600&q=80",
    ],
    colors: ["sand", "offwhite"],
    sizes: ["28", "30", "32", "34", "36"],
    description:
      "Breathable linen trouser with a tapered leg and single pleat.",
    category: "Bottoms",
  },
  {
    slug: "oxford-shirt-cream",
    title: "Oxford Shirt",
    price: 89,
    images: [
      "https://images.unsplash.com/photo-1520975922512-9f7ae31e7a36?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1600&q=80",
    ],
    colors: ["cream", "offwhite"],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Button-down shirt with a subtle texture and clean collar.",
    category: "Tops",
  },
  {
    slug: "cashmere-scarf-taupe",
    title: "Cashmere Scarf",
    price: 129,
    images: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1600&q=80",
    ],
    colors: ["taupe", "sand", "cream"],
    sizes: ["OS"],
    description: "Soft brushed cashmere scarf with hand-finished edges.",
    category: "Accessories",
  },
  {
    slug: "relaxed-blazer-sand",
    title: "Relaxed Blazer",
    price: 259,
    images: [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1600&q=80",
    ],
    colors: ["sand", "taupe"],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Unstructured blazer with refined shoulders and notch lapel.",
    category: "Outerwear",
  },
  {
    slug: "silk-shirt-offwhite",
    title: "Silk Shirt",
    price: 199,
    images: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&w=1600&q=80",
    ],
    colors: ["offwhite", "cream"],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Fluid silk shirt with concealed placket.",
    category: "Tops",
  },
  {
    slug: "pleated-skirt-cream",
    title: "Pleated Midi Skirt",
    price: 169,
    images: [
      "https://images.unsplash.com/photo-1520975940173-25b5d3baf3ea?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1600&q=80",
    ],
    colors: ["cream", "sand"],
    sizes: ["XS", "S", "M", "L"],
    description: "Crisp pleated skirt with a mid-rise waist.",
    category: "Skirts",
  },
  {
    slug: "minimal-sneaker-offwhite",
    title: "Minimal Sneaker",
    price: 199,
    images: [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1520975922512-9f7ae31e7a36?auto=format&fit=crop&w=1600&q=80",
    ],
    colors: ["offwhite", "cream"],
    sizes: ["36", "37", "38", "39", "40", "41", "42", "43"],
    description:
      "Low-profile leather sneaker with tonal stitching and rubber outsole.",
    category: "Footwear",
  },
];

export const allCategories = Array.from(
  new Set(products.map((p) => p.category))
).sort();

export const allColors = ["cream", "sand", "taupe", "offwhite"];

export const allSizes = Array.from(
  new Set(products.flatMap((p) => p.sizes))
);

export function findProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
