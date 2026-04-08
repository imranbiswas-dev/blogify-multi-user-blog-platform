import React, { useState } from "react";
import BlogCard from "../Components/CardComponent/BlogCard";

const Blogs = ({ blogsData }) => {
  const initialBlogs = blogsData;
  const [blogs, setBlogs] = useState(initialBlogs);
  return (
    <div className="flex flex-col-reverse">
      {blogs.map((blog) => (
        <div key={blog._id}>
          <BlogCard blog={blog} blogs={blogs} setBlogs={setBlogs} />
        </div>
      ))}
    </div>
  );
};

export default Blogs;
