import {useEffect, useState} from "react";
import {Image} from "react-native";

export const useImageAspectRatio = (imageUrl: string) => {
  const [aspectRatio, setAspectRatio] = useState(1);

  useEffect(() => {
    let isMounted = true;

    if (imageUrl) {
      Image.getSize(imageUrl, (width, height) => {
        if (isMounted) {
          setAspectRatio(width / height);
        }
      });
    }

    return () => {
      isMounted = false;
    };
  }, [imageUrl]);

  return aspectRatio;
};
