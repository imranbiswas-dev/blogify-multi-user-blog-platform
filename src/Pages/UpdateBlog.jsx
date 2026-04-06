import React  from "react";
import { FaCloudUploadAlt, FaHashtag, FaParagraph } from "react-icons/fa";
import { MdOutlineCategory } from "react-icons/md";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateBlog = () => {
  const blogs = useLoaderData();
  const { url, title, content, category } = blogs;
  const handlePublishPost = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const updatedBlog = Object.fromEntries(formData.entries());

    fetch(`http://localhost:3000/blogs/${blogs._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedBlog),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your story has been updated",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 py-12 px-6 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10 text-center lg:text-left">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-2">
            Edit Your Story
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400">
            Refine your thoughts and update your blog post.
          </p>
        </div>

        <form onSubmit={handlePublishPost} className="space-y-8">
          {/* Image Input (URL based) */}
          <div className="relative group border-2 border-dashed border-indigo-200 dark:border-indigo-900/30 rounded-3xl p-10 text-center bg-zinc-50/50 dark:bg-zinc-900/30">
            <label className="block text-sm font-semibold mb-4 text-zinc-600 dark:text-zinc-400">
              Update Cover Image URL
            </label>
            <input
              type="text"
              name="url"
              defaultValue={url}
              required
              placeholder="Paste your cover image URL here..."
              className="w-full px-5 py-4 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 text-zinc-900 dark:text-zinc-100"
            />
            <div className="mt-4 flex flex-col items-center gap-2">
              <FaCloudUploadAlt size={32} className="text-indigo-400" />
              <p className="text-xs text-zinc-400 italic">
                Current image: {url.substring(0, 30)}...
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Title Input */}
            <div className="space-y-2">
              <label className="text-sm font-semibold flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
                <FaHashtag className="text-indigo-500" /> Blog Title
              </label>
              <input
                type="text"
                name="title"
                defaultValue={title}
                required
                placeholder="Enter title..."
                className="w-full px-5 py-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              />
            </div>

            {/* Category Input */}
            <div className="space-y-2">
              <label className="text-sm font-semibold flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
                <MdOutlineCategory className="text-indigo-500" /> Category
              </label>
              <select
                name="category"
                defaultValue={category}
                className="w-full px-5 py-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 cursor-pointer appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              >
                <option value="Technology">Technology</option>
                <option value="Programming">Programming</option>
                <option value="Lifestyle">Lifestyle</option>
                <option value="Health">Health</option>
                <option value="Sports">Sports</option>
                <option value="Others">Others</option>
              </select>
            </div>
          </div>

          {/* Content Body */}
          <div className="space-y-2">
            <label className="text-sm font-semibold flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
              <FaParagraph className="text-indigo-500" /> Content Body
            </label>
            <textarea
              name="content"
              defaultValue={content}
              required
              rows="10"
              placeholder="Update your story..."
              className="w-full px-5 py-5 rounded-3xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 resize-none leading-relaxed"
            ></textarea>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-4 pt-4 border-t border-zinc-100 dark:border-zinc-900">
            <button
              type="button"
              className="px-8 py-4 text-zinc-500 font-bold hover:text-zinc-900 dark:hover:text-white transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-10 py-4 bg-indigo-600 text-white font-bold rounded-2xl shadow-xl shadow-indigo-200 dark:shadow-none hover:bg-indigo-700 hover:scale-[1.02] transition-all"
            >
              Update Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateBlog;
