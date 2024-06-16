import { useState, useEffect } from "react";

const useImagesLoaded = (imagePaths) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let loadedCount = 0;
    imagePaths.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount += 1;
        if (loadedCount === imagePaths.length) {
          setLoaded(true);
        }
      };
    });
  }, [imagePaths]);

  return loaded;
};

export default useImagesLoaded;
