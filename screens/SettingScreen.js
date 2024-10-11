import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import { useContext } from 'react'

import Dimensions from '../constants/Dimensions'
import ScreenBackground from '../components/ScreenBackground'
import { ThemeContext } from '../context/ThemeContext'

const SettingScreen = () => {

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <ScreenBackground>
      <View style={styles.container} >
        <View style={styles.buttonWrapper}>
          <Button 
            title="Toggle Theme" 
            onPress={toggleTheme}
            color={theme.primaryColor}
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
    width: Dimensions.buttonWidth,
    alignSelf: 'center',
  }
});

export default SettingScreen