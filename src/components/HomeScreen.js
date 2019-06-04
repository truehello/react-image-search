import React from "react";
import Searchbar from "./Searchbar";
import Background from "../images/earth-large.jpg";

const HomeScreen = ({ setQuery }) => {
  const mainStyle = {
    backgroundImage: `url(${Background})`
  };

  return (
    <main className="flex items-center justify-center h-full" style={mainStyle}>
      <div className="flex flex-col items-center justify-center bg-black rounded text-center p-8 m-4  sm:w-full md:max-w-1/2 lg:max-w-4xl xl:w-4xl">
        <h2 className="text-3xl text-white mb-4">
          Search millions of royalty-free photos from around the web
        </h2>

        <Searchbar />

      </div>
    </main>
  );
};

export default HomeScreen;
