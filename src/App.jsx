import React from "react";
import "./App.css";
import { Portfolio } from "./components/Portfolio";
import { Loader } from "./components/Loader";
import { useImagesLoaded } from "./components/useImagesLoaded";

function App() {
  const imagePaths = [
    "/images/t-shirt-style.webp",
    "/images/fibo.webp",
    "/images/duffy-girl.webp",
    "/images/nice-figure.webp",
    "/images/one-of-the-firsts.webp",
    "/images/sketch-study.webp",
    "/images/skull-study.webp",
    "/images/some-concept.webp",
    "/images/sketch3.webp",
  ];
  const imagesLoaded = useImagesLoaded(imagePaths);

  return (
    <div className="App">
      {imagesLoaded ? <Portfolio /> : <Loader />}
    </div>
  );
}

export default App;
