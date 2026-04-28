import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { Star, ShieldCheck, Heart, Leaf, Minus, Plus, ShoppingBag, Truck } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';

export function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <button onClick={() => navigate('/shop')} className="text-amber-600 underline">Return to Shop</button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20 lg:py-24">
        
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Images */}
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="aspect-square bg-stone-50 rounded-3xl overflow-hidden border border-stone-100"
            >
              <img 
                src={product.images[activeImageIndex]} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            {product.images.length > 1 && (
              <div className="flex gap-4 overflow-x-auto pb-2">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`shrink-0 w-24 h-24 rounded-xl overflow-hidden border-2 transition-all ${
                      activeImageIndex === idx ? 'border-amber-500' : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="flex flex-col">
            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              {product.badges.map(badge => (
                <span key={badge} className={cn(
                  "text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest",
                  badge.toLowerCase().includes('organic') || badge.toLowerCase().includes('raw')
                    ? "badge-green"
                    : "bg-amber-100 text-amber-800"
                )}>
                  {badge}
                </span>
              ))}
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900 leading-tight mb-2">
              {product.name}
            </h1>
            {product.nameAr && (
              <p className="text-xl md:text-2xl text-stone-500 font-medium font-arabic mb-4" dir="rtl">{product.nameAr}</p>
            )}

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center text-amber-500">
                {[...Array(Math.floor(product.rating))].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="text-sm font-medium text-stone-600">{product.rating} ({product.reviews} reviews)</span>
            </div>

            <div className="text-3xl font-bold text-stone-900 mb-8 border-b border-stone-100 pb-8">
              ${product.price.toFixed(2)}
            </div>

            <p className="text-stone-600 text-lg leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Urgency / Scarcity */}
            {product.stock < 15 && (
              <div className="flex items-center gap-2 text-red-600 font-medium bg-red-50 p-3 rounded-lg mb-8">
                <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></div>
                Only {product.stock} left in stock - order soon.
              </div>
            )}

            {/* Add to Cart Actions */}
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-4">
                <div className="flex items-center border-2 border-stone-200 rounded-full bg-white h-14 px-2 w-32 shrink-0 justify-between">
                  <button 
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    className="w-10 h-10 flex items-center justify-center text-stone-500 hover:text-stone-900"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="font-semibold text-lg">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(q => q + 1)}
                    className="w-10 h-10 flex items-center justify-center text-stone-500 hover:text-stone-900"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                
                <button
                  onClick={handleAddToCart}
                  className="flex-1 btn-primary rounded-xl h-14 flex items-center justify-center gap-2 font-bold text-lg hover:shadow-xl hover:-translate-y-1 transition-all active:scale-[0.98]"
                >
                  <ShoppingBag className="w-5 h-5" />
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Value Props */}
            <div className="grid grid-cols-2 gap-4 border-t border-stone-100 pt-8 mt-auto">
              <div className="flex items-start gap-3">
                <Truck className="w-6 h-6 text-amber-500 shrink-0" />
                <div>
                  <h5 className="font-bold text-stone-900 text-sm">Free Delivery</h5>
                  <p className="text-xs text-stone-500 mt-0.5">On orders over $100</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-6 h-6 text-amber-500 shrink-0" />
                <div>
                  <h5 className="font-bold text-stone-900 text-sm">Quality Assured</h5>
                  <p className="text-xs text-stone-500 mt-0.5">100% natural</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
