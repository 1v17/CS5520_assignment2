import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useContext } from 'react'

import { ThemeContext } from '../context/ThemeContext'
import Colors from '../constants/Colors'

const Item = ({item, type}) => {

  const { theme } = useContext(ThemeContext);

    return (
      <View style={styles.container} >
        <Text style={[styles.label, {color: theme.textColor}]}>
          {(type === "activity") ? item.name : item.description}
        </Text>
        <View style={[styles.textBox, {backgroundColor: theme.backgroundColor}]} >
          <Text style={[styles.text, {color: theme.foregroundColor}]} >
            {item.date}
          </Text>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  label: {
    fontSize: 15,
    padding: "1%",
  },
  textBox: {
    borderRadius: 5,
  },
  text: {
    fontSize: 15,
    padding: "1%",
  },
});

export default Item