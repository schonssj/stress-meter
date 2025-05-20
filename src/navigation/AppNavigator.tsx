import Home from '../pages/Home';
import Result from '../pages/Result';
import Question from '../pages/Question';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AppNavigator = () => (
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
);

export default AppNavigator;