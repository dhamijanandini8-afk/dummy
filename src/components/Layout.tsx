import { Link, Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Glasses, ShoppingBag, Menu, X, Instagram, Facebook, Twitter, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="min-h-screen flex flex-col font-sans text-zinc-900 bg-[#FAF9F6] selection:bg-amber-200 selection:text-zinc-900">
      {/* Navigation */}
      <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-lg shadow-sm py-3' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-12">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group" onClick={closeMenu}>
             <div className={`p-2.5 rounded-full transition-all duration-300 ${scrolled ? 'bg-zinc-950 text-white' : 'bg-zinc-950 text-white'}`}>
               <Glasses className="w-5 h-5" />
             </div>
             <span className={`font-serif text-2xl font-bold tracking-tight transition-colors duration-300 text-zinc-950`}>BlinkStyle</span>
            </Link>

            {/* Desktop Nav */}
            <div className={`hidden md:flex items-center space-x-8`}>
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-sm tracking-wide transition-all duration-300 ${
                      isActive 
                        ? 'text-zinc-950 font-semibold border-b border-zinc-950 pb-1' 
                        : 'text-zinc-500 font-medium hover:text-zinc-950 pb-1 border-b border-transparent hover:border-zinc-300'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* Icons / Actions */}
            <div className="hidden md:flex items-center space-x-6">
              <button className={`relative p-2 transition-colors duration-300 text-zinc-600 hover:text-zinc-950`}>
                <span className="text-sm font-medium uppercase tracking-widest flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4" /> Cart (0)
                </span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
               <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 transition-colors ${scrolled ? 'text-zinc-950' : 'text-zinc-950'}`}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-zinc-200 shadow-2xl origin-top"
            >
              <div className="px-6 py-8 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={closeMenu}
                    className={`block py-2 text-2xl font-serif transition-all ${
                      location.pathname === link.path
                        ? 'text-zinc-950 font-bold'
                        : 'text-zinc-500 hover:text-zinc-950'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
             key={location.pathname}
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             exit={{ opacity: 0, y: -10 }}
             transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-zinc-950 text-zinc-400 py-24 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
            <div className="md:col-span-12 lg:col-span-5 space-y-8">
              <Link to="/" className="flex items-center gap-3 group inline-flex">
                <Glasses className="w-8 h-8 text-white" />
                <span className="font-serif text-3xl font-bold tracking-wider text-white">BlinkStyle</span>
              </Link>
              <p className="text-xl font-serif italic text-amber-500">
                "Clear Vision, Timeless Fashion."
              </p>
              <p className="max-w-md leading-relaxed font-light">
                At BlinkStyle, we believe eyewear is more than just a necessity—it's an extension of your personality. Experience clarity crafted with elegance.
              </p>
            </div>
            
            <div className="md:col-span-4 lg:col-span-2">
              <h3 className="text-white font-semibold mb-6 tracking-widest uppercase text-xs">Navigation</h3>
              <ul className="space-y-4 text-sm font-light">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="hover:text-amber-500 transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-4 lg:col-span-2">
              <h3 className="text-white font-semibold mb-6 tracking-widest uppercase text-xs">Support</h3>
              <ul className="space-y-4 text-sm font-light">
                {['FAQ', 'Shipping & Returns', 'Track Order', 'Warranty'].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-amber-500 transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-4 lg:col-span-3">
              <h3 className="text-white font-semibold mb-6 tracking-widest uppercase text-xs">Stay in Touch</h3>
              <div className="flex space-x-3 mb-8">
                {[Instagram, Facebook, Twitter, Mail].map((Icon, idx) => (
                  <a key={idx} href="#" className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-amber-500 hover:border-amber-500 hover:text-zinc-950 transition-all duration-300">
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-20 pt-8 border-t border-zinc-900 text-sm flex flex-col md:flex-row justify-between items-center gap-4 font-light">
             <p>© 2026 BlinkStyle Eyewear Pvt. Ltd. All rights reserved.</p>
             <div className="flex gap-6">
                <a href="#" className="hover:text-white">Privacy Policy</a>
                <a href="#" className="hover:text-white">Terms of Service</a>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
