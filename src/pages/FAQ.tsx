import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const faqs = [
  {
    question: "Is your honey raw?",
    answer: "Yes, 100%. Our honey is entirely raw. It is never heated above the natural temperature of the hive and is only gently strained to remove large wax particles, preserving all the beneficial enzymes, pollen, and propolis."
  },
  {
    question: "Is there added sugar or syrup in your honey?",
    answer: "Absolutely not. Our honey contains zero additives, zero corn syrup, and zero added sugars. The sweetness comes entirely from the natural nectar gathered by our bees."
  },
  {
    question: "Does your honey crystallize?",
    answer: "Yes, and this is completely normal! In fact, crystallization is a sign of high-quality, raw honey. If your honey crystallizes, simply place the jar in a bowl of warm water (not boiling) and it will gently return to a liquid state."
  },
  {
    question: "What is the shelf life of your honey?",
    answer: "Given that it is pure, raw honey, it practically never expires. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible! However, for optimal taste and texture, we recommend consuming it within 2-3 years."
  },
  {
    question: "Why does the color and flavor vary slightly between orders?",
    answer: "Because our honey is natural and minimally processed, variations in color and flavor occur based on the season, the weather, and exactly which flowers the bees were visiting during that specific harvest. We embrace these natural variations!"
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="bg-stone-50 min-h-screen py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">Frequently Asked Questions</h1>
            <p className="text-stone-600 text-lg">
              Everything you need to know about our honey, our processes, and how we ensure quality.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className="bg-white border border-stone-200 rounded-2xl overflow-hidden transition-all shadow-sm"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                  >
                    <span className="font-semibold text-lg text-stone-900 pr-4">{faq.question}</span>
                    <span className={`w-8 h-8 rounded-full bg-stone-50 flex items-center justify-center shrink-0 transition-transform ${isOpen ? 'text-amber-600' : 'text-stone-400'}`}>
                      {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </span>
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="p-6 pt-0 text-stone-600 leading-relaxed border-t border-stone-100">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
          
          <div className="mt-16 text-center bg-amber-50 p-8 rounded-3xl">
            <h3 className="text-xl font-bold text-stone-900 mb-2">Still have questions?</h3>
            <p className="text-stone-600 mb-6">We're here to help. Reach out to our team anytime.</p>
            <a href="/contact" className="inline-flex bg-stone-900 text-white font-medium px-8 py-3 rounded-full hover:bg-stone-800 transition">
              Contact Us
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
