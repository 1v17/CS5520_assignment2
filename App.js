import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomTabs from './components/BottomTabs';
import { ThemeProvider } from './context/ThemeContext';
import { ItemsProvider } from './context/ItemsContext';
import ActivityEntry from './screens/ActivityEntry';
import DietEntry from './screens/DietEntry';
import Colors from './constants/Colors';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ThemeProvider>
      <ItemsProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="ButtomTabs"
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
            <Stack.Screen name="ButtomTabs" 
              component={BottomTabs} 
              options={{ headerShown: false,
                title: 'Back'
               }} 
            />
            <Stack.Screen 
              name="ActivityEntry" 
              component={ActivityEntry} 
              options={{ title: 'Add An Activity' }}
            />
            <Stack.Screen 
              name="DietEntry" 
              component={DietEntry} 
              options={{ title: 'Add A Diet Entry' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ItemsProvider>
    </ThemeProvider>
  );
}

