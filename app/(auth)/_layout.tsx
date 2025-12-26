import { Slot } from 'expo-router'
import React from 'react'
import { ImageBackground } from 'react-native'

const AuthLayout = () => {
    return (

        <ImageBackground
            source={require("../../assets/images/bgImg.jpg")}
            resizeMode='cover'
            className='w-full h-full'
        >
            <Slot />
        </ImageBackground>
    )
}

export default AuthLayout