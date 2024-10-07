import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { useContext } from 'react'

import Colors from '../constants/Colors'
import { ItemsContext } from '../context/ItemsContext'

const ItemsList = () => {

  const { activityItems } = useContext(ItemsContext);

  return (
    <FlatList 
      data={activityItems}
      renderItem={({item}) => {
        return (
        <View>
          <Text>{item.name}</Text>
        </View>
      )}}
      contentContainerStyle={styles.container}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ItemsList