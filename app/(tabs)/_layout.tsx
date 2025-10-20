import { router, Slot } from 'expo-router';
import React from 'react';

const Layout = () => {
    const isAuthenticated = true;

    if (!isAuthenticated) return router.push("/sign-in")


    return (
        <Slot />
    )
}

export default Layout