import './App.css';
import { Portfolio } from './components/Portfolio';
import { Loader } from './components/Loader';
import { useState, useEffect } from 'react';

// c7827ca24996e9a65f002343a44bb56a788493d9

const App = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set up an event listener for the window load event
    const handleLoad = () => {
      setIsLoading(false);
    };

    window.addEventListener('load', handleLoad);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Portfolio />
  )
}

export default App;

