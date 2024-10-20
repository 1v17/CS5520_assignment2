import { Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { useContext } from 'react'

import Colors from '../constants/Colors'
import Dimensions from '../constants/Dimensions'
import Spacings from '../constants/Spacings'
import { ThemeContext } from '../context/ThemeContext'



const PressableButton = ({children, pressHandler, 
  componentStyle, pressedStyle}) => {

  const { theme } = useContext(ThemeContext);

  return (
    <Pressable
      onPress={pressHandler}
      hitSlop={Dimensions.hitSlop}
      style={({pressed}) => {
        return [styles.defaultStyle, {backgroundColor: theme.primaryColor},
          componentStyle,
          pressed && styles.defaultPressedStyle, pressed && {backgroundColor: theme.secondaryColor},
          pressed && pressedStyle,
        ]}}
    >
      {children}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  defaultStyle: { 
    flex: 1,
    borderRadius: Dimensions.mediumBorderRadius,
    padding: Spacings.extraNarrowPadding,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  defaultPressedStyle: {
    opacity: Colors.itemPressedOpacity,
  },
});

export default PressableButton