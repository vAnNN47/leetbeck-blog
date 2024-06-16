import React, { useState, useEffect } from "react";
import "./App.css";
import { Portfolio } from "./components/Portfolio";
import { Loader } from "./components/Loader";
import { useImagesLoaded } from "./components/useImagesLoaded";

function App() {
  const imagePaths = ["/images/fibo.webp", "/images/t-shirt-style.webp"];

  const imagesLoaded = useImagesLoaded(imagePaths);

  return <div className="App">{imagesLoaded ? <Portfolio /> : <Loader />}</div>;
}

export default App;
