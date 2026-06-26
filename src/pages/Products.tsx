import { motion } from 'motion/react';
import { ShoppingBag, ArrowRight, Star } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function Products() {
  const products = [
    {
      id: 1,
      name: "Classic Round Spectacles",
      price: "₹999",
      rating: 4.8,
      features: [
        "Lightweight metal frame",
        "Anti-glare lenses",
        "Comfortable nose pads"
      ],
      image: "https://images.unsplash.com/photo-1483412468200-72182dbbc544?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      name: "Modern Square Frames",
      price: "₹1,299",
      rating: 4.9,
      features: [
        "Stylish square design",
        "Scratch-resistant lenses",
        "Suitable for office wear"
      ],
      image: "https://images.unsplash.com/photo-1572097098485-9eabcd1810f6?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      name: "Blue Light Blockers",
      price: "₹1,499",
      rating: 4.7,
      features: [
        "Digital screen protection",
        "Ultra-lightweight design",
        "Ideal for professionals"
      ],
      image: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 4,
      name: "Premium Titanium",
      price: "₹2,999",
      rating: 5.0,
      features: [
        "Aerospace titanium",
        "Premium matte finish",
        "Long-lasting durability"
      ],
      image: "https://images.unsplash.com/photo-1509695507497-903c140c43b0?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 5,
      name: "Polarized Sunnies",
      price: "₹1,799",
      rating: 4.8,
      features: [
        "100% UV protection",
        "Polarized lenses",
        "Acetate fashion frame"
      ],
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 6,
      name: "Tortoiseshell Round",
      price: "₹1,599",
      rating: 4.6,
      features: [
        "Vintage Havana print",
        "Spring hinges",
        "CR-39 advanced lenses"
      ],
      image: "https://images.unsplash.com/photo-1534438097560-6421376840d2?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const categories = [
    "Men's Eyewear",
    "Women's Eyewear",
    "Kids' Eyewear",
    "Sunglasses",
    "Blue Light Glasses",
    "Premium Collection"
  ];

  return (
    <div className="pt-32 pb-32 bg-[#FAF9F6] min-h-screen">
      <Helmet>
        <title>Shop Collection | BlinkStyle Eyewear</title>
        <meta name="description" content="Shop our complete collection of premium eyeglasses and sunglasses. Find the perfect frame to suit your style and vision needs." />
        <link rel="canonical" href="https://blinkstyle.netlify.app/products" />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Area */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-serif text-5xl md:text-6xl font-bold text-zinc-950 mb-4"
            >
              The Collection
            </motion.h1>
            <p className="text-zinc-500 font-light text-lg">Discover our full range of meticulously designed eyewear, crafted to elevate your everyday perspective.</p>
          </div>
          <div className="text-sm font-semibold tracking-widest uppercase text-zinc-400 pb-2">
             {products.length} Styles Available
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <div className="w-full lg:w-64 shrink-0">
             <div className="sticky top-32">
               <h3 className="text-xs font-bold tracking-widest uppercase text-zinc-900 mb-6">Collections</h3>
               <ul className="space-y-4">
                 {categories.map((cat, i) => (
                   <li key={i}>
                     <button className="text-zinc-500 hover:text-zinc-950 transition-colors font-light bg-transparent border-none text-left w-full cursor-pointer flex items-center justify-between group">
                       <span>{cat}</span>
                       <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-amber-600" />
                     </button>
                   </li>
                 ))}
               </ul>

               <hr className="my-8 border-zinc-200" />
               
               <h3 className="text-xs font-bold tracking-widest uppercase text-zinc-900 mb-6">Price Range</h3>
               <div className="space-y-3 font-light text-zinc-500">
                 <label className="flex items-center gap-3 cursor-pointer hover:text-zinc-900 transition-colors">
                   <input type="checkbox" className="accent-zinc-900 w-4 h-4 rounded" /> <span>Under ₹1,000</span>
                 </label>
                 <label className="flex items-center gap-3 cursor-pointer hover:text-zinc-900 transition-colors">
                   <input type="checkbox" className="accent-zinc-900 w-4 h-4 rounded" /> <span>₹1,000 - ₹2,000</span>
                 </label>
                 <label className="flex items-center gap-3 cursor-pointer hover:text-zinc-900 transition-colors">
                   <input type="checkbox" className="accent-zinc-900 w-4 h-4 rounded" /> <span>Over ₹2,000</span>
                 </label>
               </div>
             </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-y-12 gap-x-8">
              {products.map((product, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  key={product.id} 
                  className="group flex flex-col"
                >
                  <div className="h-80 overflow-hidden relative bg-zinc-100 mb-6 rounded-2xl group-hover:shadow-xl transition-shadow duration-300">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-zinc-900 flex items-center gap-1">
                       <Star className="w-3 h-3 fill-amber-500 text-amber-500" /> {product.rating}
                    </div>
                  </div>
                  
                  <div className="flex flex-col flex-1 px-1">
                    <div className="flex justify-between items-start mb-2 gap-4">
                      <h3 className="font-serif text-2xl font-medium text-zinc-950 leading-tight group-hover:text-amber-700 transition-colors">{product.name}</h3>
                      <span className="text-lg font-medium text-zinc-600">{product.price}</span>
                    </div>
                    
                    <ul className="space-y-1.5 mb-6 flex-1 text-sm text-zinc-500 font-light mt-2">
                      {product.features.map((feature, j) => (
                        <li key={j} className="flex items-center gap-2">
                          <span className="w-1 h-1 bg-amber-500 rounded-full"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <button className="w-full py-4 border border-zinc-200 hover:bg-zinc-950 hover:text-white hover:border-zinc-950 text-zinc-900 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 font-medium">
                      Add to Bag
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Pagination / Load More */}
            <div className="mt-20 flex justify-center border-t border-zinc-200 pt-10">
              <button className="px-10 py-4 rounded-full border border-zinc-300 text-zinc-600 font-medium hover:border-zinc-950 hover:text-zinc-950 transition-colors">
                Load More Styles
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
