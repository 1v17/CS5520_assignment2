import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import ActivityScreen from '../screens/ActivityScreen';
import DietScreen from '../screens/DietScreen';
import SettingScreen from '../screens/SettingScreen';
import Colors from '../constants/Colors';

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="ActivityScreen"
      screenOptions={({ route }) => ({
        headerStyle: {
          backgroundColor: Colors.headerBackground,
        },
        headerTintColor: Colors.headerText,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        tabBarStyle: {
          backgroundColor: Colors.headerBackground,
        },
        tabBarActiveTintColor: Colors.tabActive,
        tabBarInactiveTintColor: Colors.tabInactive,
        tabBarLabelStyle: {
          fontWeight: 'bold',
          fontSize: 10,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'ActivityScreen') {
            iconName = focused ? 'accessibility' : 'accessibility-outline';
          } else if (route.name === 'DietScreen') {
            iconName = focused ? 'fast-food' : 'fast-food-outline';
          } else if (route.name === 'SettingScreen') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen 
        name="ActivityScreen" 
        component={ActivityScreen} 
        options={{ title: 'Activities' }}
      />
      <Tab.Screen 
        name="DietScreen" 
        component={DietScreen} 
        options={{ title: 'Diet' }}
      />
      <Tab.Screen 
        name="SettingScreen" 
        component={SettingScreen} 
        options={{ title: 'Settings' }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabs;