import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useContext } from 'react'

import Dimensions from '../constants/Dimensions'
import ScreenBackground from '../components/ScreenBackground'
import PressableButton from '../components/PressableButton'
import { ThemeContext } from '../context/ThemeContext'
import TextSizes from '../constants/TextSizes'

const SettingScreen = () => {

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <ScreenBackground>
      <View style={styles.container} >
        <View style={styles.buttonWrapper}>
          <PressableButton pressHandler={toggleTheme}>
            <Text style={[styles.buttonText, {color: theme.backgroundColor}]}>
              Toggle Theme
            </Text>
          </PressableButton>
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
    height: Dimensions.buttonHeight,
    alignSelf: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: TextSizes.large,
  },
});

export default SettingScreen