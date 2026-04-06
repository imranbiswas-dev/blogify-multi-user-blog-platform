import React from "react";
import { FaHeart, FaFacebookF, FaPinterestP, FaEnvelope } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { CiMenuKebab } from "react-icons/ci";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import Swal from "sweetalert2";
import { Link } from "react-router";

const BlogCard = ({ blog , blogs, setBlogs}) => {
  const {
    _id,
    url,
    title,
    content,
    category,
    date,
    likes,
    userName,
    userPhoto,
  } = blog;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/blogs/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });

              // remove blog from state

              const remainingBlogs = blogs.filter((blog)=> blog._id !== _id)
              setBlogs(remainingBlogs);
            }
          });
      }
    });
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 bg-white border border-zinc-100 rounded-lg overflow-hidden p-6 hover:shadow-lg transition-all mb-6 shadow-md">
      {/* ১. Image Section */}
      <div className="md:w-1/3 shrink-0">
        <img
          src={url}
          alt={title}
          className="w-full h-full min-h-55 object-cover rounded-md aspect-4/3"
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
                    className="dropdown-content menu bg-base-100 rounded-box z-1 w-38 p-2 shadow-sm space-y-1"
                  >
                    <li>
                      <Link to={`update/${_id}`} className="">
                        <FiEdit /> Edit
                      </Link>
                    </li>
                    <div className="text-gray-400">
                      <hr />
                    </div>
                    <li>
                      <button onClick={() => handleDelete(_id)} className="">
                        <FiTrash2 /> Delete
                      </button>
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
          <h2 className="text-xl md:text-2xl font-bold text-zinc-950 hover:text-teal-600 transition-colors leading-tight mb-3 underline underline-offset-4">
            <Link to={`/details/${_id}`}>{title}</Link>
          </h2>

          <div className="w-12 h-0.5 bg-teal-600/40 mb-4"></div>

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
            <p className="hover:text-blue-700 transition-all">
              <FaFacebookF size={14} />
            </p>
            <p className="hover:text-black transition-all">
              <BsTwitterX size={14} />
            </p>
            <p className="hover:text-red-600 transition-all">
              <FaPinterestP size={14} />
            </p>
            <p className="hover:text-teal-600 transition-all">
              <FaEnvelope size={14} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
