import React, { useState } from "react";
import { Text, Pressable, View } from "react-native";
import { RadioButton } from "react-native-paper";
import { styles } from "./Question.styles";

const Question = ({ navigation }) => {
  const questions: string[] = [
    "Atualmente tem sentido frequentes dores de cabeça ou dores no estômago?",
    "Você tem sentido palpitações, sensações de angústia ou nervosismo a ponto de atrapalhar na execução de suas tarefas diárias?",
    "Você tem sentido raiva ou irritação com coisas que estão acontecendo, percebendo-as fora do seu controle?",
    "Você está tendo problemas com insônia, pesadelos ou ansiedade, percebendo que tais sintomas estão relacionados a questões do seu cotidiano?",
    "Você tem sentido dificuldade ou cansaço além do normal em realizar suas as tarefas diárias?"
  ];

  const [checked, setChecked] = useState('');
  const [question, setQuestion] = useState(questions[0]);
  const [result, setResult] = useState(0);

  function handleNavigation (value: string): void { 
    setResult(result + parseInt(value));    
    if (questions.indexOf(question) + 1 < questions.length) {
      setQuestion(questions[questions.indexOf(question) + 1])
    } else {
      navigation.navigate("Result", { sum: result + parseInt(value) });
    }
    setChecked('');
  }

  return (
    <View style={styles.container}>

      <View>
        <Text style={{ textAlign: 'center', paddingVertical: '15%', fontSize: 32 }}>Pergunta { questions.indexOf(question) + 1 }</Text>
      </View>
      
      <View style={styles.section}>
        
        <View style={{ justifyContent: 'center' }}>
          <Text style={styles.description}>{ question }</Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <RadioButton
            value="1"
            status={ checked === '1' ? 'checked' : 'unchecked' }
            onPress={() => setChecked('1')}
            color="white"
            uncheckedColor="white"
          />
          <Text style={styles.option}>1</Text>
        
          <RadioButton
            value="2"
            status={ checked === '2' ? 'checked' : 'unchecked' }
            onPress={() => setChecked('2')}
            color="white"
            uncheckedColor="white"
          />
          <Text style={styles.option}>2</Text>

          <RadioButton
            value="3"
            status={ checked === '3' ? 'checked' : 'unchecked' }
            onPress={() => setChecked('3')}
            color="white"
            uncheckedColor="white"
          />
          <Text style={styles.option}>3</Text>
          <RadioButton
            value="4"
            status={ checked === '4' ? 'checked' : 'unchecked' }
            onPress={() => setChecked('4')}
            color="white"
            uncheckedColor="white"
          />
          <Text style={styles.option}>4</Text>
          <RadioButton
            value="5"
            status={ checked === '5' ? 'checked' : 'unchecked' }
            onPress={() => setChecked('5')}
            color="white"
            uncheckedColor="white"
          />
          <Text style={styles.option}>5</Text>
        </View>
      </View>

      <View style={{ paddingVertical: '15%', paddingHorizontal: '3%' }}>
        <Text>1. Nunca</Text>
        <Text>2. Quase nunca</Text>
        <Text>3. Pouco frequente</Text>
        <Text>4. Frequente</Text>
        <Text>5. Muito frequente</Text>
      </View>

      <Pressable style={[styles.button, { opacity: checked === '' ? 0.5 : 1 }]} onPress={() => handleNavigation(checked)} disabled={checked === ''}>
        <Text style={styles.text}>Próximo</Text>
      </Pressable>
    </View>
  );
};

export default Question;