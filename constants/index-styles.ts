import { CurrentRenderContext } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import icons from "../constants/icons"

export const styles = StyleSheet.create({
    titleContainer: {
        width: "100%",
        alignItems: "center",
        paddingTop: 100, 
        //backgroundColor: "#F1D895",
    },
    title: {
        fontSize: 80,
        marginBottom: 10,
        fontFamily: "Micro5",
    },
    subtitle: {
        fontSize: 40,
        marginBottom: 20,
        fontFamily: "Micro5",
        alignItems: "center",
    },
    contentContainer: {
        flex: 1,
        //backgroundColor: "#F1D895",
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        width: 400,
        height: 400,
        aspectRatio: 1,
        margin: 10,
    },
    image: {
        width: "100%",
        height: "100%",
        objectFit: "contain",
    },
    scrollContainer: {
        flexDirection: "row",
        paddingHorizontal: 5,
        alignItems: "center",
    },
    background: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      resizeMode: "repeat",
    }
});

