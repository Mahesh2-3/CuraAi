import { MenuIcon, SendBtnIcon } from "@/assets/react-icons";
import SideBar from "@/components/Sidebar";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  FlatList,
  KeyboardAvoidingView,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import Markdown from "react-native-markdown-display";
import { SafeAreaView } from "react-native-safe-area-context";

const API_URL = "http://10.30.6.31:5000/chat";

type Message = {
  role: "user" | "ai";
  message: string;
  id: string;
};

export default function Index() {
  const [userMsg, setUserMsg] = useState("");
  const [convo, setConvo] = useState<Message[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const flatListRef = useRef<FlatList>(null);

  async function handleSend() {
    if (!userMsg.trim()) return;

    const message = userMsg;
    setUserMsg("");

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      message,
    };

    const typingMessage: Message = {
      id: `${Date.now()}-typing`,
      role: "ai",
      message: "Typing...",
    };

    setConvo((prev) => [...prev, userMessage, typingMessage]);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      const data = await response.json();

      const aiMessage: Message = {
        id: `${Date.now()}-ai`,
        role: "ai",
        message: data.reply,
      };

      setConvo((prev) => [...prev.slice(0, -1), aiMessage]);

      setTimeout(() => {
        flatListRef.current?.scrollToEnd({ animated: true });
      }, 150);

    } catch {
      setConvo((prev) => [
        ...prev.slice(0, -1),
        {
          id: `${Date.now()}-error`,
          role: "ai",
          message: "⚠️ Unable to connect to AI server.",
        },
      ]);
    }
  }

  return (
    <LinearGradient colors={["#ffffff", "#B9F6C6"]} className="flex-1">
      <SafeAreaView className="flex-1">
        <KeyboardAvoidingView className="flex-1" keyboardVerticalOffset={40}>

          <Pressable onPress={() => setIsSidebarOpen(true)} className="px-4">
            <MenuIcon />
          </Pressable>

          <SideBar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />

          <FlatList
            ref={flatListRef}
            data={convo}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <ChatBubble item={item} />
            )}
          />

          <View className="flex-row items-center px-4 py-2 mx-4 mb-6 border-2 border-[#4CAF50] rounded-full">
            <TextInput
              placeholder="How are you feeling today?"
              value={userMsg}
              onChangeText={setUserMsg}
              className="flex-1 px-2"
            />
            <Pressable onPress={handleSend}>
              <SendBtnIcon />
            </Pressable>
          </View>

        </KeyboardAvoidingView>
      </SafeAreaView>
    </LinearGradient>
  );
}

/* =========================
   Chat Bubble with Fade-in
========================= */

function ChatBubble({ item }: { item: Message }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (item.role === "ai") {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000, // 👈 slow fade-in
        useNativeDriver: true,
      }).start();
    } else {
      fadeAnim.setValue(1);
    }
  }, []);

  return (
    <Animated.View
      style={{ opacity: fadeAnim }}
      className={`px-4 my-2 flex-row ${item.role === "user" ? "justify-end" : "justify-start"
        }`}
    >
      <View
        className={`px-4 py-3 rounded-xl ${item.role === "user"
          ? "bg-[#4fb352] rounded-tr-none max-w-[80%]"
          : "bg-transparent rounded-tl-none max-w-[95%]"
          }`}
      >
        {item.role === "user" ? (
          <Text className="text-lg font-semibold text-white">
            {item.message}
          </Text>
        ) : (
          <Markdown
            style={{
              body: { color: "#333", fontSize: 17, fontWeight: "500" },
              heading1: { fontSize: 22, fontWeight: "bold", marginVertical: 8, color: "#333" },
              heading2: { fontSize: 20, fontWeight: "bold", marginVertical: 6, color: "#333" },
              heading3: { fontSize: 18, fontWeight: "bold", marginTop:6,marginBottom:-2, color: "#333" },
              em: { fontStyle: "italic" }, strong: { fontWeight: "bold" },
              hr: { backgroundColor: "#ccc", height: 1, marginVertical: 10 },
              bullet_list: { marginLeft: 10 },
              ordered_list: { marginLeft: 10 },
              list_item: { marginVertical: 4, color: "#333", fontWeight: "500" },
              paragraph: { marginVertical: 4, color: "#333", fontWeight: "500" },
            }} >
            {item.message}
          </Markdown>
        )}
      </View>
    </Animated.View>
  );
}