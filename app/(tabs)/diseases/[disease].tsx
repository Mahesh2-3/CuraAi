import { BackIcon } from "@/assets/react-icons";
import { carenearby } from "@/constants/theme";
import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import {
    Dimensions,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { LineChart } from "react-native-chart-kit";
import { SafeAreaView } from "react-native-safe-area-context";

const screenWidth = Dimensions.get("window").width - 40; // chart width

const DiseaseDetail: React.FC = () => {
    const params = useLocalSearchParams<{ disease: string }>();
    const router = useRouter();
    const diseaseSlug = params.disease;

    const diseaseData = carenearby.find((d) => d.slug === diseaseSlug);

    if (!diseaseData) {
        return (
            <View className="flex-1 justify-center items-center bg-white">
                <Text className="text-lg font-bold">Disease not found!</Text>
            </View>
        );
    }

    const chartData = {
        labels: diseaseData.history.map((h) => h.date.slice(5)), // MM-DD
        datasets: [
            {
                data: diseaseData.history.map((h) => h.threatPercentage),
                color: () => `rgba(34,197,94,1)`,
                strokeWidth: 1,
            },
        ],
    };

    return (
        <LinearGradient
            colors={["#ffffff", "#B9F6C6"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            className="flex-1"
            style={{ flex: 1 }}
        >
            <SafeAreaView edges={["top"]} className="flex-1">
                <ScrollView contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 24, flexGrow: 1 }}>
                    {/* Back Button */}
                    <TouchableOpacity onPress={() => router.push("/diseases")} className="mb-2">
                        <BackIcon />
                    </TouchableOpacity>

                    {/* Header */}
                    <View className="flex-row justify-between items-center my-4">
                        <Text className="text-3xl font-pop-semibold text-black">
                            {diseaseData.diseaseName}
                        </Text>
                        <Text className="text-2xl font-bold text-red-600">
                            {diseaseData.threatEstimated}
                        </Text>
                    </View>

                    {/* Chart */}
                    <View className="bg-white pt-4 mt-5 rounded-xl mb-6 shadow border border-gray-200">
                        <LineChart
                            data={chartData}
                            width={screenWidth}
                            height={250}
                            yAxisSuffix="%"
                            chartConfig={{
                                backgroundGradientFrom: "#fff",
                                backgroundGradientTo: "#fff",
                                color: (opacity = 1) => `rgba(34,197,94,${opacity})`,
                                labelColor: (opacity = 1) => `rgba(0,0,0,${opacity})`,
                                decimalPlaces: 0,
                                propsForDots: {
                                    r: "4",
                                    strokeWidth: "2",
                                    stroke: "#22C55E",
                                },
                            }}

                            style={{ borderRadius: 10 }}
                        />
                    </View>

                    {/* Recommendations */}
                    <View className=" p-4 mb-6">
                        <Text className="text-lg font-pop-semibold mb-3 border-b border-black pb-1">
                            Recommendations
                        </Text>
                        {diseaseData.recommendations.map((rec, index) => (
                            <Text key={index} className="text-[14px] font-pop-regular text-black mb-2">
                                {index + 1}. {rec}
                            </Text>
                        ))}
                    </View>

                    {/* Analysis */}
                    <View className="p-4 mb-10">
                        <Text className="text-lg font-pop-semibold mb-3 border-b border-black pb-1">
                            Analysis
                        </Text>
                        {diseaseData.analysis.map((point, index) => (
                            <View key={index} className="mb-3">
                                <Text className="font-pop-regular text-[14px] mb-1">
                                    {index + 1}. {point}
                                </Text>
                            </View>
                        ))}
                    </View>
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    );
};

export default DiseaseDetail;
