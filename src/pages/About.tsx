import { motion } from 'motion/react';
import { Target, Eye, Heart, Shield, Droplets, CheckCircle, Sparkles } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function About() {
  const values = [
    { icon: Shield, title: "Quality First", desc: "Rigorous detail checks on every frame, ensuring lasting perfection." },
    { icon: Eye, title: "Visionary Innovation", desc: "Leading the latest in highly protective, ultra-clear lens tech." },
    { icon: Heart, title: "Empathy", desc: "Your comfort, vision, and personal style are our ultimate priority." },
    { icon: Droplets, title: "Pure Transparency", desc: "Honest pricing, ethical sourcing, and absolutely no hidden costs." },
  ];

  const differentiators = [
    "Wide range of artisanal frame styles.",
    "Premium, featherlight lens technology.",
    "Accessible luxury pricing model.",
    "Seamless & secure online ordering.",
    "Reliable, human-first customer support."
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-12 pb-24">
      <Helmet>
        <title>About Us | BlinkStyle Eyewear</title>
        <meta name="description" content="Learn more about BlinkStyle's mission to provide highly fashionable, meticulously crafted eyewear without the luxury markups." />
        <link rel="canonical" href="https://blinkstyle.netlify.app/about" />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-24 mt-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex flex-col items-center justify-center mb-8"
          >
            <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mb-4">
              <Sparkles className="w-8 h-8 text-rose-500" />
            </div>
            <div className="flex items-center gap-3">
              <div className="h-[1px] w-8 bg-rose-400"></div>
              <span className="text-rose-500 font-medium tracking-widest uppercase text-sm">Our Story</span>
              <div className="h-[1px] w-8 bg-rose-400"></div>
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-5xl md:text-7xl font-bold text-slate-950 mb-8"
          >
            Seeing the world <br/>
            <span className="text-rose-500 italic font-light">differently.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light"
          >
            BlinkStyle was founded with a simple yet ambitious mission: to provide highly fashionable, meticulously crafted eyewear without the luxury markups. We believe glasses are the most defining accessory you can wear.
          </motion.p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
          <div className="relative order-2 lg:order-1">
             <div className="aspect-square md:aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl relative">
                <img 
                  src="https://images.unsplash.com/photo-1556306535-0f09a536f01f?auto=format&fit=crop&q=80&w=1200" 
                  alt="Eyewear crafting" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent"></div>
             </div>
             <div className="absolute -bottom-10 -right-4 md:-right-10 bg-white p-8 rounded-3xl shadow-xl max-w-xs border border-slate-100">
               <h3 className="font-serif text-3xl text-slate-950 mb-2">Since 2026</h3>
               <p className="text-slate-500 font-light">Dedicated to bringing clarity and elegance to every face.</p>
             </div>
          </div>

          <div className="flex flex-col justify-center order-1 lg:order-2">
             <div className="mb-12">
               <div className="flex items-center gap-4 mb-6">
                 <div className="w-12 h-12 bg-rose-50 rounded-2xl flex items-center justify-center">
                   <Eye className="text-rose-500 w-6 h-6"/>
                 </div>
                 <h2 className="font-serif text-4xl font-bold text-slate-950">Our Vision</h2>
               </div>
               <p className="text-2xl text-slate-700 italic border-l-4 border-rose-400 pl-6 py-2">
                 "To become the world's most trusted, design-forward eyewear destination."
               </p>
             </div>

             <div>
               <div className="flex items-center gap-4 mb-6">
                 <div className="w-12 h-12 bg-rose-50 rounded-2xl flex items-center justify-center">
                   <Target className="text-slate-700 w-6 h-6"/>
                 </div>
                 <h2 className="font-serif text-4xl font-bold text-slate-950">Our Mission</h2>
               </div>
               <ul className="space-y-6">
                 {[
                   "Deliver high-quality eyewear at strictly honest prices.",
                   "Innovate constantly in lens technology and frame design.",
                   "Ensure uncompromised customer satisfaction through service."
                 ].map((item, i) => (
                   <li key={i} className="flex items-start gap-4">
                     <CheckCircle className="text-rose-400 w-6 h-6 shrink-0 mt-0.5" />
                     <span className="text-slate-600 text-lg font-light leading-relaxed">{item}</span>
                   </li>
                 ))}
               </ul>
             </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="bg-white rounded-[3rem] p-12 md:p-20 shadow-xl shadow-slate-200/50 border border-slate-100 mb-24">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-950 mb-4">Core Values</h2>
            <div className="w-16 h-1 rounded-full bg-rose-400 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {values.map((val, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 bg-slate-50 group-hover:bg-slate-950 text-slate-950 group-hover:text-rose-300 flex items-center justify-center rounded-3xl mb-6 shadow-sm transition-all duration-300">
                  <val.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-950 mb-3">{val.title}</h3>
                <p className="text-slate-500 font-light leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Different Section */}
        <div className="bg-slate-950 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
           <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900/40 via-slate-950 to-slate-950 hidden md:block"></div>
           <h2 className="font-serif text-4xl font-bold text-white mb-12 relative z-10">What Makes Us Different?</h2>
           <div className="flex flex-wrap justify-center gap-4 relative z-10">
             {differentiators.map((diff, i) => (
               <div key={i} className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-4 rounded-full border border-white/10 font-light text-rose-50 hover:bg-white/20 transition-colors cursor-default">
                 <div className="w-2 h-2 bg-rose-300 rounded-full"></div>
                 <span>{diff}</span>
               </div>
             ))}
           </div>
        </div>

      </div>
    </div>
  );
}
