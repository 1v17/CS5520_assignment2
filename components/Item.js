import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useContext } from 'react'
import Entypo from '@expo/vector-icons/Entypo';

import { ThemeContext } from '../context/ThemeContext'

const Item = ({item, type}) => {

  const { theme } = useContext(ThemeContext);
  const formattedDate = new Date(item.date).toDateString();
  const showSpecialMark = (type === "activity") ? 
    ((item.name === "Running" || item.name === "Weights") && Number(item.duration) > 60) :
    (Number(item.calories) > 800);
    return (
      <View style={[styles.container, 
        {backgroundColor: theme.foregroundColor,}]} >
        <Text style={[styles.label, {color: theme.backgroundColor}]}>
          {(type === "activity") ? item.name : item.description}
        </Text>
        <View style={styles.rightView} >
          {showSpecialMark && <Entypo name="warning" size={20} color={theme.backgroundColor} />}
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
    margin: "2%",
    padding: "2%",
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    borderRadius: 10,
  },
  rightView: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center', 
    alignContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 15,
    paddingVertical: "2%",
    fontWeight: 'bold',
  },
  textBox: {
    borderRadius: 5,
    justifyContent: 'center',
    alignContent: 'center',
  },
  text: {
    fontSize: 13,
    paddingVertical: "1%",
    paddingHorizontal: "2%",
  },
});

export default Item