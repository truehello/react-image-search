import React from "react";

import Searchbar from "./Searchbar";
import apertureIcon from "../images/aperture.svg";

const Header = ({ setSearchQuery }) => {
  return (
    <header className="fixed w-full z-40">
      <nav
        className="flex flex-col lg:flex-row items-center justify-between flex-wrap py-4 px-6 shadow bg-white"
        // style={{ backgroundColor: `rgba(255,255,255,1)` }}
      >
        <div className="mb-2 p-2">
          
          <h1 className="font-semibold text-2xl tracking-tight text-black">
          <img
            src={apertureIcon}
            alt="Aperture Icon"
            className="inline-block mr-2"
          />
            Image Search
          </h1>
          <h5 className="text-xs text-right tracking-tight text-gray-800">from 
          <a href="https://unsplash.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1"
          >
            unsplash
              
          </a>
          </h5>
          
        </div>

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
