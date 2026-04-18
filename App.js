import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ExerciseScreen from './screens/ExerciseScreen';
import MainScreen from './screens/MainScreen';
import ListScreen from './screens/ListScreen';
import TestScreen from './screens/TestScreen';
import ChallengeScreen from './screens/ChallengeScreen';
import Challenge5Screen from './screens/Challenge5Screen';
import ButtonScreen from './screens/ButtonScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='Button'
      screenOptions={{
        title: 'App',
      }}>
        <Stack.Screen name="Home" component={MainScreen}></Stack.Screen>
        <Stack.Screen name="Test" component={TestScreen}></Stack.Screen>
        <Stack.Screen name="Exercise" component={ExerciseScreen}></Stack.Screen>
        <Stack.Screen name="List" component={ListScreen}></Stack.Screen>
        <Stack.Screen name="Challenge" component={ChallengeScreen}></Stack.Screen>
        <Stack.Screen name="Challenge5" component={Challenge5Screen}></Stack.Screen>
        <Stack.Screen name="Button" component={ButtonScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
