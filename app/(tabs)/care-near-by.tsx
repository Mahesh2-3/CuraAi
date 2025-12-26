import { HeadDownIcon, InfoIcon, LocationIcon, MenuIcon } from '@/assets/react-icons';
import SideBar from '@/components/Sidebar';
import { carenearby } from '@/constants/theme';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { FlatList, Pressable, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// ----------------- Types -----------------
interface Hospital {
    name: string;
    distance: string;
    rating: number;
    address: string;
    contact: string;
}

interface CardItem {
    diseaseName: string;
    threatEstimated: string;
    hospitals: Hospital[];
}

interface CardProps {
    item: CardItem;
}

// ----------------- Card Component -----------------
const Card: React.FC<CardProps> = ({ item }) => {
    const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});

    const toggleExpand = (index: number) => {
        setExpanded((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    return (
        <View className="bg-[#C7F9CC] mb-4 p-4 innerShadow border border-[#A8E6A3]">
            {/* Header */}
            <View className="flex-row w-full items-center justify-between mb-2">
                <View>
                    <Text className="font-pop-semibold text-2xl text-black">
                        {item.diseaseName}
                    </Text>
                    <Text className="font-pop-medium text-gray-700 mt-1">
                        Threat Estimated: {item.threatEstimated}
                    </Text>
                </View>
                <TouchableOpacity>
                    <InfoIcon size={22} color="#2C2C2C" />
                </TouchableOpacity>
            </View>

            {/* Divider */}
            <View
                style={{ width: '100%', height: 1 }}
                className="bg-gray-400 opacity-50 my-3" />

            {/* Hospitals title */}
            <View className="flex-row gap-2 items-center mb-3">
                <Text className="text-base font-pop-medium text-black">
                    Hospitals Near Me
                </Text>
                <LocationIcon size={18} color="#222" />
            </View>

            {/* Hospitals List */}
            {item.hospitals.map((hospital, index) => (
                <View key={index} className="mb-2">
                    <TouchableOpacity
                        onPress={() => toggleExpand(index)}
                        className="flex-row justify-between items-center"
                    >
                        <View>
                            <Text className="text-[#065F46] font-pop-semibold text-lg">
                                • {hospital.name}
                            </Text>
                            <View className='flex-row gap-1'>
                                <Text className="text-gray-700 text-sm ml-4">
                                    {hospital.distance}
                                </Text>
                                <Text className="text-gray-700 text-sm ml-4">
                                    ⭐ {hospital.rating} / 5
                                </Text>
                            </View>
                        </View>
                        <HeadDownIcon
                            style={{
                                transform: [{ rotate: expanded[index] ? '180deg' : '0deg' }],
                            }}
                        />
                    </TouchableOpacity>

                    {/* Expanded Hospital Details */}
                    {expanded[index] && (
                        <View className="ml-4 mt-2">
                            <Text
                                style={{ width: "90%" }}
                                className="font-pop-regular text-xs leading-4"
                            >
                                <Text className="font-pop-semibold">Address: </Text>
                                {hospital.address}
                            </Text>

                            <Text className="text-gray-700 text-xs mt-1">
                                <Text className="font-pop-semibold">Contact: </Text>
                                {hospital.contact}
                            </Text>
                        </View>
                    )}

                </View>
            ))}
        </View>
    );
};

// ----------------- Main Component -----------------
const CareNearBy: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <LinearGradient
            colors={['#ffffff', '#B9F6C6']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            className="flex-1"
        >
            <SafeAreaView className="flex-1">
                {/* Menu Button */}
                <Pressable
                    onPress={() => setIsSidebarOpen(true)}
                    className="w-full px-4 my-4"
                >
                    <MenuIcon />
                </Pressable>

                {/* Sidebar */}
                <SideBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

                {/* Hospitals List */}
                <FlatList
                    data={carenearby}
                    keyExtractor={(_, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => <Card item={item} />}
                />
            </SafeAreaView>
        </LinearGradient>
    );
};

export default CareNearBy;
