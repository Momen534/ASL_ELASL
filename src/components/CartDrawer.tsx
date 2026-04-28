import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export function CartDrawer() {
  const { isCartOpen, setIsCartOpen, items, updateQuantity, removeFromCart, cartTotal } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-stone-900/40 z-50 backdrop-blur-sm"
            onClick={() => setIsCartOpen(false)}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-stone-100">
              <h2 className="text-xl font-semibold text-stone-900 flex items-center gap-2">
                Your Cart
                <span className="bg-amber-100 text-amber-800 text-xs py-0.5 px-2 rounded-full font-bold">
                  {items.length}
                </span>
              </h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 -mr-2 text-stone-400 hover:text-stone-900 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-5">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 text-stone-500">
                  <div className="w-20 h-20 bg-stone-50 rounded-full flex items-center justify-center mb-2">
                    <ShoppingBag className="w-8 h-8 text-stone-300" />
                  </div>
                  <p>Your cart is empty.</p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="text-amber-600 font-medium hover:underline"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <ul className="space-y-6">
                  {items.map((item) => (
                    <li key={item.id} className="flex gap-4">
                      {/* Item Image */}
                      <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0 bg-stone-50 border border-stone-100">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* Item Details */}
                      <div className="flex flex-1 flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start gap-2">
                            <h3 className="font-medium text-stone-900 leading-tight">
                              {item.name}
                            </h3>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-stone-400 hover:text-red-500 transition-colors"
                              aria-label="Remove item"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                          <p className="text-sm text-stone-500 mt-1">{item.size}</p>
                        </div>
                        
                        <div className="flex items-center justify-between mt-2">
                          {/* Quantity Controls */}
                          <div className="flex items-center border border-stone-200 rounded-full bg-stone-50">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-8 h-8 flex items-center justify-center text-stone-600 hover:text-stone-900"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="w-6 text-center text-sm font-medium">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-8 h-8 flex items-center justify-center text-stone-600 hover:text-stone-900"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          
                          {/* Price */}
                          <p className="font-semibold text-stone-900">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-stone-100 p-5 bg-stone-50/50">
                <div className="flex items-center justify-between text-stone-600 mb-2">
                  <span>Subtotal</span>
                  <span className="font-medium text-stone-900">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between text-stone-600 mb-6 text-sm">
                  <span>Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
                
                <Link
                  to="/checkout" // Note: we'll maybe just make this alert or clear cart for demo
                  className="w-full flex items-center justify-center gap-2 btn-primary rounded-xl py-4 font-semibold hover:-translate-y-1 hover:shadow-lg transition-all active:scale-[0.98]"
                  onClick={() => setIsCartOpen(false)}
                >
                  Checkout - ${cartTotal.toFixed(2)}
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
