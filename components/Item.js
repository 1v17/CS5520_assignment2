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
        <View style={styles.rightView} >
          <View style={[styles.textBox, {backgroundColor: theme.backgroundColor}]} >
            <Text style={[styles.text, {color: theme.foregroundColor}]} >
              {item.date}
            </Text>
          </View>
          <View style={[styles.textBox, {backgroundColor: theme.backgroundColor}]} >
            <Text style={[styles.text, {color: theme.foregroundColor}]} >
              {(type === "activity") ? item.duration + ' min' : item.calories}
            </Text>
          </View>
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
  rightView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 10,
    alignContent: 'center',
  },
  label: {
    fontSize: 17,
    paddingVertical: "1%",
    fontWeight: 'bold',
  },
  textBox: {
    borderRadius: 5,
  },
  text: {
    fontSize: 15,
    paddingVertical: "1%",
    paddingHorizontal: "2%",
  },
});

export default Item