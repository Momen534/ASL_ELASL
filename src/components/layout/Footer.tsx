import React from 'react';
import { Hexagon, Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 text-white">
               <div className="relative flex items-center justify-center w-10 h-10 rounded-full honey-gradient text-white">
                <Hexagon className="h-6 w-6 fill-white/20" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl tracking-tight leading-none text-white">
                  ASAL AL'ASAL
                </span>
                <span className="text-[10px] uppercase tracking-widest text-amber-500 font-semibold mt-0.5">
                  Est. 2023
                </span>
              </div>
            </Link>
            <p className="text-stone-400 text-sm leading-relaxed max-w-sm">
              Premium, 100% natural organic honey sourced directly from our pristine apiaries. 
              No additives, no heating, just nature's golden perfection.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-amber-600 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-amber-600 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-amber-600 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/shop" className="hover:text-amber-500 transition-colors">Shop Honey</Link></li>
              <li><Link to="/about" className="hover:text-amber-500 transition-colors">Our Story</Link></li>
              <li><Link to="/faq" className="hover:text-amber-500 transition-colors">FAQs</Link></li>
              <li><Link to="/contact" className="hover:text-amber-500 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-white font-semibold mb-6">Customer Service</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Returns & Refunds</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Track Order</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-amber-500 shrink-0" />
                <span className="text-sm">123 Apiary Valley, Nature Reserve, Dubai, UAE</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-amber-500 shrink-0" />
                <span className="text-sm">+971 50 123 4567</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-amber-500 shrink-0" />
                <span className="text-sm">hello@asalalasal.com</span>
              </li>
            </ul>
          </div>
          
        </div>
        
        <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-500">
          <p>&copy; {new Date().getFullYear()} Asal Al'Asal. All rights reserved.</p>
          <div className="flex gap-4">
            <span>Secured Payments</span>
            {/* Payment icons could go here */}
          </div>
        </div>
      </div>
    </footer>
  );
}
