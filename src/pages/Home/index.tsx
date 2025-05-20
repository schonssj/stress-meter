import { Text, Pressable, View } from "react-native";
import { styles } from "./Home.styles";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
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

export default Home;