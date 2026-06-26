import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Star, ArrowRight, ShieldCheck, Tag, Zap, Quote, Glasses } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function Home() {
  const collections = [
    {
      title: "Classic Elegance",
      description: "Refined frames for everyday sophistication.",
      image: "https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Luxury Titanium",
      description: "Featherlight materials, premium finish.",
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Digital Protection",
      description: "Advanced blue-light filtering lenses.",
      image: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Sun & Style",
      description: "UV-protected polarized sunglasses.",
      image: "https://images.unsplash.com/photo-1599839619722-39751411ea63?auto=format&fit=crop&q=80&w=800",
    }
  ];

  const features = [
    { icon: ShieldCheck, title: "Premium Quality", desc: "Rigorous quality checks on every pair" },
    { icon: Tag, title: "Affordable Luxury", desc: "Direct to consumer, no hidden markups" },
    { icon: Star, title: "Latest Trends", desc: "Curated styles updated every season" },
    { icon: Zap, title: "Ultra Lightweight", desc: "Comfort designed for all-day wear" },
  ];

  const reviews = [
    { name: "Priya Sharma", product: "Luxury Titanium", text: "The most comfortable glasses I've ever owned. Truly an elevated experience. The attention to detail is remarkable.", rating: 5 },
    { name: "Rahul Verma", product: "Classic Elegance", text: "Affordable prices without compromising on the premium feel. Fast delivery too!", rating: 5 },
    { name: "Aisha Khan", product: "Blue Light Blockers", text: "My screen headaches are completely gone. Plus, they look incredibly stylish at the office.", rating: 5 },
    { name: "Vikram Singh", product: "Polarized Sunnies", text: "Perfect for my weekend drives. The lens clarity is unmatched and frames sit perfectly.", rating: 4 }
  ];

  return (
    <div className="bg-slate-50">
      <Helmet>
        <title>BlinkStyle | Premium Eyewear & Spectacles</title>
        <meta name="description" content="Discover stylish and comfortable spectacles at BlinkStyle. Explore trendy eyeglasses, premium frames, and vision solutions for every look." />
        <link rel="canonical" href="https://blinkstyle.netlify.app/" />
      </Helmet>
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center justify-center bg-slate-950 text-white overflow-hidden m-2 md:m-4 rounded-3xl md:rounded-[3rem] shadow-2xl">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1582141757827-0402bba6efbc?auto=format&fit=crop&q=80&w=2000" 
            alt="Person wearing stylish glasses" 
            className="w-full h-full object-cover opacity-60 scale-105 animate-[pulse_20s_ease-in-out_infinite_alternate]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/50 to-slate-950/90 mix-blend-multiply" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 overflow-hidden relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-rose-400/0 via-rose-400/20 to-rose-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            <Star className="w-4 h-4 text-rose-300" />
            <span className="text-xs md:text-sm font-medium text-rose-50 tracking-widest uppercase">New Summer Collection 2026</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight text-white drop-shadow-xl"
          >
            See the World <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-200 via-rose-300 to-rose-500 italic font-medium pr-4">in Style</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl text-rose-100/90 mb-12 max-w-2xl mx-auto leading-relaxed font-light drop-shadow-md"
          >
            Premium eyewear designed for those who appreciate the perfect balance of comfort, durability, and timeless fashion.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex gap-6 justify-center items-center"
          >
            <Link 
              to="/products"
              className="inline-flex items-center justify-center px-10 py-4 lg:px-12 lg:py-5 bg-rose-400 hover:bg-rose-300 text-slate-950 font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-[0_0_40px_rgba(251,113,133,0.3)] group"
            >
              Shop Collection
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1509695507497-903c140c43b0?auto=format&fit=crop&q=80&w=1000" 
                  alt="Craftsmanship" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-[2rem] shadow-2xl max-w-xs border border-slate-100">
                <div className="flex text-rose-400 mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="font-serif italic text-slate-700 leading-relaxed text-lg mb-4">
                  "The most comfortable glasses I've ever owned. Truly an elevated experience."
                </p>
                <p className="font-medium text-slate-950 text-sm tracking-wide uppercase">– Priya Sharma</p>
              </div>
            </div>
            
            <div className="lg:pl-12">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-950 mb-6 leading-tight">
                Designed for visionaries, <br/>
                <span className="text-rose-500 italic">crafted for life.</span>
              </h2>
              <p className="text-lg text-slate-600 mb-12 font-light leading-relaxed">
                We believe that eyewear is an intimate accessory. It frames how you see the world, and how the world sees you. Every frame in our collection is meticulously crafted.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {features.map((feature, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-rose-100/50 text-slate-700 flex items-center justify-center shrink-0">
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-950 mb-1">{feature.title}</h3>
                      <p className="text-sm text-slate-500 leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-32 bg-white rounded-t-[4rem] shadow-[0_-20px_40px_rgba(0,0,0,0.02)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[1px] w-12 bg-rose-400"></div>
                <span className="text-rose-500 font-medium tracking-widest uppercase text-sm">Curated Selection</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-950">Featured Collections</h2>
            </div>
            <Link to="/products" className="group flex items-center gap-2 text-slate-700 font-medium hover:text-slate-900 transition-colors">
              View all products
              <div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center group-hover:bg-rose-100 transition-colors">
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {collections.map((col, idx) => (
              <Link 
                to="/products" 
                key={idx} 
                className="group relative lg:h-[450px] sm:h-[400px] h-[350px] rounded-3xl overflow-hidden block"
              >
                <img src={col.image} alt={col.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent flex flex-col justify-end p-8 transition-opacity duration-500 group-hover:opacity-90">
                  <h3 className="text-2xl font-serif text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{col.title}</h3>
                  <p className="text-rose-100/80 text-sm font-light opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">{col.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-32 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-800 to-transparent opacity-40"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center mb-16 text-center">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[1px] w-12 bg-rose-400"></div>
              <span className="text-rose-300 font-medium tracking-widest uppercase text-sm">Testimonials</span>
              <div className="h-[1px] w-12 bg-rose-400"></div>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white max-w-2xl leading-tight">
              Loved by visionaries <br/> across the country.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((review, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                key={idx} 
                className="bg-slate-900/40 backdrop-blur-sm border border-slate-800/60 p-8 rounded-[2rem] flex flex-col relative group hover:bg-slate-800/60 transition-colors"
              >
                <Quote className="w-10 h-10 text-slate-800/50 absolute top-6 right-6 group-hover:text-slate-700/50 transition-colors" />
                <div className="flex text-rose-300 mb-6 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-current' : 'text-slate-800 fill-slate-800'}`} />
                  ))}
                </div>
                <p className="font-serif italic text-rose-50/90 leading-relaxed text-lg mb-8 flex-1">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-rose-300 font-bold font-serif text-xl border border-slate-700 shadow-inner">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm">{review.name}</p>
                    <p className="text-rose-200/80 text-xs font-medium tracking-wide uppercase mt-0.5">{review.product}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <Glasses className="w-16 h-16 text-rose-400 mx-auto mb-8 opacity-80" />
          <h2 className="font-serif text-5xl md:text-6xl text-slate-950 font-bold mb-8 leading-tight">
            Ready to find your <br/> signature look?
          </h2>
          <Link 
            to="/products"
            className="inline-flex items-center justify-center px-10 py-5 bg-slate-950 hover:bg-slate-900 text-white text-lg font-medium rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-slate-900/40 hover:-translate-y-1"
          >
            Explore the Store
          </Link>
        </div>
      </section>
    </div>
  );
}
