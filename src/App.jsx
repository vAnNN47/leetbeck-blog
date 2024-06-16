import React, { useState, useEffect } from "react";
import "./App.css";
import { Portfolio } from "./components/Portfolio";
import { Loader } from "./components/Loader";
import useImagesLoaded from "./components/useImagesLoaded";

function App() {
  const imagePaths = [
    "/images/fibo.webp",
    "/images/t-shirt-style.webp",
    // Add all image paths
  ];
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   // Simulate loading time
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2000); // Adjust the time as needed

  // Cleanup timer on component unmount
  //   return () => clearTimeout(timer);
  // }, []);

  const imagesLoaded = useImagesLoaded(imagePaths);

  return <div className="App">{imagesLoaded ? <Portfolio /> : <Loader />}</div>;
}

export default App;
