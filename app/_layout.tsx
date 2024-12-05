import { useFonts } from "expo-font";

import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import "react-native-reanimated";

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { HELLO_THERE } from "./utils/constants";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [color, setColor] = useState("white");

    const [loaded] = useFonts({
        SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    });

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    const getRandomColor = () => {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    const changeBackGround = () => {
        const generatedColor = getRandomColor();

        setColor(generatedColor);
    };

    return (
        <TouchableOpacity
            style={[styles.container, { backgroundColor: color }]}
            onPress={changeBackGround}
        >
            <Text style={styles.text}>{HELLO_THERE}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",

        justifyContent: "center",
    },
    touchableView: {
        flex: 1,
    },
    text: {
        alignSelf: "center",
        fontSize: 26,
        fontWeight: "bold",
    },
});
