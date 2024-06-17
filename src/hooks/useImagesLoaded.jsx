import { useState, useEffect } from "react";

export const useImagesLoaded = (imagePaths) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let loadedCount = 0;
    const totalImages = imagePaths.length;

    const handleLoad = () => {
      loadedCount += 1;
      // console.log(`Image loaded: ${loadedCount}/${totalImages}`);
      if (loadedCount === totalImages) {
        setLoaded(true);
      }
    };

    const handleError = () => {
      loadedCount += 1;
      console.log(`Image failed to load: ${loadedCount}/${totalImages}`);
      if (loadedCount === totalImages) {
        setLoaded(true);
      }
    };

    imagePaths.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = handleLoad;
      img.onerror = handleError;
    });
  }, [imagePaths]);

  return loaded;
};
