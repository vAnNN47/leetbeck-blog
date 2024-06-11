import './App.css';
import { Portfolio } from './components/Portfolio';
import { Loader } from './components/Loader';
import { useEffect, useState } from 'react';

function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set up an event listener for the window load event
    const handleLoad = () => {
      console.log('Window loaded');
      setIsLoading(false);
    };

    window.addEventListener('load', handleLoad);
    console.log(isLoading);
    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('load', handleLoad);
      console.log(isLoading);
    };
  }, []);

  useEffect(() => {
    console.log('isLoading:', isLoading);
  }, [isLoading]);

  if (isLoading) {
    return <Loader />
  }

  return (
    <Portfolio />
  )
}

export default App;

