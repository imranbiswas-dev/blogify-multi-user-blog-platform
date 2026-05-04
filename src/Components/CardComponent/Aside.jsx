import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router";

const Aside = () => {
  return (
    
    
    <div className="sticky top-24 self-start h-fit space-y-6 ">
      {/* --- Advertisement Card --- */}
      <div className="relative group overflow-hidden rounded-3xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl transition-all">
        <div className="absolute top-3 right-3 z-10">
          <span className="px-2 py-0.5 bg-black/50 backdrop-blur-md text-[10px] text-white font-bold rounded uppercase tracking-widest">
            Sponsored
          </span>
        </div> 

        <div className="relative aspect-3/4 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop"
            alt="Ad Banner"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent"></div>

          <div className="absolute bottom-0 p-6 text-white">
            <h3 className="text-xl font-bold mb-2 leading-tight">
              Upgrade to iPhone 16 Pro Max
            </h3>
            <Link to="https://www.applegadgetsbd.com/product/iphone-16-pro-max">
              <button className="w-full py-3 bg-white text-black font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-indigo-500 hover:text-white transition-colors">
                Shop Now <FaExternalLinkAlt size={12} />
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* --- Simple Promo Card --- */}
      <div className="p-6 rounded-3xl bg-indigo-600 text-white shadow-lg shadow-indigo-200 dark:shadow-none">
        <h4 className="font-bold text-lg mb-2">Build Your Portfolio</h4>
        <p className="text-xs text-indigo-100 mb-4 leading-relaxed">
          Get premium templates and 24/7 support from our expert team.
        </p>
        <Link to="/writerPortal">
          <button className="text-xs font-bold bg-white text-indigo-600 px-4 py-2 rounded-lg">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Aside;
