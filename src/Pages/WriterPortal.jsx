import React from "react";
import {  FaAward, FaRocket, FaShieldAlt, FaGem, FaChartLine } from "react-icons/fa";

const WriterPortal = () => {
  return (
    <div className="max-w-5xl mx-auto my-16 p-10 bg-white dark:bg-zinc-950 rounded-[3rem] border border-zinc-100 dark:border-zinc-900 shadow-2xl shadow-zinc-200/40 dark:shadow-none">
      
      {/* 1. Header Section */}
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest">
          Join our Community
        </div>
        <h2 className="text-5xl font-black text-zinc-900 dark:text-white mb-6">
          Write for <span className="text-indigo-600">Habify</span>
        </h2>
        <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto text-lg">
          Empower readers, share your unique perspective, and grow your professional brand on the world's fastest-growing habit-tracking and lifestyle platform.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* 2. Exclusive Facilities */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold flex items-center gap-3 text-zinc-800 dark:text-zinc-100">
            <FaRocket className="text-indigo-500" /> Exclusive Facilities
          </h3>
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors">
              <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-xl text-green-600">
                <FaGem size={20} />
              </div>
              <div>
                <p className="font-bold text-zinc-900 dark:text-zinc-100">Gem Rewards System</p>
                <p className="text-sm text-zinc-500">Earn exclusive Habify Gems based on article performance and reader engagement.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl text-blue-600">
                <FaChartLine size={20} />
              </div>
              <div>
                <p className="font-bold text-zinc-900 dark:text-zinc-100">Advanced Analytics</p>
                <p className="text-sm text-zinc-500">Track your reach with detailed dashboards showing views, read-time, and audience location.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors">
              <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl text-purple-600">
                <FaAward size={20} />
              </div>
              <div>
                <p className="font-bold text-zinc-900 dark:text-zinc-100">Author Verification</p>
                <p className="text-sm text-zinc-500">Get the "Verified Contributor" badge once you reach 5 high-quality published stories.</p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Terms & Guidelines */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold flex items-center gap-3 text-zinc-800 dark:text-zinc-100">
            <FaShieldAlt className="text-orange-500" /> Content Guidelines
          </h3>
          <div className="bg-zinc-50 dark:bg-zinc-900/40 p-8 rounded-4xl border border-zinc-100 dark:border-zinc-800">
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                <span className="w-1.5 h-1.5 mt-2 rounded-full bg-indigo-500 shrink-0"></span>
                <span><strong>Originality:</strong> All content must be 100% original. Plagiarism results in permanent account suspension.</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                <span className="w-1.5 h-1.5 mt-2 rounded-full bg-indigo-500 shrink-0"></span>
                <span><strong>Quality Standards:</strong> Articles must be at least 600 words with proper formatting and high-res cover images.</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                <span className="w-1.5 h-1.5 mt-2 rounded-full bg-indigo-500 shrink-0"></span>
                <span><strong>Ethical Reporting:</strong> No misinformation, hate speech, or promotional spam is allowed within the body.</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                <span className="w-1.5 h-1.5 mt-2 rounded-full bg-indigo-500 shrink-0"></span>
                <span><strong>Rights:</strong> Habify reserves the right to edit or remove content that violates our community standards.</span>
              </li>
            </ul>
          </div>
        </div>

      </div>

      {/* 4. Final Call to Action */}
      <div className="mt-16 pt-10 border-t border-zinc-100 dark:border-zinc-900 flex flex-col items-center">
        <button className="px-12 py-5 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-extrabold rounded-2xl shadow-2xl hover:bg-indigo-600 dark:hover:bg-indigo-500 hover:text-white transition-all transform hover:scale-[1.05]">
          Apply to Write Now
        </button>
        <div className="mt-6 flex items-center gap-6">
          <p className="text-xs text-zinc-400 font-medium">Agreement Updated: April 2026</p>
          <span className="text-zinc-300">|</span>
          <p className="text-xs text-zinc-400 hover:text-indigo-500 cursor-pointer transition-colors">Privacy Policy</p>
        </div>
      </div>
      
    </div>
  );
};

export default WriterPortal;