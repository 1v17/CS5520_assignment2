import { View, StyleSheet} from 'react-native'
import React from 'react'

import Colors from '../constants/Colors'

const ScreenBackground = ({children}) => {
  return (
    <View style={styles.container} >
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