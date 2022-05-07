import { useEffect, useState } from "react";

import * as Font from "expo-font";

export default function useCachedResources() {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        await Font.loadAsync({
          RobotoFlex: require("../assets/fonts/RobotoFlex-Regular.ttf"),
          RobotoMedium: require("../assets/fonts/Roboto-Medium.ttf")
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setIsLoadingComplete(true);
      }
    }

    loadResourcesAndDataAsync();
  }, [isLoadingComplete]);

  return isLoadingComplete;
}
