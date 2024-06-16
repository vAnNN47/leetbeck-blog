import React, { useState, useEffect } from "react";
import "./App.css";
import { Portfolio } from "./components/Portfolio";
import { Loader } from "./components/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    if (document.readyState === "complete") {
      // Document is already loaded
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return <div className="App">{isLoading ? <Loader /> : <Portfolio />}</div>;
}

export default App;
