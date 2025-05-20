import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    button: {
      alignItems: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'teal',
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
      color: 'white',
      textAlign: 'center',
    },
    description: {
      fontSize: 20,
      letterSpacing: 0.25,
      color: 'white',
      textAlign: 'center',
      padding: 12
    }
});