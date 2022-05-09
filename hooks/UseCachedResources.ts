import { useEffect, useState } from "react";

import * as Font from "expo-font";
import { getData, storeData } from "../storage";
import data from "../data.json";

export default function useCachedResources() {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        await storeData("workout-data", data);
        await Font.loadAsync({
          RobotoFlex: require("../assets/fonts/RobotoFlex-Regular.ttf"),
          RobotoMedium: require("../assets/fonts/Roboto-Medium.ttf")
        });
      } catch (e) {
        console.warn(e);
      } finally {
        const workouts = await getData("workout-data");
        console.log(workouts);
        setIsLoadingComplete(true);
      }
    }

    loadResourcesAndDataAsync();
  }, [isLoadingComplete]);

  return isLoadingComplete;
}
