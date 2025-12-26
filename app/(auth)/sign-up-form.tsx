import { BackIcon, CalenderIcon, MailIcon, PhoneIcon, UserIcon } from '@/assets/react-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { ActivityIndicator, Alert, KeyboardAvoidingView, Platform, Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SignUpForm = () => {
    // Registration form state
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [dob, setDob] = useState<Date | undefined>();
    const [gender, setGender] = useState<string | undefined>();
    const [showDatePicker, setShowDatePicker] = useState(false);

    // OTP verification state
    const [isOTPStage, setIsOTPStage] = useState(false);
    const [otp, setOtp] = useState('');
    const [generatedOTP, setGeneratedOTP] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleDateChange = (event: any, selectedDate?: Date) => {
        setShowDatePicker(Platform.OS === 'ios'); // keep open on iOS
        if (selectedDate) setDob(selectedDate);
    };

    // Generate a 6-digit OTP
    const generateOTP = () => {
        return Math.floor(100000 + Math.random() * 900000).toString();
    };

    // Send OTP to email (mock function)
    const sendOTPToEmail = async (emailAddress: string, otpCode: string) => {
        try {
            // Mock API call - replace with real API when backend is ready
            console.log(`Sending OTP ${otpCode} to ${emailAddress}`);

            // Simulate network delay
            await new Promise(resolve => setTimeout(resolve, 1500));

            // In production, replace this with actual API call:
            // const response = await fetch('your-api-endpoint/send-otp', {
            //   method: 'POST',
            //   headers: { 'Content-Type': 'application/json' },
            //   body: JSON.stringify({ email: emailAddress, otp: otpCode })
            // });

            return true;
        } catch (err) {
            console.error('Error sending OTP:', err);
            return false;
        }
    };

    const handleRegister = async () => {
        // Validate form fields
        if (!fullName.trim()) {
            setError('Please enter your full name');
            return;
        }
        if (!email.trim()) {
            setError('Please enter your email');
            return;
        }
        if (!phone.trim()) {
            setError('Please enter your phone number');
            return;
        }
        if (!dob) {
            setError('Please select your date of birth');
            return;
        }
        if (!gender) {
            setError('Please select your gender');
            return;
        }

        setError('');
        setLoading(true);

        try {
            // Generate OTP
            const newOTP = generateOTP();
            setGeneratedOTP(newOTP);

            // Send OTP to email
            const sent = await sendOTPToEmail(email, newOTP);

            if (sent) {
                setIsOTPStage(true);
                Alert.alert('Success', `OTP sent to ${email}. Please check your email.`);
            } else {
                setError('Failed to send OTP. Please try again.');
            }
        } catch (err) {
            setError('An error occurred. Please try again.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleVerifyOTP = async () => {
        if (!otp.trim()) {
            setError('Please enter the OTP');
            return;
        }

        if (otp !== generatedOTP) {
            setError('Invalid OTP. Please try again.');
            return;
        }

        setError('');
        setLoading(true);

        try {
            // Mock API call to complete registration
            console.log('Verifying OTP and completing registration');

            // Simulate network delay
            await new Promise(resolve => setTimeout(resolve, 1000));

            // In production, replace with actual API call:
            // const response = await fetch('your-api-endpoint/register', {
            //   method: 'POST',
            //   headers: { 'Content-Type': 'application/json' },
            //   body: JSON.stringify({
            //     fullName, email, phone, dob, gender, otp
            //   })
            // });

            Alert.alert('Success', 'Registration completed successfully!');
            router.push('/sign-in');
        } catch (err) {
            setError('Registration failed. Please try again.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <SafeAreaView className="flex-1">
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? "height" : "padding"}
                className='flex-1 relative justify-center items-center px-6'
            >
                {/* Back button */}
                <Pressable
                    className='absolute top-14 left-7'
                    onPress={() => {
                        if (isOTPStage) {
                            setIsOTPStage(false);
                            setOtp('');
                            setError('');
                        } else {
                            router.back();
                        }
                    }}
                >
                    <BackIcon />
                </Pressable>

                {!isOTPStage ? (
                    // Registration Form
                    <>
                        <Text className="heading-styles">
                            Register
                        </Text>

                        <View className="w-full items-center flex-col gap-0">
                            {/* Error Message */}
                            {error ? (
                                <View className="w-[90%] bg-red-100 border border-red-400 rounded-lg p-3 mb-4">
                                    <Text className="text-red-700 font-pop-medium">{error}</Text>
                                </View>
                            ) : null}

                            {/* Full Name */}
                            <View
                                style={{ width: '90%' }}
                                className="relative">
                                <TextInput
                                    placeholder="Full Name"
                                    placeholderTextColor="#81C784"
                                    className="input-styles"
                                    value={fullName}
                                    onChangeText={setFullName}
                                />
                                <View className="absolute top-5 right-4 scale-[1.5]">
                                    <UserIcon />
                                </View>
                            </View>

                            {/* Email */}
                            <View
                                style={{ width: '90%' }}
                                className="relative">
                                <TextInput
                                    placeholder="Email"
                                    placeholderTextColor="#81C784"
                                    className="input-styles"
                                    value={email}
                                    onChangeText={setEmail}
                                    keyboardType="email-address"
                                />
                                <View className="absolute top-5 right-4 scale-[1.5]">
                                    <MailIcon />
                                </View>
                            </View>

                            {/* Phone */}
                            <View
                                style={{ width: '90%' }}
                                className="relative">
                                <TextInput
                                    placeholder="Phone no"
                                    placeholderTextColor="#81C784"
                                    className="input-styles"
                                    value={phone}
                                    onChangeText={setPhone}
                                    keyboardType="phone-pad"
                                />
                                <View className="absolute top-5 right-4 scale-[1.5]">
                                    <PhoneIcon />
                                </View>
                            </View>

                            {/* DOB */}
                            <TouchableOpacity
                                style={{ width: '90%', height: 50 }}
                                className=" border border-[#4CAF50] rounded-[10px] flex-row items-center justify-between px-4 mb-4"
                                onPress={() => setShowDatePicker(true)}
                                activeOpacity={0.8}
                            >
                                <Text className={`text-[#81C784] font-pop-regular`}>
                                    {dob ? dob.toDateString() : 'DOB'}
                                </Text>
                                <CalenderIcon className="scale-[1.0]" />
                            </TouchableOpacity>

                            {showDatePicker && (
                                <DateTimePicker
                                    value={dob || new Date()}
                                    mode="date"
                                    display="default"
                                    onChange={handleDateChange}
                                    maximumDate={new Date()}
                                />
                            )}

                            {/* Gender Picker */}
                            <View
                                style={{ width: '90%', height: 50 }}
                                className="border border-[#4CAF50] rounded-[10px] justify-center px-2 mb-5">
                                <Picker
                                    selectedValue={gender}
                                    onValueChange={(itemValue) => setGender(itemValue)}
                                    style={{ color: '#2E7D32', height: 50, paddingLeft: 100 }}
                                    dropdownIconColor="#2E7D32"
                                >
                                    <Picker.Item label="Select Gender" value={undefined} color="#81C784" />
                                    <Picker.Item label="Male" value="male" />
                                    <Picker.Item label="Female" value="female" />
                                    <Picker.Item label="Other" value="other" />
                                </Picker>
                            </View>

                            {/* Submit */}
                            <TouchableOpacity
                                style={{ width: '90%', height: 50 }}
                                className="bg-[#4CAF50] rounded-[10px] mt-2 justify-center items-center disabled:opacity-50"
                                activeOpacity={0.8}
                                onPress={handleRegister}
                                disabled={loading}
                            >
                                {loading ? (
                                    <ActivityIndicator color="white" />
                                ) : (
                                    <Text className="text-white font-pop-medium text-lg">Register</Text>
                                )}
                            </TouchableOpacity>
                        </View>
                    </>
                ) : (
                    // OTP Verification Screen
                    <>
                        <Text className="heading-styles mb-8">
                            Verify Email
                        </Text>

                        <View className="w-full items-center flex-col gap-0">
                            {/* OTP Message */}
                            <Text className="text-center text-gray-600 font-pop-regular mb-6 text-base">
                                We&apos;ve sent a 6-digit OTP to{'\n'}
                                <Text className="font-pop-semibold text-gray-800">{email}</Text>
                            </Text>

                            {/* Error Message */}
                            {error ? (
                                <View className="w-[90%] bg-red-100 border border-red-400 rounded-lg p-3 mb-4">
                                    <Text className="text-red-700 font-pop-medium">{error}</Text>
                                </View>
                            ) : null}

                            {/* OTP Input */}
                            <View
                                style={{ width: '90%' }}
                                className="relative mb-6">
                                <TextInput
                                    placeholder="Enter 6-digit OTP"
                                    placeholderTextColor="#81C784"
                                    className="input-styles text-center text-2xl tracking-widest"
                                    value={otp}
                                    onChangeText={setOtp}
                                    keyboardType="number-pad"
                                    maxLength={6}
                                />
                            </View>

                            {/* Verify Button */}
                            <TouchableOpacity
                                style={{ width: '90%', height: 50 }}
                                className="bg-[#4CAF50] rounded-[10px] justify-center items-center mb-4"
                                activeOpacity={0.8}
                                onPress={handleVerifyOTP}
                                disabled={loading}
                            >
                                {loading ? (
                                    <ActivityIndicator color="white" />
                                ) : (
                                    <Text className="text-white font-pop-medium text-lg">Verify OTP</Text>
                                )}
                            </TouchableOpacity>

                            {/* Resend OTP */}
                            <Pressable onPress={() => handleRegister()}>
                                <Text className="text-[#4CAF50] font-pop-medium text-center">
                                    Didn&apos;t receive OTP? <Text className="underline">Resend</Text>
                                </Text>
                            </Pressable>
                        </View>
                    </>
                )}
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};


export default SignUpForm;
