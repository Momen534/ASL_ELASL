import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { Product } from '../data/products';
import { useCart } from '../context/CartContext';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';

interface ProductCardProps {
  key?: React.Key;
  product: Product;
  featured?: boolean;
}

export function ProductCard({ product, featured = false }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className={cn(
        "group flex flex-col bg-stone-50 rounded-2xl overflow-hidden border border-stone-900/5 card-shadow transition-all hover:shadow-2xl",
        featured ? "col-span-1" : ""
      )}
    >
      {/* Image Container */}
      <Link to={`/product/${product.id}`} className="relative aspect-square overflow-hidden bg-stone-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.badges.map(badge => (
            <span key={badge} className={cn(
              "text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm",
              badge.toLowerCase().includes('organic') || badge.toLowerCase().includes('raw')
                ? "badge-green"
                : "bg-amber-100 text-amber-800"
            )}>
              {badge}
            </span>
          ))}
        </div>
        
        {/* Quick Add Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
           <button
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            className="w-full bg-white text-stone-900 border border-amber-200 font-bold py-3 px-4 rounded-xl flex justify-center items-center gap-2 hover:bg-amber-50 transition shadow-sm"
          >
            <ShoppingBag className="w-4 h-4" />
            Quick Add
          </button>
        </div>
      </Link>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-1 text-amber-500 mb-2">
          <Star className="w-4 h-4 fill-current" />
          <span className="text-sm font-medium text-stone-700">{product.rating}</span>
          <span className="text-xs text-stone-400 ml-1">({product.reviews})</span>
        </div>
        
        <Link to={`/product/${product.id}`} className="flex-1">
          <h3 className="font-semibold text-lg text-stone-900 leading-tight mb-1 group-hover:text-amber-600 transition-colors">
            {product.name}
          </h3>
          {product.nameAr && (
            <p className="text-stone-500 text-sm font-medium font-arabic mb-2" dir="rtl">{product.nameAr}</p>
          )}
          <p className="text-sm text-stone-500 line-clamp-2 mt-2">{product.description}</p>
        </Link>
        
        <div className="mt-4 flex items-center justify-between">
          <span className="font-bold text-xl text-stone-900">${product.price.toFixed(2)}</span>
          <span className="text-xs font-medium text-stone-500 bg-stone-100 px-2 py-1 rounded-md">{product.size}</span>
        </div>
      </div>
    </motion.div>
  );
}
