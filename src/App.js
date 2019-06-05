import React, { useState } from "react";

import "./App.css";

import Header from "./components/Header";
import ImageResults from './components/ImageResults'
// import HomeScreen from "./components/HomeScreen";
//import Searchbar from './components/Searchbar'

function App() {

  const [searchQuery, setSearchQuery] = useState("summer");
  const [currentPage , setCurrentPage ] = useState(1)

  return (
    <div className="App h-screen">
      <Header setSearchQuery={setSearchQuery} />

      {/* <HomeScreen /> */}

      <ImageResults query={searchQuery} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;
