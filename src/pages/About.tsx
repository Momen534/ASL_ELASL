import React from 'react';
import { ShieldCheck, Heart, Leaf } from 'lucide-react';
import { motion } from 'motion/react';

export function About() {
  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-stone-900 text-white py-24 md:py-32">
         <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1590050858547-dccf7d08316c?q=80&w=2000&auto=format&fit=crop" 
            alt="Beekeeper working" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
            <p className="text-xl text-stone-300 leading-relaxed">
              Born from a deep respect for nature and the vital role of bees. We bring you honey exactly as it was intended to be.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-stone-900 mb-6">A Tradition of Purity</h2>
              <p className="text-stone-600 text-lg mb-6 leading-relaxed">
                Asal Al'Asal began with a simple observation: most honey on supermarket shelves didn't taste like the honey from our childhood. It was over-processed, heated, and stripped of its natural goodness.
              </p>
              <p className="text-stone-600 text-lg mb-6 leading-relaxed">
                We set out to change that by partnering directly with passionate, ethical beekeepers who prioritize the health of their hives over mass production. Our apiaries are located in pristine natural environments, far from industrial pollution.
              </p>
              <p className="text-stone-600 text-lg leading-relaxed">
                Every jar of our honey is raw, unheated, and unfiltered. It contains all the natural enzymes, pollen, and propolis that make honey a true superfood.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1587049352847-ec3195f27fe8?q=80&w=600&auto=format&fit=crop" alt="Honey jar" className="rounded-2xl w-full h-80 object-cover" />
              <img src="https://images.unsplash.com/photo-1563223552-30d01adcefa3?q=80&w=600&auto=format&fit=crop" alt="Honeycomb" className="rounded-2xl w-full h-80 object-cover translate-y-8" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">Our Core Values</h2>
            <p className="text-stone-600">The principles that guide everything we do, from hive to jar.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 shrink-0">
                <Leaf className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">100% Natural</h3>
              <p className="text-stone-600">No additives, no artificial flavors, and no added sugars. Just pure honey.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 shrink-0">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">Ethical Beekeeping</h3>
              <p className="text-stone-600">We leave enough honey for the bees to thrive through the winter and never use harsh chemicals.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 shrink-0">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">Uncompromising Quality</h3>
              <p className="text-stone-600">Every batch is tested to ensure it meets our strict standards for purity and taste.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
