import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ActivityScreen from './screens/ActivityScreen';
import DietScreen from './screens/DietScreen';
import SettingScreen from './screens/SettingScreen';
import Colors from './constants/Colors';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ActivityScreen"
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.headerBackground,
          },
          headerTintColor: Colors.headerText,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen name="ActivityScreen" component={ActivityScreen} 
          options={{
            title: 'Activities',
          }}
        />
        <Stack.Screen name="DietScreen" component={DietScreen} />
        <Stack.Screen name="SettingScreen" component={SettingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
