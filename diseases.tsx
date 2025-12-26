import { HeadDownIcon, MenuIcon } from '@/assets/react-icons';
import SideBar from '@/components/Sidebar';
import { carenearby } from '@/constants/theme';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Diseases: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <LinearGradient
            colors={["#ffffff", "#B9F6C6"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            className="flex-1"
            style={{ height: '100%' }}
        >
            <SafeAreaView className="flex-1">
                <Pressable
                    onPress={() => {
                        setIsSidebarOpen(true);
                    }}
                    style={{ width: '100%' }}
                    className="px-4 my-4">
                    <MenuIcon />
                </Pressable>
                {/* //@ts-ignore */}
                <SideBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
                <FlatList
                    data={carenearby}
                    className='px-4'
                    renderItem={(({ item, index }) => (
                        <View
                            className='py-4 bg-[#C7F9CC] px-6 rounded-md mb-4 innerShadow'
                            style={{ width: '100%' }}
                        >
                            <View className='flex-row items-center justify-between'>
                                <View className='flex-col gap-2'>
                                    <Text className='font-pop-medium text-xl'>{item.diseaseName}</Text>
                                    <Text className='font-pop-regular'>Threat Estimated: <strong>{item.threatEstimated}</strong></Text>
                                </View>
                                <Pressable
                                    onPress={() => router.push(`/diseases/${item.slug}`)}
                                >
                                    <HeadDownIcon className="transform -rotate-90" />
                                </Pressable>
                            </View>
                        </View>
                    ))}
                />
            </SafeAreaView>
        </LinearGradient>
    )
}

export default Diseases