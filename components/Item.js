import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useContext } from 'react'

import { ThemeContext } from '../context/ThemeContext'
import Colors from '../constants/Colors'

const Item = ({item, type}) => {

  const { theme } = useContext(ThemeContext);
  const formattedDate = new Date(item.date).toDateString();

    return (
      <View style={[styles.container, 
        {backgroundColor: theme.foregroundColor,}]} >
        <Text style={[styles.label, {color: theme.backgroundColor}]}>
          {(type === "activity") ? item.name : item.description}
        </Text>
        <View style={styles.rightView} >
          <View style={[styles.textBox, {backgroundColor: theme.backgroundColor}]} >
            <Text style={[styles.text, {color: theme.primaryColor}]} >
              {formattedDate}
            </Text>
          </View>
          <View style={[styles.textBox, {backgroundColor: theme.backgroundColor}]} >
            <Text style={[styles.text, {color: theme.primaryColor}]} >
              {(type === "activity") ? item.duration + ' min' : item.calories}
            </Text>
          </View>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
  container:{
    padding: "2%",
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    borderRadius: 10,
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