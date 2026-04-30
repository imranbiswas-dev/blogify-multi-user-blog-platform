import React, { useContext, useEffect, useState } from "react";
import { BookmarkContext } from "./BookmarkContext";
import { AuthContext } from "./AuthContext";
import Swal from "sweetalert2";

const BookmarkProvider = ({ children }) => {
  const { user, loading } = useContext(AuthContext) || {};
  const [bookmarks, setBookmarks] = useState([]);
  const [bookmarksLoading, setBookmarksLoading] = useState(true); // ✅ নতুন

  useEffect(() => {
    // ✅ Firebase এখনো ready না → কিছু করবো না
    if (loading) return;

    // ✅ User নেই → clear করো
    if (!user?.email) {
      setBookmarks([]);
      setBookmarksLoading(false);
      return;
    }

    let ignore = false;
    setBookmarksLoading(true);

    fetch(`http://localhost:3000/bookmarks?userEmail=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (!ignore) {
          setBookmarks(data);
          setBookmarksLoading(false);
        }
      })
      .catch((err) => {
        console.error("Fetch Error:", err);
        if (!ignore) setBookmarksLoading(false);
        Swal.fire("Error", "Failed to load bookmarks!", "error");
      });

    return () => {
      ignore = true;
    };
  }, [user?.email, loading]); // ✅ loading dependency-তে আছে

  const addBookmarks = (blog) => {
    if (!user) {
      return Swal.fire("Error", "Please login first!", "error");
    }

    const isExist = bookmarks.find((item) => item.blogId === blog._id);
    if (isExist) {
      return Swal.fire("Info", "Already Bookmarked!", "info");
    }

    const bookmarkData = {
      blogId: blog._id,
      userEmail: user.email,
      title: blog.title,
      url: blog.url,
      userName: blog.userName,
    };

    fetch("http://localhost:3000/bookmarks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bookmarkData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.insertedId) {
          setBookmarks((prev) => [
            ...prev,
            { ...bookmarkData, _id: data.insertedId },
          ]);
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Bookmark saved!",
            timer: 1500,
            showConfirmButton: false,
          });
        } else {
          Swal.fire("Error", "Failed to save bookmark!", "error");
        }
      })
      .catch((err) => {
        console.error("Bookmark Error:", err);
        Swal.fire("Error", "Something went wrong!", "error");
      });
  };

  // ✅ removeFromBookmark যোগ করা হয়েছে
  const removeFromBookmark = (id) => {
    fetch(`http://localhost:3000/bookmarks/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.deletedCount > 0) {
          setBookmarks((prev) => prev.filter((b) => b._id !== id));
          Swal.fire({
            icon: "success",
            title: "Removed!",
            timer: 1500,
            showConfirmButton: false,
          });
        } else {
          Swal.fire("Error", "Failed to delete!", "error");
        }
      })
      .catch((err) => {
        console.error("Delete Error:", err);
        Swal.fire("Error", "Something went wrong!", "error");
      });
  };

  return (
    <BookmarkContext.Provider
      value={{ bookmarks, addBookmarks, removeFromBookmark, bookmarksLoading }}
    >
      {children}
    </BookmarkContext.Provider>
  );
};

export default BookmarkProvider;