import { FlatList, StyleSheet } from 'react-native';
import React from 'react';

import Item from './Item';
import Spacings from '../constants/Spacings';

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
    margin: Spacings.mediumMargin,
  },
});

export default ItemsList