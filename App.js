import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './screens/MainScreen';
import ExerciseScreen from './screens/ExerciseScreen';
import ListScreen from './screens/ListScreen';
import ButtonScreen from './screens/ButtonScreen';
import MenuScreen from './screens/MenuScreen';
// import StudentScreen from './screens/StudentScreen';
// import ProfileScreen from './screens/ProfileScreen';
import BoxScreen from './screens/BoxScreen';
import PostsScreen from './screens/PostsScreen';
import CountriesScreen from './screens/CountriesScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName='Menu'
      screenOptions={{
        title: 'App'
      }}>
        <Stack.Screen name="Main" component={MainScreen}></Stack.Screen>
        <Stack.Screen name="Exercise" component={ExerciseScreen}></Stack.Screen>
        <Stack.Screen name="List" component={ListScreen}></Stack.Screen>
        <Stack.Screen name="Button" component={ButtonScreen}></Stack.Screen>
        <Stack.Screen name="Menu" component={MenuScreen}></Stack.Screen>
        {/* <Stack.Screen name="Students" component={StudentScreen}></Stack.Screen> */}
        {/* <Stack.Screen name="Profile" component={ProfileScreen}></Stack.Screen> */}
        <Stack.Screen name="Box" component={BoxScreen}></Stack.Screen>
        <Stack.Screen name="Posts" component={PostsScreen}></Stack.Screen>
        <Stack.Screen name="Countries" component={CountriesScreen}></Stack.Screen>
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
