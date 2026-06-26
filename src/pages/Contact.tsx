import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function Contact() {
  return (
    <div className="py-32 bg-[#FAF9F6] min-h-screen">
      <Helmet>
        <title>Contact Us | BlinkStyle Eyewear</title>
        <meta name="description" content="Get in touch with BlinkStyle for any inquiries about our frames, lenses, or styling advice. We're here to help you see the world clearly." />
        <link rel="canonical" href="https://blinkstyle.netlify.app/contact" />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Text Area */}
          <div>
            <h2 className="text-xs font-bold tracking-widest uppercase text-amber-600 mb-4">Inquiries</h2>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-serif text-5xl md:text-7xl font-bold text-zinc-950 mb-8 leading-tight tracking-tight"
            >
              Let's connect.
            </motion.h1>
            <p className="text-xl text-zinc-500 font-light mb-16 max-w-md">
              Whether you have a question about frames or need styling advice, we're here to help.
            </p>

            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <MapPin className="w-6 h-6 text-zinc-400 shrink-0 mt-1" />
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-900 mb-2">Visit Us</h3>
                  <p className="text-zinc-500 font-light leading-relaxed">
                    BlinkStyle Eyewear Pvt. Ltd.<br />
                    Sector 14, Sonipat,<br />
                    Haryana, India – 131001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <Phone className="w-6 h-6 text-zinc-400 shrink-0 mt-1" />
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-900 mb-2">Call Us</h3>
                  <p className="text-zinc-500 font-light leading-relaxed">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <Mail className="w-6 h-6 text-zinc-400 shrink-0 mt-1" />
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-900 mb-2">Email Us</h3>
                  <p className="text-zinc-500 font-light leading-relaxed">support@blinkstyle.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <Clock className="w-6 h-6 text-zinc-400 shrink-0 mt-1" />
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-900 mb-2">Hours</h3>
                  <p className="text-zinc-500 font-light leading-relaxed">Mon – Sat: 9:00 AM – 7:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="bg-white p-10 md:p-14 rounded-[2rem] border border-zinc-200">
              <h2 className="font-serif text-3xl font-medium text-zinc-950 mb-8">Send a Message</h2>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-bold text-zinc-900 tracking-widest uppercase">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-zinc-300 focus:ring-0 focus:border-zinc-950 outline-none transition-colors rounded-none placeholder-zinc-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-xs font-bold text-zinc-900 tracking-widest uppercase">Phone</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-zinc-300 focus:ring-0 focus:border-zinc-950 outline-none transition-colors rounded-none placeholder-zinc-300"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <label htmlFor="email" className="text-xs font-bold text-zinc-900 tracking-widest uppercase">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-zinc-300 focus:ring-0 focus:border-zinc-950 outline-none transition-colors rounded-none placeholder-zinc-300"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2 pt-2">
                  <label htmlFor="subject" className="text-xs font-bold text-zinc-900 tracking-widest uppercase">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-zinc-300 focus:ring-0 focus:border-zinc-950 outline-none transition-colors rounded-none placeholder-zinc-300"
                    placeholder="How can we help?"
                  />
                </div>

                <div className="space-y-2 pt-2">
                  <label htmlFor="message" className="text-xs font-bold text-zinc-900 tracking-widest uppercase">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-zinc-300 focus:ring-0 focus:border-zinc-950 outline-none transition-colors rounded-none resize-none placeholder-zinc-300"
                    placeholder="Tell us what you're looking for..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full py-5 bg-zinc-950 hover:bg-zinc-800 text-white font-medium rounded-full mt-6 transition-colors"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
