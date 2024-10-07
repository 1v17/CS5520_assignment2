import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import { useContext } from 'react'

import Colors from '../constants/Colors'
import ScreenBackground from '../components/ScreenBackground'
import { ThemeContext } from '../context/ThemeContext'

const SettingScreen = () => {

  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <ScreenBackground>
      <View style={styles.container} >
        <View style={styles.buttonWrapper}>
          <Button 
            title="Toggle Theme" 
            onPress={toggleTheme}
            color={isDarkTheme ? Colors.secondary: Colors.primary}
          />
        </View>
      </View>
    </ScreenBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  buttonWrapper: {
    width: '50%',
    alignSelf: 'center',
  }
});

export default SettingScreen