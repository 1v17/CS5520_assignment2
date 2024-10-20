import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { Button, StyleSheet } from 'react-native';

import ActivityScreen from '../screens/ActivityScreen';
import DietScreen from '../screens/DietScreen';
import SettingScreen from '../screens/SettingScreen';
import Colors from '../constants/Colors';
import Spacings from '../constants/Spacings';
import Dimensions from '../constants/Dimensions';
import TextSizes from '../constants/TextSizes';
import PressableButton from './PressableButton';

const Tab = createBottomTabNavigator();

function BottomTabs() {

  const navigation = useNavigation();

  function handleAddActivity() {
    navigation.navigate('ActivityEntry');
  }

  function handleAddDiet() {
    navigation.navigate('DietEntry');
  }

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
          fontSize: TextSizes.extraSmall,
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
              <PressableButton 
                pressHandler={handleAddActivity}
                componentStyle={styles.headerButtonDefault}
                pressedStyle={styles.headerButtonPressed}
              >
                <Ionicons 
                  name="add" 
                  size={Dimensions.iconSize} 
                  color={Colors.headerText}
                />
                <Ionicons 
                  name="accessibility" 
                  size={Dimensions.iconSize} 
                  color={Colors.headerText}
                />
              </PressableButton>
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
              <PressableButton 
                pressHandler={handleAddDiet}
                componentStyle={styles.headerButtonDefault}
                pressedStyle={styles.headerButtonPressed}
              >
                <Ionicons 
                  name="add" 
                  size={Dimensions.iconSize} 
                  color={Colors.headerText}
                />
                <Ionicons 
                  name="fast-food" 
                  size={Dimensions.iconSize} 
                  color={Colors.headerText}
                />
              </PressableButton>
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

const styles = StyleSheet.create({
  headerButtonDefault: {
    backgroundColor: Colors.headerBackground,
    marginVertical: Spacings.narrowMargin,
    marginHorizontal: Spacings.wideMargin,
  },
  headerButtonPressed: {
    backgroundColor: Colors.headerBackground,
  },
});

export default BottomTabs;