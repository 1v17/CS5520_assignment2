import { SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import { useContext } from 'react'

import { ItemsContext } from '../context/ItemsContext'
import ScreenBackground from '../components/ScreenBackground'
import ItemsList from '../components/ItemsList'

const ActivityScreen = () => {

  const { activityItems } = useContext(ItemsContext);

  // function compareByDate(a, b) {
  //   return b.date - a.date; // sort by date in descending order
  // }

  // activityItems.sort(compareByDate);

  return (
    <SafeAreaView style={styles.container}>
      <ScreenBackground>
        <ItemsList items={activityItems} type='activity' />
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