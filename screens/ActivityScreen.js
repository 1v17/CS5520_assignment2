import { View, Text, SafeAreaView, StyleSheet, FlatList } from 'react-native'
import React from 'react'

import Colors from '../constants/Colors'
import ScreenBackground from '../components/ScreenBackground'

const ActivityScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScreenBackground>
        <FlatList />
      </ScreenBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


export default ActivityScreen