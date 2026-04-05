import React from 'react';
import { AiFillFacebook } from 'react-icons/ai';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaDiscord, FaPinterest } from 'react-icons/fa6';

const Hero = () => {
  const cards = [
    {
      title: "Thoughtful Reads",
      desc: "In-depth articles on life, mindfulness, creativity and personal growth.",
      color: "bg-emerald-600",
      text: "text-emerald-700",
      link: "Browse Articles →"
    },
    {
      title: "Share Your Voice",
      desc: "Publish your stories and connect with readers who value depth and honesty.",
      color: "bg-amber-600",
      text: "text-amber-700",
      link: "Start Writing →"
    },
    {
      title: "Join Our Circle",
      desc: "A growing community of writers and readers who appreciate calm, meaningful content.",
      color: "bg-gray-800",
      text: "text-gray-700",
      link: "Meet the Community →"
    }
  ];

  return (
    <section className=" bg-white dark:bg-zinc-950 text-gray-900 dark:text-zinc-100 py-10 md:py-14 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* ==================== LEFT SIDE - TEXT ==================== */}
        <div className="space-y-8 ">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white dark:bg-zinc-900 rounded-full shadow-sm border border-gray-100 dark:border-zinc-800">
            <span className="text-emerald-600">✦</span>
            <span className="text-sm font-medium tracking-wide">Stories that feel like home</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tighter">
            Words that grow,<br />
            <span className="text-emerald-700">thoughts that bloom.</span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-zinc-400 max-w-lg">
            A peaceful corner of the internet for thoughtful writing, 
            honest stories, and reflections inspired by life and nature.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 hover:scale-[1.03]">
              Start Reading <span>→</span>
            </button>
            <button className="px-8 py-4 border border-gray-300 dark:border-zinc-700 hover:border-gray-400 font-medium rounded-2xl transition-all duration-300">
              Become a Writer
            </button>
          </div>

          {/* Social Media */}
          <div className="flex gap-10 pt-6 text-sm">
            <div>
              <span className="font-semibold text-gray-900 dark:text-white"><AiFillFacebook size={34} /></span>
              <p className="text-gray-500">Facebook</p>
            </div>
            <div>
              <span className="font-semibold text-gray-900 dark:text-white"><FaPinterest size={34} /></span>
              <p className="text-gray-500">Pinterest</p>
            </div>
            <div>
              <span className="font-semibold text-gray-900 dark:text-white"><FaDiscord size={34} /></span>
              <p className="text-gray-500">Discord</p>
            </div>
           
          </div>
        </div>

        {/* ==================== RIGHT SIDE - SLIDER (Mobile) & GRID (Desktop) ==================== */}
        {/* 'flex overflow-x-auto' মোবাইলে স্লাইডার তৈরি করবে, আর 'lg:grid' বড় স্ক্রিনে আগের মতো হয়ে যাবে */}
        <div className="flex overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar gap-6 md:grid md:grid-cols-2 lg:overflow-visible lg:pb-0">
          
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="min-w-[85%] sm:min-w-[45%] lg:min-w-full snap-center bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 group"
            >
              <div className={`w-11 h-1.5 ${card.color} rounded-full mb-6`}></div>
              <h3 className="text-2xl font-semibold mb-3 dark:text-white">{card.title}</h3>
              <p className="text-gray-600 dark:text-zinc-400 leading-relaxed text-sm md:text-base">
                {card.desc}
              </p>
              <div className={`mt-8 ${card.text} font-medium group-hover:underline cursor-pointer`}>
                {card.link}
              </div>
            </div>
          ))}

        </div>
      </div>

    </section>
  );
};

export default Hero;