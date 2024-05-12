import { Text, Pressable, StyleSheet, View } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: 'teal', justifyContent: 'center', height: '50%', alignItems: 'center' }}>
        <Text style={styles.title}>Responda as perguntas a seguir, sendo:</Text>

        <Text style={styles.text}> 1. Nunca</Text>
        <Text style={styles.text}> 2. Quase nunca</Text>
        <Text style={styles.text}> 3. Pouco frequente</Text>
        <Text style={styles.text}> 4. Frequente</Text>
        <Text style={styles.text}> 5. Muito frequente</Text>
      </View>

      <Pressable style={styles.button} onPress={() => navigation.navigate("Question")}>
        <Text style={styles.text}>Iniciar</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
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
    color: 'white'
  },
  title: {
    fontSize: 24,
    letterSpacing: 0.25,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    paddingBottom: '10%'
  }
});
export default Home;