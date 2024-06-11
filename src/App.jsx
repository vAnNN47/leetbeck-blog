import './App.css';
import { Portfolio } from './components/Portfolio';
import { Loader } from './components/Loader';
import { useEffect, useState } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      console.log("Page fully loaded");
      setIsLoading(false);
    };

    window.addEventListener('load', handleLoad);

    // Cleanup event listener
    return () => window.removeEventListener('load', handleLoad);
  }, []);

  console.log("isLoading:", isLoading);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Portfolio />
  );
}

export default App;
