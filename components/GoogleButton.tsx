import { GoogleSigninButton } from '@react-native-google-signin/google-signin';
import React from 'react';
import { View } from 'react-native';

const GoogleButton = () => {
    return (
        <View className='w-100% h-[50px]'
        >
            <GoogleSigninButton
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={() => {
                    // initiate sign in
                }}
            //   disabled={isInProgress}
            />;
        </View>
    )
}

export default GoogleButton