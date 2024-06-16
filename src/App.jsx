import React, { useState, useEffect } from "react";
import "./App.css";
import { Portfolio } from "./components/Portfolio";
import { Loader } from "./components/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the time as needed

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return <div className="App">{isLoading ? <Loader /> : <Portfolio />}</div>;
}

export default App;
