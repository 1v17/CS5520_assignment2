import { View, Text, SafeAreaView, StyleSheet, FlatList } from 'react-native'
import React from 'react'

import Colors from '../constants/Colors'
import ScreenBackground from '../components/ScreenBackground'
import ItemsList from '../components/ItemsList'

const ActivityScreen = () => {

  return (
    <SafeAreaView style={styles.container}>
      <ScreenBackground>
        <ItemsList />
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