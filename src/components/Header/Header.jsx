import React from "react";

const Header = () => {
  return (
    <div className="navbar bg-base-100 py-8 flex justify-between lg:flex-row flex-col space-y-4">
      <div className="">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 *:font-normal"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Recipes</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Search</a>
            </li>
          </ul>
        </div>
        <a className="text-3xl font-bold">Recipe Calories</a>
      </div>
      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal px-1 *:text-base">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Recipes</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Search</a>
          </li>
        </ul>
      </div>
      <div className="flex gap-4">
        <label
          className=" flex items-center text-base gap-2 py-3 px-7 rounded-3xl bg-[#150B2B0D] "
          htmlFor="search"
        >
          <img src="../../../public/search-icon.png " alt="" />
          <input
            className="bg-[#F3F3F4]"
            type="text"
            id="search"
            placeholder="Search"
          />
        </label>
        <button>
          <img src="../../../public/user-icon.png" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Header;
