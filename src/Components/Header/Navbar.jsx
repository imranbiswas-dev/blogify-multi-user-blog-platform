import React from "react";
import { FaRegPenToSquare } from "react-icons/fa6";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineSubscriptions } from "react-icons/md";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="bg-white dark:bg-zinc-950 transition-colors duration-300 sticky top-0 z-50 ">
      <div className="absolute top-0  -translate-x-1/2 w-full h-full opacity-10 dark:opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-400 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-400 rounded-full blur-[120px]"></div>
      </div>
      <div className="mx-5 max-w-7xl lg:mx-auto">
        <div className="navbar ">
          <div className=" navbar-start flex-1 flex gap-4">
            <div className="dropdown sm:hidden ">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a>Homepage</a>
                </li>
                <li>
                  <a>Portfolio</a>
                </li>
                <li>
                  <a>About</a>
                </li>
              </ul>
            </div>
            <Link to="/" className="text-2xl font-semibold">
              <span>BLOG</span>
              <span className="font-light">IFY</span>
            </Link>
            {/* search bar */}
            <div className="">
              <fieldset className="w-full space-y-1  rounded-xl bg-white dark:bg-zinc-900  shadow-sm border border-gray-300 dark:border-zinc-800">
                <label htmlFor="Search" className="hidden">
                  Search
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <button
                      type="button"
                      title="search"
                      className="p-1 focus:outline-none focus:ring"
                    >
                      <svg
                        fill="currentColor"
                        viewBox="0 0 512 512"
                        className="w-4 h-4 dark:text-gray-800"
                      >
                        <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                      </svg>
                    </button>
                  </span>
                  <input
                    type="search"
                    name="Search"
                    placeholder="Search..."
                    className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none dark:bg-gray-100 dark:text-gray-800 focus:dark:bg-gray-50 focus:dark:border-violet-600"
                  />
                </div>
              </fieldset>
            </div>
          </div>
          <div className="navbar-center gap-5 "></div>
          <div className="navbar-end flex gap-5">
            <div className="md:flex items-center gap-5 hidden ">
              <button className="btn btn-neutral rounded-4xl flex gap-2 ">
                <MdOutlineSubscriptions size={20} />
                Go Premium
              </button>
              <Link
                to="/write"
                className="flex items-center gap-2 text-lg text-gray-500"
              >
                <FaRegPenToSquare size={24} /> Write
              </Link>
              <p>
                <IoMdNotificationsOutline size={24} />
              </p>
            </div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-gray-300">
          {" "}
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
