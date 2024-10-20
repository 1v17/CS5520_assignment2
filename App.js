import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BottomTabs from "./components/BottomTabs";
import { ThemeProvider } from "./context/ThemeContext";
import ActivityEntry from "./screens/ActivityEntry";
import DietEntry from "./screens/DietEntry";
import EditActivity from "./screens/EditActivity";
import EditDiet from "./screens/EditDiet";
import Colors from "./constants/Colors";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="ButtomTabs"
          screenOptions={{
            headerStyle: {
              backgroundColor: Colors.headerBackground,
            },
            headerTintColor: Colors.headerText,
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        >
          <Stack.Screen
            name="ButtomTabs"
            component={BottomTabs}
            options={{ headerShown: false, title: "BottomTabs" }}
          />
          <Stack.Screen
            name="ActivityEntry"
            component={ActivityEntry}
            options={{
              title: "Add An Activity",
              headerBackTitleVisible: false,
            }}
          />
          <Stack.Screen
            name="DietEntry"
            component={DietEntry}
            options={{
              title: "Add A Diet Entry",
              headerBackTitleVisible: false,
            }}
          />
          <Stack.Screen
            name="EditActivity"
            component={EditActivity}
            options={{ 
              title: "Edit",
              headerBackTitleVisible: false,
            }}
          />
          <Stack.Screen
            name="EditDiet"
            component={EditDiet}
            options={{ 
              title: "Edit",
              headerBackTitleVisible: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
