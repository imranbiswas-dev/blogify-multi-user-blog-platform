import React from "react";
import Hero from "../Components/Header/Hero";
import Blogs from "./Blogs";
import { useLoaderData } from "react-router-dom";
import Aside from "../Components/CardComponent/Aside";

const Home = () => {
  const blogsData = useLoaderData();

  return (
    <div>
      <Hero />
      <main className="max-w-7xl lg:mx-auto mx-5 mt-10">
        <h2 className="text-3xl font-bold mb-6">Latest Articles</h2>
        <div className="lg:grid lg:grid-cols-12 justify-between  gap-5">
          <div className="col-span-9 mb-10">
            <Blogs blogsData={blogsData} />
          </div>
          <div className="col-span-3 hidden lg:block">
            <Aside />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
