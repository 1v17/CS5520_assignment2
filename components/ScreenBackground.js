import { View, StyleSheet} from 'react-native'
import React from 'react'
import { useContext } from 'react'

import Colors from '../constants/Colors'
import { ThemeContext } from '../context/ThemeContext'

const ScreenBackground = ({children}) => {

  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <View style={[styles.container, 
                  isDarkTheme && {backgroundColor: Colors.darkBackground}]} 
    >
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.lightBackground,
    },
});

export default ScreenBackground