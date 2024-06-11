import './App.css';
import { Portfolio } from './components/Portfolio';
import { Loader } from './components/Loader';
import { useEffect, useState } from 'react';

function App() {

  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setIsPageLoaded(true);
    };

    // Add event listener for window load
    window.addEventListener('load', handleLoad);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('load', handleLoad);;
  }, []);

  if (!isPageLoaded) {
    return <Loader />;
  }

  return (
    <Portfolio />
  )
}

export default App;

