import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function Blog() {
  const posts = [
    {
      title: "How to Choose the Perfect Spectacles",
      summary: "Choosing spectacles depends on your face shape, comfort, and lifestyle. Round faces often suit rectangular frames, while square faces look great with round frames.",
      date: "June 2026",
      category: "Style Guide",
      image: "https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Benefits of Blue Light Glasses",
      summary: "Blue light glasses help reduce digital eye strain caused by long hours of screen use. They can improve comfort during work and study sessions.",
      date: "May 2026",
      category: "Eye Health",
      image: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Latest Eyewear Trends in 2026",
      summary: "This year, oversized frames, transparent designs, and lightweight titanium frames are trending among eyewear enthusiasts.",
      date: "April 2026",
      category: "Trends",
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "How to Care for Your Glasses",
      summary: "Clean lenses regularly. Store glasses in a protective case. Avoid placing lenses face-down. Use microfiber cloths for cleaning.",
      date: "March 2026",
      category: "Guides",
      image: "https://images.unsplash.com/photo-1509695507497-903c140c43b0?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="py-32 bg-[#FAF9F6] min-h-screen">
      <Helmet>
        <title>Eyewear Journal & Style Guide | BlinkStyle</title>
        <meta name="description" content="Read the latest trends, styling guides, and tips for choosing the perfect eyewear in the BlinkStyle Journal." />
        <link rel="canonical" href="https://blinkstyle.netlify.app/blog" />
      </Helmet>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-24">
          <h2 className="text-xs font-bold tracking-widest uppercase text-amber-600 mb-4">Editorial</h2>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl md:text-7xl font-bold text-zinc-950 mb-6 tracking-tight"
          >
            The Journal.
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {posts.map((post, i) => (
            <motion.article 
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1 }}
               key={i} 
               className="group flex flex-col"
            >
              <div className="h-80 overflow-hidden relative rounded-2xl mb-6 bg-zinc-100">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              <div className="flex items-center gap-3 text-xs tracking-widest uppercase mb-4">
                <span className="font-bold text-zinc-900">{post.category}</span>
                <span className="text-zinc-300">|</span>
                <span className="text-zinc-500 font-light">{post.date}</span>
              </div>
              
              <h2 className="font-serif text-3xl text-zinc-950 mb-4 leading-tight group-hover:text-amber-700 transition-colors">
                {post.title}
              </h2>
              
              <p className="text-zinc-500 mb-6 font-light leading-relaxed flex-1">
                {post.summary}
              </p>
              
              <div>
                <button className="text-sm font-semibold uppercase tracking-wide flex items-center text-zinc-900 border-b border-zinc-900 pb-1 hover:text-amber-700 hover:border-amber-700 transition-colors">
                  Read Journal <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
