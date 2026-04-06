import React from "react";
import { useLoaderData, useNavigate } from "react-router";
import { FaArrowLeft, FaRegBookmark, FaShareAlt } from "react-icons/fa";

const DetailsCard = () => {
  const blog = useLoaderData();
  const navigate = useNavigate();
  
  const { url, title, content, category, userName, userPhoto, date } = blog;

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-300 pb-20">
      
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors font-medium mb-10 group"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Feed
        </button>

        {/* Article Header */}
        <div className="space-y-6">
          <span className="px-3 py-1 bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest rounded-full">
            {category || "Uncategorized"}
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-zinc-50 leading-[1.1] tracking-tight">
            {title}
          </h1>

          {/* User Profile & Info Section */}
          <div className="flex flex-wrap items-center justify-between gap-6 py-6 border-y border-zinc-100 dark:border-zinc-900">
            <div className="flex items-center gap-4">
              <img
                src={userPhoto || "https://ui-avatars.com/api/?name=" + (userName || "User")}
                alt={userName}
                className="w-14 h-14 rounded-full object-cover border-2 border-indigo-100 dark:border-zinc-800"
              />
              <div>
                <p className="text-lg font-bold text-zinc-900 dark:text-zinc-100 leading-none mb-1">
                  {userName || "Imran Hossan"}
                </p>
                <p className="text-sm text-zinc-500">
                  {date || "Published on April 6, 2026"} • 5 min read
                </p>
              </div>
            </div>

            {/* Social Actions */}
            <div className="flex items-center gap-3">
              <button className="p-3 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-500 transition-all">
                <FaRegBookmark size={20} />
              </button>
              <button className="p-3 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-500 transition-all">
                <FaShareAlt size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* ৪. Hero Image */}
        <div className="mt-10 mb-12">
          <img
            src={url}
            alt={title}
            className="w-full h-auto max-h-125 object-cover rounded-3xl shadow-2xl shadow-zinc-200 dark:shadow-none"
            onError={(e) => {
              e.target.src = "https://placehold.co/1200x600?text=Image+Not+Available";
            }}
          />
          <p className="text-center text-zinc-400 text-sm mt-4 italic">
            Visual representation of {category}
          </p>
        </div>

        {/* ৫. Blog Content */}
        <article className="prose prose-lg prose-zinc dark:prose-invert max-w-none">
          <p className="text-zinc-700 dark:text-zinc-300 leading-[1.8] text-lg md:text-xl whitespace-pre-line">
            {content}
          </p>
        </article>

        {/* ৬. Newsletter / Footer (Optional) */}
        <div className="mt-20 p-8 md:p-12 bg-zinc-50 dark:bg-zinc-900 rounded-[2.5rem] text-center space-y-4">
          <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">Enjoyed this article?</h3>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-md mx-auto">
            Subscribe to our newsletter to receive more stories like this directly in your inbox.
          </p>
          <div className="flex max-w-sm mx-auto gap-2 pt-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-5 py-3 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button className="px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold rounded-2xl">
              Join
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DetailsCard;