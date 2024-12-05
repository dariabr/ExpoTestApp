import { useFonts } from "expo-font";

import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect, useState } from "react";
import "react-native-reanimated";
import { Text, TouchableOpacity } from "react-native";
import { HELLO_THERE } from "./utils/constants";
import { Color } from "./types";
import { colorToHex, randomColor } from "./utils/helpers";
import styles from "./styles";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [color, setColor] = useState<Color>({
        r: 255,
        g: 255,
        b: 255,
    });

    const [loaded] = useFonts({
        SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    });

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    const changeBackGround = useCallback(
        (specificColor?: "r" | "g" | "b") => {
            setColor(randomColor(color, specificColor));
        },
        [randomColor, color]
    );

    if (!loaded) {
        return null;
    }

    const hexLetterView = (letter: "r" | "g" | "b", color: string) => {
        return (
            <TouchableOpacity onPress={() => changeBackGround(letter)}>
                <Text style={[styles.letterText, { color: color }]}>
                    {letter.toUpperCase()}
                </Text>
            </TouchableOpacity>
        );
    };

    return (
        <TouchableOpacity
            style={[styles.container, { backgroundColor: colorToHex(color) }]}
            onPress={() => changeBackGround()}
        >
            <Text style={styles.text}>{HELLO_THERE}</Text>
            <TouchableOpacity
                style={styles.rgbView}
                onPress={() => changeBackGround()}
            >
                {hexLetterView("r", "red")}
                {hexLetterView("g", "green")}
                {hexLetterView("b", "blue")}
            </TouchableOpacity>
        </TouchableOpacity>
    );
}
