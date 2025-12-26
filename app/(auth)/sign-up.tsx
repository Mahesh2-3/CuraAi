import { GoogleIcon, MailIcon } from '@/assets/react-icons';
import GoogleButton from '@/components/GoogleButton';
import { useGoogleAuth } from '@/lib/auth';
import { router } from 'expo-router';
import React from 'react';
import { Pressable, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SignUp = () => {

    const { signInWithGoogle, request } = useGoogleAuth();


    async function handleGoogleSignUp() {
        const user = await signInWithGoogle();
        if (user) router.replace("/(tabs)");
        else console.log("Some error occured")
    }

    return (
        <SafeAreaView className="flex-1 justify-center items-center px-6">
            {/* Title */}
            <Text className="heading-styles">
                Register
            </Text>

            {/* Buttons */}
            <View className="w-full items-center flex-col gap-5">
                {/* Continue with Google */}
                {/* <TouchableOpacity
                    style={{ width: '85%', height: 50 }}
                    className="flex-row gap-4 border border-[#4CAF50] rounded-[10px] justify-center items-center space-x-3 bg-[#E8F5E950]"
                    activeOpacity={0.8}
                    disabled={!request}
                    onPress={() => handleGoogleSignUp()}
                >
                    <Text className="text-[#2E7D32] font-pop-medium text-base">
                        Continue with Google
                    </Text>
                    <GoogleIcon />
                </TouchableOpacity> */}
                <GoogleButton/>

                {/* Continue with Email */}
                <TouchableOpacity
                    style={{ width: '85%', height: 50 }}
                    className="flex-row gap-4 border border-[#4CAF50] rounded-[10px] justify-center items-center space-x-3 bg-[#E8F5E950]"
                    activeOpacity={0.8}
                    onPress={() => router.push('/sign-up-form')}
                >
                    <Text className="text-[#2E7D32] font-pop-medium text-base">
                        Continue with Email
                    </Text>
                    <MailIcon />
                </TouchableOpacity>
            </View>

            {/* Already have account */}
            <View className="flex-row mt-8">
                <Text className="text-[#4CAF50] font-pop-regular">
                    Already have an account?{' '}
                </Text>
                <Pressable onPress={() => router.push('/sign-in')}>
                    <Text className="text-[#2E7D32] font-pop-medium underline">
                        Sign In
                    </Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

export default SignUp;
