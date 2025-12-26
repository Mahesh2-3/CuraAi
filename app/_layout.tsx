import { useFonts } from "expo-font";
import { Stack, router } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "@/lib/firebaseConfig";

import "./globals.css";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "pop-bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "pop-regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "pop-medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "pop-semibold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "pop-light": require("../assets/fonts/Poppins-Thin.ttf"),
  });

  const [user, setUser] = useState<User | null | undefined>(undefined);

  // 1️⃣ Only listen to auth here
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      console.log("🔥 Auth resolved:", !!u);
      setUser(u);
    });
    return unsub;
  }, []);

  // 2️⃣ Hide splash when ready
  useEffect(() => {
    if (fontsLoaded && user !== undefined) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, user]);

  // 3️⃣ Redirect AFTER render
  useEffect(() => {
    if (user === undefined) return;

    if (user) {
      router.replace("/(tabs)");
    } else {
      router.replace("/(auth)/sign-in");
    }
  }, [user]);

  // Loader while resolving
  if (!fontsLoaded || user === undefined) {
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <ActivityIndicator size="large" color="#4CAF50" />
      </View>
    );
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
