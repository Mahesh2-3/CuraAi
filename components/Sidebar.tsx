import { CloseIcon, SettingsIcon, ThreeDotsIcon } from "@/assets/react-icons";
import { history, sidebarOptions } from "@/constants/theme";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { FlatList, Image, Pressable, Text, View } from "react-native";

export default function SideBar({ isSidebarOpen, setIsSidebarOpen }: { isSidebarOpen: boolean, setIsSidebarOpen: (value: boolean) => void }) {

    const [History, setHistory] = useState(history)

    useEffect(() => {
        setHistory(history)
    }, [])



    return (
        <View
            className={`absolute z-10 font-pop-medium top-0 left-0 h-full bg-[#D2FFD4] transition-all duration-300 ${isSidebarOpen ? "w-full p-6" : "w-0"
                } overflow-hidden`}
        >
            <Pressable onPress={() => setIsSidebarOpen(false)} className="mb-6 flex-row justify-end w-full">
                <CloseIcon />
            </Pressable>
            <View className="flex flex-row items-center justify-between">
                <Pressable onPress={() => { }} className="mb-6">
                    <SettingsIcon />
                </Pressable>
                <View className="flex-row w-[80%] justify-end gap-4 items-center mb-6">
                    <View className="w-[80%]">
                        <Text className="text-lg text-right font-bold">John Adams</Text>
                        <Text className="text-sm text-right text-gray-600">johnadams@gmail.com</Text>
                    </View>
                    <Image
                        source={require("../assets/images/defaultProfile.jpg")}
                        className="w-24 h-24 rounded-full"
                    />
                </View>
            </View>
            <View>
                {sidebarOptions.map((option, index) => {
                    const Icon = option.icon;
                    return (
                        <Pressable
                            key={index}
                            //@ts-ignore
                            onPress={() => router.push(option.link)}
                            className="flex-row hover:bg-[#a5e9a8] gap-6 items-center py-2 p-3 rounded-md"
                        >
                            <Icon className="w-[50px]" />
                            <Text className="ml-2 font-pop-semibold text-lg">{option.label}</Text>
                        </Pressable>
                    );
                })}
            </View>
            <View className="border-t-[1px] mt-6 w-full border" />
            <View className="mt-6">
                <Text className="font-pop-bold text-2xl">
                    History
                </Text>
                <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={History}
                    className="mt-3 h-[40vh]"
                    renderItem={({ item }) => (
                        <Pressable
                            onPress={() => { }}
                            className="flex-row bg-[#4CAF5050] gap-6 items-center justify-between p-3 rounded-md mb-3"
                        >
                            <Text className="line-clamp-1 w-[80%] font-pop-semibold text-sm">{item.title}</Text>
                            <ThreeDotsIcon className="" />
                        </Pressable>
                    )}
                    showsVerticalScrollIndicator={false}
                />
            </View>

        </View>

    )
}