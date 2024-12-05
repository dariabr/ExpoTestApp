import { StyleSheet } from "react-native";

export default StyleSheet.create({
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

    letterText: {
        fontSize: 30,
        fontWeight: "bold",
    },
    rgbView: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 30,
        paddingVertical: 16,
    },
});
