import Home from './src/pages/Home';
import Result from './src/pages/Result';
import Question from './src/pages/Question';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='Home'
          component={Home}
          options={{ title: 'Teste do Estresse', headerStyle: { backgroundColor: 'teal'}, headerTitleStyle: { color: 'white' } }}
        />
        <Stack.Screen 
          name='Question'
          component={Question}
          options={{ title: 'Teste do Estresse', headerStyle: { backgroundColor: 'teal'}, headerTitleStyle: { color: 'white' } }}
        />
        <Stack.Screen 
          name='Result'
          component={Result}
          options={{ title: 'Teste do Estresse', headerStyle: { backgroundColor: 'teal'}, headerTitleStyle: { color: 'white' } }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}