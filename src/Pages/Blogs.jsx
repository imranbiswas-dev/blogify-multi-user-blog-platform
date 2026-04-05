import React from "react";
import BlogCard from "../Components/CardComponent/BlogCard";

const Blogs = ({ blogsData }) => {
  const blogs = blogsData;

  return (
    <div>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <BlogCard blog={blog} />
        </div>
      ))}
    </div>
  );
};

export default Blogs;
