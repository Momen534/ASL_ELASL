import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Leaf, Heart, ArrowRight, Droplet, Sun, CheckCircle2, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';

export function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="flex flex-col w-full">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-50 to-stone-100">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1558583055-d7ac00b1a822?q=80&w=2000&auto=format&fit=crop" 
            alt="Honey dripping" 
            className="w-full h-full object-cover mix-blend-overlay opacity-20"
          />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-6 py-20 md:py-32 lg:py-40">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 leading-[1.1] mb-6">
                100% Pure Natural Honey <br className="hidden md:block"/>
                <span className="text-amber-600 block mt-2 text-3xl md:text-4xl font-arabic" dir="rtl">مباشرة من خلايا النحل</span>
              </h1>
              
              <p className="text-lg md:text-xl text-stone-600 mb-2 max-w-xl">
                Premium, raw, and organic honey sourced directly from our pristine apiaries.
              </p>
              <p className="text-lg text-amber-700 font-medium font-arabic mb-8" dir="rtl">
                بدون إضافات – بدون تسخين – من مناحلنا مباشرة
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/shop"
                  className="inline-flex items-center justify-center gap-2 btn-primary px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
                >
                  Shop Now
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="#story"
                  className="inline-flex items-center justify-center gap-2 btn-secondary px-8 py-4 rounded-xl font-bold hover:bg-stone-100 transition-all text-stone-900 border border-stone-900"
                >
                  Explore Our Honey
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRUST INDICATORS */}
      <section className="bg-white py-12 border-b border-stone-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center shrink-0">
                <Leaf className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-stone-900">100% Organic</h4>
                <p className="text-sm text-stone-500">Certified origin</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center shrink-0">
                <Heart className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-stone-900">Raw & Unheated</h4>
                <p className="text-sm text-stone-500">Preserved enzymes</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-stone-900">Quality Tested</h4>
                <p className="text-sm text-stone-500">Purity guaranteed</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center shrink-0">
                <Star className="w-6 h-6 fill-current" />
              </div>
              <div>
                <h4 className="font-bold text-stone-900">10,000+</h4>
                <p className="text-sm text-stone-500">Happy customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BEST SELLERS */}
      <section className="py-20 md:py-24 bg-stone-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-end justify-between mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">Our Best Sellers</h2>
              <p className="text-stone-600">Discover our most loved honey varieties, harvested with care and delivered purely to your table.</p>
            </div>
            <Link to="/shop" className="hidden border-b-2 border-stone-900 text-stone-900 font-medium pb-1 md:flex items-center gap-1 hover:text-amber-600 hover:border-amber-600 transition-colors">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} featured />
            ))}
          </div>
          
          <div className="mt-10 text-center md:hidden">
             <Link to="/shop" className="inline-flex items-center gap-2 btn-primary px-6 py-3 rounded-xl font-bold shadow-sm">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* WHY OUR HONEY */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1590050858547-dccf7d08316c?q=80&w=800&auto=format&fit=crop" alt="Honey pouring" className="rounded-2xl object-cover h-64 w-full" />
              <img src="https://images.unsplash.com/photo-1621509176378-da2709218d6e?q=80&w=800&auto=format&fit=crop" alt="Honeycomb" className="rounded-2xl object-cover h-64 w-full translate-y-8" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">Why Asal Al'Asal Honey?</h2>
              <p className="text-stone-600 text-lg mb-8 leading-relaxed">
                Most commercial honey is pasteurized and filtered, stripping away the natural pollen, propolis, and health benefits. We do things differently.
              </p>
              
              <ul className="space-y-6">
                {[
                  { title: "Direct from the Apiary", desc: "No middlemen. Straight from our hives to your jar." },
                  { title: "Raw & Unprocessed", desc: "Never heated above naturally occurring hive temperatures." },
                  { title: "Rich Biological Value", desc: "Contains natural pollen, enzymes, and antioxidants." },
                  { title: "Sustainable Beekeeping", desc: "We prioritize the health of our bees and their environment." }
                ].map((feature, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="mt-1 flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-amber-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-stone-900 text-lg">{feature.title}</h4>
                      <p className="text-stone-600">{feature.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-20 bg-stone-900 text-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Loved by Honey Connoisseurs</h2>
            <p className="text-stone-400">Don't just take our word for it. Here is what our customers are saying.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { text: "The Sidr honey is incredible. Rich, dark, and you can instantly taste the purity. Will definitely be ordering again.", name: "Ahmad M.", rating: 5 },
              { text: "Finally found real raw honeycomb! The texture is perfect and it feels so good knowing it's untouched.", name: "Sarah J.", rating: 5 },
              { text: "I've replaced all my sugar with the Wildflower honey. Fast delivery and premium packaging.", name: "Omar F.", rating: 5 }
            ].map((review, i) => (
              <div key={i} className="bg-stone-800 p-8 rounded-2xl">
                <div className="flex gap-1 text-amber-500 mb-6">
                  {[...Array(review.rating)].map((_, j) => <Star key={j} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-stone-300 text-lg mb-6 leading-relaxed">"{review.text}"</p>
                <p className="font-semibold text-white">— {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 honey-gradient relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-amber-500 rounded-full filter blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-[500px] h-[500px] bg-amber-700 rounded-full filter blur-3xl opacity-50"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Taste Nature's Liquid Gold</h2>
          <p className="text-xl text-amber-100 mb-10 max-w-2xl mx-auto">
            Join thousands of others who have switched to 100% natural, raw honey. 
            Enjoy free shipping on your first order.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center justify-center gap-2 btn-primary px-10 py-5 rounded-xl font-bold text-lg hover:-translate-y-1 transition-all shadow-xl"
          >
            Order Your Honey Today 🍯
          </Link>
        </div>
      </section>

    </div>
  );
}
