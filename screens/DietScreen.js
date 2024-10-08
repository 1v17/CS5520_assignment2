import { SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import { useContext } from 'react'

import { ItemsContext } from '../context/ItemsContext'
import ScreenBackground from '../components/ScreenBackground'
import ItemsList from '../components/ItemsList'

const DietScreen = () => {

  const { dietItems } = useContext(ItemsContext);

  return (
    <SafeAreaView style={styles.container}>
      <ScreenBackground>
        <ItemsList items={dietItems} type='diet' />
      </ScreenBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default DietScreen