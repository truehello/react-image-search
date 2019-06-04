import React, { useState } from "react";
//import logo from './logo.svg';
import "./App.css";

import Header from "./components/Header";
import ImageResults from './components/ImageResults'
// import HomeScreen from "./components/HomeScreen";
//import Searchbar from './components/Searchbar'

function App() {

  const [searchQuery, setSearchQuery] = useState("space");
  const [pageQuery , setPageQuery ] = useState(1)

  return (
    <div className="App h-screen">
      <Header setSearchQuery={setSearchQuery} />

      {/* <HomeScreen /> */}

      <ImageResults query={searchQuery} pageNumber={pageQuery} setPageQuery={setPageQuery} />
    </div>
  );
}

export default App;
