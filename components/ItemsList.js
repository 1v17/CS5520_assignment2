import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { useContext } from 'react'

import Colors from '../constants/Colors'
import { ItemsContext } from '../context/ItemsContext'
import { ThemeContext } from '../context/ThemeContext'
import Item from './Item'

const ItemsList = () => {

  const { activityItems } = useContext(ItemsContext);
  const { theme } = useContext(ThemeContext);

  return (
    <FlatList 
      data={activityItems}
      renderItem={({item}) => {
        return (
        <Item type='activity' item={item} />
      )}}
      contentContainerStyle={[styles.container, 
        {backgroundColor: theme.foregroundColor,}]}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.darkBackground,
    padding: "3%",
    margin: "5%",
    borderRadius: 5,
  },
});

export default ItemsList