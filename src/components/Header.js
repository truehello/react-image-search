import React from "react";

import Searchbar from "./Searchbar";

const Header = ({ setSearchQuery }) => {
  return (
    <header className="fixed w-full z-40">
      <nav
        className="flex flex-col lg:flex-row items-center justify-between flex-wrap p-6 shadow"
        style={{ backgroundColor: `rgba(26,27,27,.6)` }}
      >
        <div className="mb-2">
          <span className="font-semibold text-xl tracking-tight text-white">
            Image Search
          </span>
        </div>

        {/* <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div> */}

        <div className="w-full md:w-1/2 lg:w-1/2 ">
          <Searchbar setSearchQuery={setSearchQuery} />
        </div>

        <div className="hidden">
          <div>
            <a
              href="#hello"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >
              Login / Register
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
