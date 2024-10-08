import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'

import Item from './Item'

const ItemsList = ({items, type}) => {

  return (
    <FlatList 
      data={items}
      renderItem={({item}) => {
        return (
        <Item type={type} item={item} />
      )}}
      contentContainerStyle={styles.container}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    margin: "5%",
  },
});

export default ItemsList