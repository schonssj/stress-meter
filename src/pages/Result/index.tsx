import { Text, Pressable, View } from "react-native";
import { styles } from "./Result.styles";

const Result = ({ route, navigation }) => {
  const { sum } = route.params;

  return (
    <View style={styles.container}>
      
      <View>
        <Text style={{ textAlign: 'center', paddingVertical: '20%', fontSize: 32 }}>Resultado</Text>
      </View>

      <View style={{ backgroundColor: 'teal', justifyContent: 'center', height: '40%' }}>
        
        <View style={[{ flexDirection: 'row' }]}>
          { sum < 9 && <Text style={styles.description}>No momento não foram identificados sinais e sintomas que levam a um quadro de estresse. Ao sentir necessidade, procure o setor de Psicologia!</Text> }
        </View>

        <View style={[{ flexDirection: 'row' }]}>
          { sum > 8 && sum < 18 && <Text style={styles.description}>No momento foram identificados alguns sintomas que podem indicar princípio de estresse, atenção aos sinais. Sugestão, procure o setor de Psicologia!</Text> }
        </View>

        <View style={[{ flexDirection: 'row' }]}>
          { sum > 17 && <Text style={styles.description}>No momento foram identificados sinais e sintomas que podem indicar um quadro de estresse com necessidade de intervenção imediata. Sugestão, procure em breve o setor de Psicologia!</Text> }
        </View>
      
      </View>

      <Pressable style={styles.button} onPress={() => navigation.navigate("Home")}>
        <Text style={styles.text}>Reiniciar</Text>
      </Pressable>

    </View>
  );
};

export default Result;