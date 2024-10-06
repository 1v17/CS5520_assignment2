import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import Colors from '../constants/Colors'
import ScreenBackground from '../components/ScreenBackground'

const ActivityScreen = () => {
  return (
    <ScreenBackground>
      <View style={styles.container} >
        <Text>Activities</Text>
      </View>
    </ScreenBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


export default ActivityScreen