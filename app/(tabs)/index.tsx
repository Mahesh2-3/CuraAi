import { MenuIcon, SendBtnIcon, UploadIcon } from "@/assets/react-icons";
import { conversation } from "@/constants/theme";
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from "react";
import { FlatList, KeyboardAvoidingView, Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SideBar from "../../components/Sidebar";

export default function Index() {
  const [userMsg, setuserMsg] = useState("");
  const [convo, setconvo] = useState(conversation);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const flatListRef = React.useRef<FlatList>(null);

  function handleSend() {
    if (!userMsg.trim()) return;

    setconvo((prev) => [
      ...prev,
      { role: "user", message: userMsg },
      {
        role: "ai", message: "This is a placeholder response from the ai."
      }
    ])
    setuserMsg("");
    //Scroll to bottom of FlatList
    setTimeout(() => {
      flatListRef.current?.scrollToEnd({ animated: true });
    }, 100);
  }

  return (
    <LinearGradient
      colors={["#ffffff", "#B9F6C6"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      className="flex-1 h-[100vh]"
    >
      <SafeAreaView className="flex-1">
        <KeyboardAvoidingView className="flex-1 "
          // behavior={"padding"}
          keyboardVerticalOffset={40}
        >
          <Pressable
            onPress={() => {
              setIsSidebarOpen(true);
            }}
            className="w-full px-4 my-4">
            <MenuIcon />
          </Pressable>
          <SideBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
          <FlatList
            ref={flatListRef}
            data={convo}
            showsVerticalScrollIndicator={false}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => (
              <View
                className={`my-2 px-4 flex-row ${item.role === "user" ? "justify-end" : "justify-start text-black"
                  }`}
              >
                <View
                  className={`chat-message ${item.role === "user"
                    ? "rounded-tr-none bg-text-bg"
                    : "bg-gray-200 rounded-tl-none"
                    }`}
                >
                  <Text className="text-normal font-pop-medium">
                    {item.message}
                  </Text>
                </View>
              </View>
            )}
          />

          <View
            className="flex flex-row px-4 mx-4 mt-2 mb-6 items-center justify-around bg-[#E8F5E950] rounded-full border-2 border-[#4CAF50] py-2">
            <Pressable
              onPress={() => {
                console.log("Upload Pressed")
              }}
            >
              <UploadIcon />
            </Pressable>
            <TextInput
              placeholder="How are you feeling today?"
              value={userMsg}
              onChangeText={(text: string) => setuserMsg(text)}
              className="focus:outline-none border-none w-[80%] bg-transparent"
            />
            <Pressable
              onPress={handleSend}
            >
              <SendBtnIcon />
            </Pressable>
          </View>
        </KeyboardAvoidingView>

      </SafeAreaView>
    </LinearGradient>
  );
}