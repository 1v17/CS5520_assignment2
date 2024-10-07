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
      <View>
        <Button 
          title="Toggle Theme" 
          onPress={toggleTheme}
        />
      </View>
    </ScreenBackground>
  )
}

export default SettingScreen