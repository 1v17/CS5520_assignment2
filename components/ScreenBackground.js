import { View, StyleSheet} from 'react-native'
import React from 'react'

import Colors from '../constants/Colors'
import { ThemeContext } from '../context/ThemeContext'

const ScreenBackground = ({children}) => {
  return (
    <ThemeContext.Provider value="light" >
      <View style={[styles.container, ]} >
        {children}
      </View>
    </ThemeContext.Provider>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.lightBackground,
    },
});

export default ScreenBackground