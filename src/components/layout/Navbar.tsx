import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ShoppingBag, Menu, X, Hexagon } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { cn } from '../../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Shop', path: '/shop' },
  { name: 'About Us', path: '/about' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Contact', path: '/contact' },
];

export function Navbar() {
  const { cartCount, setIsCartOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-40 w-full transition-all duration-300',
        isScrolled
          ? 'glass-nav py-3'
          : 'bg-stone-50 py-5'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 -ml-2 text-stone-600 hover:text-stone-900 focus:outline-none"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group flex-1 md:flex-none justify-center md:justify-start">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-full honey-gradient text-white group-hover:scale-105 transition-transform">
              {/* Replace this with uploaded logo if available, using Hexagon for now as a honeycomb reference */}
              <Hexagon className="h-6 w-6 fill-white/20" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-tight text-stone-900 leading-none">
                ASAL AL'ASAL
              </span>
              <span className="text-[10px] uppercase tracking-widest text-amber-600 font-semibold mt-0.5">
                Premium Organic Honey
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  cn(
                    'text-sm font-medium transition-colors hover:text-amber-600',
                    isActive ? 'text-amber-600' : 'text-stone-600'
                  )
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Cart Icon & Actions */}
          <div className="flex items-center gap-4 flex-1 md:flex-none justify-end">
            <button
              onClick={() => setIsCartOpen(true)}
              className="group relative p-2 -mr-2 text-stone-600 hover:text-amber-600 transition-colors focus:outline-none"
              aria-label="Open cart"
            >
              <ShoppingBag className="h-6 w-6 transition-transform group-hover:scale-110" />
              <AnimatePresence>
                {cartCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute top-0 right-0 inline-flex items-center justify-center w-5 h-5 text-[10px] font-bold text-white bg-amber-600 rounded-full border-2 border-stone-50"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-stone-900/40 z-50 backdrop-blur-sm md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-4/5 max-w-sm bg-stone-50 shadow-2xl z-50 md:hidden flex flex-col"
            >
              <div className="p-5 flex items-center justify-between border-b border-stone-200">
                <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2">
                   <div className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 text-amber-600">
                    <Hexagon className="h-5 w-5 fill-amber-500/20" />
                  </div>
                  <span className="font-bold text-lg text-stone-900">ASAL AL'ASAL</span>
                </Link>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-stone-500 hover:text-stone-900"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto py-6 px-5 flex flex-col gap-6">
                {NAV_LINKS.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        'text-lg font-medium transition-colors',
                        isActive ? 'text-amber-600' : 'text-stone-800'
                      )
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>
              <div className="p-5 bg-stone-100 mt-auto">
                <p className="text-sm text-stone-600 mb-4 text-center">Free shipping on all orders over $100</p>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsCartOpen(true);
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-amber-600 text-white rounded-full py-3.5 font-medium hover:bg-amber-700 transition"
                >
                  <ShoppingBag className="w-5 h-5" />
                  View Cart ({cartCount})
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
