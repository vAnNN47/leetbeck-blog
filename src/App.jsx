import './App.css';
import { Portfolio } from './components/Portfolio';
import { Loader } from './components/Loader';
import { useEffect, useState } from 'react';

function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const handleLoad = () => {
      setIsLoading(false);
    }

    window.addEventListener('load', handleLoad);

    return () => window.removeEventListener('load', handleLoad);
  }, []);

  if (isLoading) {
    return <Loader />
  }

  return (
    <Portfolio />
  )
}

export default App;

