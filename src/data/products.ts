export interface Product {
  id: string;
  name: string;
  nameAr?: string;
  description: string;
  price: number;
  image: string;
  images: string[];
  category: string;
  size: string;
  stock: number;
  rating: number;
  reviews: number;
  badges: string[];
}

export const products: Product[] = [
  {
    id: "sidr-premium",
    name: "Premium Royal Sidr Honey",
    nameAr: "عسل سدر ملكي فاخر",
    description: "Our highest grade Sidr honey, harvested from the ancient Sidr trees. Known for its rich, buttery taste and potent health benefits. Unheated, unfiltered, and 100% raw.",
    price: 85.00,
    image: "https://images.unsplash.com/photo-1587049352847-ec3195f27fe8?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1587049352847-ec3195f27fe8?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1621509176378-da2709218d6e?q=80&w=800&auto=format&fit=crop"
    ],
    category: "Sidr",
    size: "500g",
    stock: 12,
    rating: 4.9,
    reviews: 128,
    badges: ["Best Seller", "100% Raw"]
  },
  {
    id: "wildflower-spring",
    name: "Spring Wildflower Honey",
    nameAr: "عسل زهور الربيع البرية",
    description: "A bright, floral honey gathered from wild mountain meadows. Perfect for sweetening tea, drizzling over yogurt, or everyday wellness.",
    price: 45.00,
    image: "https://images.unsplash.com/photo-1558583055-d7ac00b1a822?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1558583055-d7ac00b1a822?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?q=80&w=800&auto=format&fit=crop"
    ],
    category: "Wildflower",
    size: "500g",
    stock: 45,
    rating: 4.7,
    reviews: 84,
    badges: ["Organic"]
  },
  {
    id: "clover-pure",
    name: "Pure White Clover Honey",
    nameAr: "عسل برسيم أبيض نقي",
    description: "A mild, sweet, and classic honey. Creamy and smooth, making it the perfect choice for baking and daily family use.",
    price: 35.00,
    image: "https://images.unsplash.com/photo-1621509176378-da2709218d6e?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1621509176378-da2709218d6e?q=80&w=800&auto=format&fit=crop"
    ],
    category: "Clover",
    size: "500g",
    stock: 60,
    rating: 4.8,
    reviews: 210,
    badges: ["Family Favorite"]
  },
  {
    id: "honeycomb-raw",
    name: "Raw Comb Honey",
    nameAr: "شهد العسل الخام",
    description: "Experience honey exactly as the bees made it. Our raw honeycomb is completely unprocessed, offering a unique texture and the purest flavor.",
    price: 55.00,
    image: "https://images.unsplash.com/photo-1563223552-30d01adcefa3?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1563223552-30d01adcefa3?q=80&w=800&auto=format&fit=crop"
    ],
    category: "Honeycomb",
    size: "350g",
    stock: 8,
    rating: 5.0,
    reviews: 42,
    badges: ["Limited Edition"]
  },
  {
    id: "bundle-trio",
    name: "The Apiary Trio Bundle",
    nameAr: "باقة المناحل الثلاثية",
    description: "Can't decide? Get our top three honeys at a discounted price. Includes Sidr, Wildflower, and Clover (250g each).",
    price: 90.00,
    image: "https://images.unsplash.com/photo-1473682976662-79051c911ee0?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1473682976662-79051c911ee0?q=80&w=800&auto=format&fit=crop"
    ],
    category: "Bundle",
    size: "750g Total",
    stock: 20,
    rating: 4.9,
    reviews: 56,
    badges: ["Bundle Deals", "Save 15%"]
  }
];
