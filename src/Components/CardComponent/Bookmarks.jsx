import React, { useContext } from "react";
import { BookmarkContext } from "../Context/BookmarkContext";
import { AuthContext } from "../Context/AuthContext";
import { Link } from "react-router";
import { FiTrash2, FiExternalLink } from "react-icons/fi";

const Bookmarks = () => {
  const { bookmarks, removeFromBookmark, bookmarksLoading } =
    useContext(BookmarkContext);
  const { loading } = useContext(AuthContext);

  
  if (loading || bookmarksLoading) return <p>Loading...</p>;

  return (
    <div>
      <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-black text-zinc-900 dark:text-white mb-8 tracking-tight uppercase">
            Your Saved Stories{" "}
            <span className="text-indigo-500">({bookmarks.length})</span>
          </h1>

          {bookmarks.length === 0 ? (
            <div className="text-center py-20 bg-white dark:bg-zinc-900 rounded-[2.5rem] border-2 border-dashed border-zinc-200 dark:border-zinc-800">
              <p className="text-zinc-500 dark:text-zinc-400 font-medium">
                No bookmarks found, Start exploring!
              </p>
              <Link
                to="/"
                className="mt-4 inline-block text-indigo-500 font-bold hover:underline"
              >
                Go to Home
              </Link>
            </div>
          ) : (
            <div className="grid gap-4">
              {bookmarks.map((b) => (
                <div
                  key={b._id}
                  className="group flex items-center justify-between bg-white dark:bg-zinc-900 p-5 rounded-3xl border border-zinc-100 dark:border-zinc-800 hover:shadow-xl hover:shadow-zinc-200/50 dark:hover:shadow-none transition-all"
                >
                  <div className="flex items-center gap-5">
                    <img
                      src={b.url}
                      alt=""
                      className="w-16 h-16 rounded-2xl object-cover"
                    />
                    <div>
                      <h3 className="font-bold text-zinc-900 dark:text-zinc-100 line-clamp-1 group-hover:text-indigo-600 transition-colors">
                        {b.title}
                      </h3>
                      <p className="text-xs text-zinc-500 mt-1">
                        By {b.userName}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Link
                      to={`/details/${b.blogId}`}
                      className="p-3 bg-zinc-50 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 rounded-xl hover:bg-indigo-500 hover:text-white transition-all"
                    >
                      <FiExternalLink size={18} />
                    </Link>
                    <button
                      onClick={() => removeFromBookmark(b._id)}
                      className="p-3 bg-zinc-50 dark:bg-zinc-800 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all"
                    >
                      <FiTrash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Bookmarks;
