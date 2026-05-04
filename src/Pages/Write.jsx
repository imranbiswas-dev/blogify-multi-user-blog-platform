import React, { useContext } from "react";
import { FaCloudUploadAlt, FaHashtag, FaParagraph } from "react-icons/fa";
import { MdOutlineCategory } from "react-icons/md";
import Swal from "sweetalert2";
import { AuthContext } from "../Components/Context/AuthContext";

const Write = () => {
  const { user } = useContext(AuthContext);
  const handlePublishPost = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const blogData = Object.fromEntries(formData.entries());

    const newBlog = {
      ...blogData,
      email: user?.email,
      username: user?.displayName,
      photo: user?.photoURL,
    };

    // ===  send blogs data to database ===
    fetch("https://blogify-server-mrpu.onrender.com/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBlog),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Story published successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        }
      });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 py-12 px-6 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10 text-center lg:text-left">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-2">
            Create a New Story
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400">
            Share your thoughts with the global community.
          </p>
        </div>

        <form onSubmit={handlePublishPost} className="space-y-8">
          {/* Image Input (URL based for now as per Coffee Project) */}
          <div className="relative group border-2 border-dashed border-zinc-200 dark:border-zinc-800 rounded-3xl p-12 text-center bg-zinc-50/50 dark:bg-zinc-900/30">
            <input
              type="text"
              name="url"
              required
              placeholder="Paste your cover image URL here..."
              className="w-full px-5 py-4 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 text-zinc-900 dark:text-zinc-100"
            />
            <div className="mt-4 flex flex-col items-center gap-2">
              <FaCloudUploadAlt size={32} className="text-zinc-400" />
              <p className="text-xs text-zinc-400">{}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
                <FaHashtag className="text-indigo-500" /> Blog Title
              </label>
              <input
                type="text"
                name="title"
                required
                placeholder="Enter title..."
                className="w-full px-5 py-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
                <MdOutlineCategory className="text-indigo-500" /> Category
              </label>
              <select
                name="category"
                className="w-full px-5 py-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 cursor-pointer appearance-none"
              >
                <option value="Technology">Technology</option>
                <option value="Programming">Programming</option>
                <option value="Lifestyle">Lifestyle</option>
                <option value="Health">Health</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
              <FaParagraph className="text-indigo-500" /> Content Body
            </label>
            <textarea
              name="content"
              required
              rows="10"
              placeholder="Tell your story..."
              className="w-full px-5 py-5 rounded-3xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 resize-none"
            ></textarea>
          </div>

          <div className="flex justify-end pt-4 border-t border-zinc-100 dark:border-zinc-900">
            <button
              type="submit"
              className="px-10 py-4 bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 font-bold rounded-2xl shadow-xl hover:scale-[1.02] transition-all"
            >
              Publish Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Write;
