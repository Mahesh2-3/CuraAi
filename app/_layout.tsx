import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";

import { useEffect } from "react";
import "./globals.css";

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    "pop-bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "pop-regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "pop-medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "pop-semibold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "pop-light": require("../assets/fonts/Poppins-Thin.ttf"),
  })


  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error])



  return <Stack screenOptions={{ headerShown: false }} />
}