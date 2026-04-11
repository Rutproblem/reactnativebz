import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ExerciseScreen from './screens/ExerciseScreen';
import MainScreen from './screens/MainScreen';
import ListScreen from './screens/ListScreen';
import TestScreen from './screens/TestScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='List'
      screenOptions={{
        title: 'App'
      }}>
        <Stack.Screen name="Home" component={MainScreen}></Stack.Screen>
        <Stack.Screen name="Test" component={TestScreen}></Stack.Screen>
        <Stack.Screen name="Exercise" component={ExerciseScreen}></Stack.Screen>
        <Stack.Screen name="List" component={ListScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
