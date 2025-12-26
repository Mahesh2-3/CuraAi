import { router, Tabs } from 'expo-router';
import React from 'react';

const Layout = () => {
    const isAuthenticated = true;

    if (!isAuthenticated) return router.push("/sign-in")

    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: { display: 'none' },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Chat',
                }}
            />
            <Tabs.Screen
                name="diseases"
                options={{
                    title: 'Diseases',
                }}
            />
            <Tabs.Screen
                name="care-near-by"
                options={{
                    title: 'Care',
                }}
            />
        </Tabs>
    )
}

export default Layout