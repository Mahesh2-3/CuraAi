import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithCredential,
  signInWithEmailAndPassword,
  UserCredential,
} from "firebase/auth";
import { auth } from "./firebaseConfig";

// ✅ Required for Expo Google Sign-In redirect
WebBrowser.maybeCompleteAuthSession();

// 🔹 Email & Password — Sign Up
export const signUpWithEmail = async (
  email: string,
  password: string
): Promise<UserCredential | null> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential;
  } catch (error: any) {
    console.error("Signup error:", error.message);
    return null;
  }
};

// 🔹 Email & Password — Sign In
export const signInWithEmail = async (
  email: string,
  password: string
): Promise<UserCredential | null> => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential;
  } catch (error: any) {
    console.error("Login error:", error.message);
    return null;
  }
};

export const useGoogleAuth = () => {
  const [request, response, promptAsync] =
    Google.useIdTokenAuthRequest({
      clientId: process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID!, // FULL ID
    });

  const signInWithGoogle = async (): Promise<UserCredential | null> => {
    try {
      const result = await promptAsync();

      if (result.type === "success") {
        const { id_token } = result.params;

        const credential = GoogleAuthProvider.credential(id_token);
        return await signInWithCredential(auth, credential);
      }
    } catch (error: any) {
      console.error("Google Sign-In error:", error.message);
    }
    return null;
  };

  return { signInWithGoogle, request, response };
};
