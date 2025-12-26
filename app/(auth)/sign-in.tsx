import { EyeCrossIcon, EyeIcon, GoogleIcon, MailIcon } from '@/assets/react-icons';
import { useGoogleAuth } from '@/lib/auth';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SignIn = () => {
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const {signInWithGoogle} = useGoogleAuth();

    async function handleGoogleSignIn(){
        const user = await signInWithGoogle();
        if(user) router.replace("/(tabs)");
        else console.log("Google signIN failed")
    }

    return (
        <SafeAreaView className="flex-1">
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? "height" : "padding"}
                className='flex-1 justify-center items-center px-6'
            >

                {/* Title */}
                <Text className="heading-styles">
                    Sign In
                </Text>

                {/* Google Sign In Button */}
                <TouchableOpacity
                    style={{ width: '90%', height: 50 }}
                    className="flex-row gap-4 border border-[#4CAF50] rounded-[10px] justify-center items-center space-x-3 bg-[#E8F5E950]"
                    activeOpacity={0.8}
                    onPress={() => handleGoogleSignIn()}
                >
                    <Text className="text-[#2E7D32] font-pop-medium text-base">
                        Continue with Google

                    </Text>
                    <GoogleIcon />
                </TouchableOpacity>

                {/* OR Divider */}
                <View
                    style={{ width: '80%' }}
                    className="flex-row items-center my-6">
                    <View style={{ height: 1 }} className="flex-1 bg-[#A5D6A7]" />
                    <Text className="mx-3 text-[#4CAF50] font-pop-regular">or</Text>
                    <View style={{ height: 1 }} className="flex-1 bg-[#A5D6A7]" />
                </View>

                {/* Input Fields */}
                <View className="w-full items-center">
                    {/* Email */}
                    <View
                        style={{ width: '90%' }}
                        className="relative">
                        <TextInput
                            placeholder="Username or Email"
                            placeholderTextColor="#81C784"
                            className="input-styles"
                        />
                        <View className="absolute top-5 scale-[1.5] right-4">
                            <MailIcon />
                        </View>
                    </View>

                    {/* Password */}
                    <View
                        style={{ width: '90%' }}
                        className="relative">
                        <TextInput
                            placeholder="Password"
                            placeholderTextColor="#81C784"
                            secureTextEntry={!isPasswordShown}
                            className="input-styles"
                        />
                        <Pressable
                            onPress={() => setIsPasswordShown((prev) => !prev)}
                            className="absolute top-5 scale-[1.5] right-4"
                        >
                            {!isPasswordShown ? <EyeIcon /> : <EyeCrossIcon />}
                        </Pressable>
                    </View>
                </View>

                {/* Sign In Button */}
                <TouchableOpacity
                    className="bg-[#4CAF50] rounded-[10px] mt-2 justify-center items-center"
                    style={{ width: '90%', height: 50 }}
                    activeOpacity={0.8}
                    onPress={() => console.log('Sign in clicked')}
                >
                    <Text className="text-white font-pop-medium text-lg">Sign In</Text>
                </TouchableOpacity>



                {/* Sign Up Link */}
                <View className="flex-row mt-6">
                    <Text className="text-[#327534] font-pop-regular">
                        Don’t have an account?{" "}
                    </Text>
                    <Pressable onPress={() => router.push('/sign-up')}>
                        <Text className="text-[#2E7D32] font-pop-medium underline">
                            Sign Up
                        </Text>
                    </Pressable>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default SignIn;
