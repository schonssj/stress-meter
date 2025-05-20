import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        paddingVertical: '3%',
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'teal',
        opacity: 0.5,
        position: 'absolute',
        right: 10,
        left: 10,
        bottom: 10
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    title: {
        fontSize: 32,
        letterSpacing: 0.25,
        color: 'black',
    },
    description: {
        fontSize: 18,
        letterSpacing: 0.25,
        color: 'white',
        padding: 12,
        textAlign: 'center',
        overflow: 'visible'
    },
    container: {
        flex: 1
    }
});