import React from 'react';
import { MapPin, Phone, Mail, MessageCircle, Send } from 'lucide-react';
import { motion } from 'motion/react';

export function Contact() {
  return (
    <div className="bg-stone-50 min-h-screen py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">Get in Touch</h1>
          <p className="text-stone-600 text-lg">
            Have a question about an order or want to learn more about our honey? We'd love to hear from you.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-stone-900 mb-8">Contact Information</h2>
            
            <div className="space-y-8">
              <div className="flex gap-5">
                <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 mb-1">Phone</h4>
                  <p className="text-stone-600 mb-1">Sat - Thu, 9am - 6pm</p>
                  <a href="tel:+971501234567" className="text-lg font-semibold text-amber-600 hover:underline">+971 50 123 4567</a>
                </div>
              </div>
              
              <div className="flex gap-5">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 mb-1">WhatsApp</h4>
                  <p className="text-stone-600 mb-1">Fastest response times</p>
                  <a href="#" className="text-lg font-semibold text-green-600 hover:underline">Chat with us</a>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-12 h-12 bg-stone-200 text-stone-700 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 mb-1">Email</h4>
                  <p className="text-stone-600 mb-1">We aim to reply within 24 hours.</p>
                  <a href="mailto:hello@asalalasal.com" className="text-lg font-semibold text-stone-900 hover:underline">hello@asalalasal.com</a>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-12 h-12 bg-stone-200 text-stone-700 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 mb-1">Location</h4>
                  <p className="text-stone-600">
                    123 Apiary Valley, <br/>
                    Nature Reserve, Dubai, UAE
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-stone-100">
            <h2 className="text-2xl font-bold text-stone-900 mb-6">Send us a Message</h2>
            <form className="space-y-6" onSubmit={e => e.preventDefault()}>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="block text-sm font-medium text-stone-700">First Name</label>
                  <input type="text" id="firstName" className="w-full items-center h-12 px-4 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-colors" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="block text-sm font-medium text-stone-700">Last Name</label>
                  <input type="text" id="lastName" className="w-full flex items-center h-12 px-4 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-colors" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-stone-700">Email Address</label>
                <input type="email" id="email" className="w-full flex items-center h-12 px-4 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-colors" />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium text-stone-700">Subject</label>
                <select id="subject" className="w-full flex items-center h-12 px-4 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-colors">
                  <option>Order Inquiry</option>
                  <option>Product Question</option>
                  <option>Wholesale</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-stone-700">Message</label>
                <textarea id="message" rows={4} className="w-full flex py-3 px-4 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-colors"></textarea>
              </div>

              <button className="w-full h-14 btn-primary rounded-xl font-bold flex items-center justify-center gap-2 hover:-translate-y-1 hover:shadow-lg transition active:scale-[0.98]">
                Send Message
                <Send className="w-4 h-4 ml-2" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
