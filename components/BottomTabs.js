import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ActivityScreen from '../screens/ActivityScreen';
import DietScreen from '../screens/DietScreen';
import SettingScreen from '../screens/SettingScreen';
import Colors from '../constants/Colors';

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
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
      <Tab.Screen 
        name="ActivityScreen" 
        component={ActivityScreen} 
        options={{ title: 'Activities' }}
      />
      <Tab.Screen name="DietScreen" component={DietScreen} />
      <Tab.Screen name="SettingScreen" component={SettingScreen} />
    </Tab.Navigator>
  );
}

export default BottomTabs;