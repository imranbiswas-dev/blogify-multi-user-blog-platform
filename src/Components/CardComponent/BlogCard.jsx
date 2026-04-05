import React from "react";
import { FaHeart, FaFacebookF, FaPinterestP, FaEnvelope } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { CiMenuKebab } from "react-icons/ci";

const BlogCard = ({ blog }) => {
  const { url, title, content, category, date, likes, userName, userPhoto } =
    blog;

  return (
    <div className="flex flex-col md:flex-row gap-6 bg-white border border-zinc-100 rounded-lg overflow-hidden p-6 hover:shadow-lg transition-all mb-6 shadow-md">
      {/* ১. Image Section */}
      <div className="md:w-1/3 flex-shrink-0">
        <img
          src={url}
          alt={title}
          className="w-full h-full min-h-[220px] object-cover rounded-md aspect-[4/3]"
        />
      </div>

      {/* ২. Content Section */}
      <div className="md:w-2/3 flex flex-col justify-between">
        <div>
          {/* User Profile Section (Added recently) */}
          <div className="flex items-center gap-3 mb-4">
            <img
              src={
                userPhoto || "https://i.ibb.co.com/8D6S9mN/user-placeholder.png"
              }
              alt="User"
              className="w-10 h-10 rounded-full object-cover border border-zinc-200"
            />
            <div className="flex justify-between w-full">
              <div>
                <p className="text-sm font-bold text-zinc-900 leading-none">
                  {userName || "Imran Hossan"}{" "}
                  {/* 
                default value added for testing, replace with actual userName from data when available
                */}
                </p>
                <p className="text-[10px] text-zinc-400 mt-1 uppercase tracking-wider">
                  {date || "April 5, 2026"}
                </p>
              </div>
              <div>
                <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button" className="">
                    <CiMenuKebab size={24} />
                  </div>
                  <ul
                    tabIndex="-1"
                    className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                  >
                    <li>
                      <a>Item 1</a>
                    </li>
                    <li>
                      <a>Item 2</a>
                    </li>
                  </ul>
                </div>
                
              </div>
            </div>
          </div>

          {/* Category */}
          <div className="text-[10px] text-teal-600 font-bold uppercase tracking-[0.2em] mb-2">
            {category}
          </div>

          {/* Blog Title */}
          <h2 className="text-xl md:text-2xl font-bold text-zinc-950 hover:text-teal-600 transition-colors leading-tight mb-3">
            {title}
          </h2>

          <div className="w-12 h-[2px] bg-teal-600/40 mb-4"></div>

          {/* Blog Content */}
          <p className="text-zinc-600 text-sm md:text-base leading-relaxed line-clamp-3">
            {content}
          </p>
        </div>

        {/* Social Share and Like Section */}
        <div className="border-t border-zinc-100 pt-5 mt-6 flex items-center justify-between">
          <div className="flex items-center gap-2 text-zinc-500 hover:text-red-500 cursor-pointer transition-colors">
            <FaHeart className="text-sm" />
            <span className="text-xs font-bold">{likes || 276}</span>
          </div>

          <div className="flex items-center gap-4 text-zinc-400">
            <a href="#" className="hover:text-blue-700 transition-all">
              <FaFacebookF size={14} />
            </a>
            <a href="#" className="hover:text-black transition-all">
              <BsTwitterX size={14} />
            </a>
            <a href="#" className="hover:text-red-600 transition-all">
              <FaPinterestP size={14} />
            </a>
            <a href="#" className="hover:text-teal-600 transition-all">
              <FaEnvelope size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
