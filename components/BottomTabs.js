import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native';

import ActivityScreen from '../screens/ActivityScreen';
import DietScreen from '../screens/DietScreen';
import SettingScreen from '../screens/SettingScreen';
import Colors from '../constants/Colors';

const Tab = createBottomTabNavigator();

function BottomTabs() {

  const navigation = useNavigation();

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
        options={{ title: 'Activities',
          headerRight: () => {
            return (
              <Button
                title="Add"
                onPress={() => navigation.navigate('ActivityEntry')}
                color={Colors.primary}
              />
            );
          },
        }}
      />
      <Tab.Screen 
        name="DietScreen" 
        component={DietScreen} 
        options={{ title: 'Diet',
          headerRight: () => {
            return (
              <Button
                title="Add"
                onPress={() => navigation.navigate('DietEntry')}
                color={Colors.primary}
              />
            );
          },
         }}
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