import React from "react";
import { FaRegPenToSquare } from "react-icons/fa6";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineSubscriptions } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="mx-5 max-w-7xl lg:mx-auto">
        <div className="navbar">
          <div className=" navbar-start flex-1 flex gap-4">
            <h1 className="text-2xl font-semibold">
              <span>BLOG</span>
              <span className="font-light">IFY</span>
            </h1>
            {/* search bar */}
            <div>
              <fieldset className="w-full space-y-1 bg-base-300 rounded-xl">
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
          <div className="navbar-center">{/* empty */}</div>
          <div className="navbar-end flex gap-5">
            <div className="md:flex items-center gap-5 hidden ">
                <button className="btn btn-neutral rounded-4xl flex gap-2 ">
                  <MdOutlineSubscriptions size={20} />Go Premium
                </button>
              <button className="flex items-center gap-2 text-lg text-gray-500">
                <FaRegPenToSquare size={24} /> Write
              </button>
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
      </div>
    </div>
  );
};

export default Navbar;
