import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useContext } from 'react'
import Entypo from '@expo/vector-icons/Entypo';

import { ThemeContext } from '../context/ThemeContext'
import Spacings from '../constants/Spacings';
import Dimensions from '../constants/Dimensions';
import TextSizes from '../constants/TextSizes';

const Item = ({item, type}) => {

  const longDuration = 60;
  const largeCalories = 800;

  const { theme } = useContext(ThemeContext);
  const formattedDate = new Date(item.date).toDateString();
  // console.log(item);
  const showSpecialMark = (type === "activity") ? 
    ((item.name === "Running" || item.name === "Weights") && Number(item.duration) > longDuration) :
    (Number(item.calories) > largeCalories);
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
    margin: Spacings.narrowMargin,
    padding: Spacings.narrowPadding,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    borderRadius: Dimensions.largeBorderRadius,
  },
  rightView: {
    flexDirection: 'row',
    gap: Spacings.narrowGap,
    justifyContent: 'center', 
    alignContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: TextSizes.medium,
    paddingVertical: Spacings.narrowPadding,
    fontWeight: 'bold',
  },
  textBox: {
    borderRadius: Dimensions.smallBorderRadius,
    justifyContent: 'center',
    alignContent: 'center',
  },
  text: {
    fontSize: TextSizes.small,
    paddingVertical: Spacings.extraNarrowPadding,
    paddingHorizontal: Spacings.narrowPadding,
  },
});

export default Item