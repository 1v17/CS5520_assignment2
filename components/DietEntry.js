import { View, Text, TouchableWithoutFeedback, StyleSheet, 
  Keyboard, TextInput } from 'react-native'
import React from 'react'
import { useContext, useState } from 'react'

import ScreenBackground from './ScreenBackground'
import ButtonPair from './ButtonPair'
import Colors from '../constants/Colors'
import DateInput from './DateInput'
import { ThemeContext } from '../context/ThemeContext'
import Spacings from '../constants/Spacings';
import Dimensions from '../constants/Dimensions';

const DietEntry = ({saveHandler}) => {

  const { theme } = useContext(ThemeContext);
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date()); // current date
  const [dateText, setDateText] = useState('');
  const [calories, setCalories] = useState('');

  function handleSave() {
    saveHandler(description, calories, date, dateText);
  }

  function handleChangeDate(selectedDate) {
    setDate(selectedDate);
    setDateText(selectedDate.toDateString());
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false} >
      <View style={styles.container} >
        <ScreenBackground>
        <View style={styles.inputSection} >
          <Text style={[styles.inputLabel, {color: theme.textColor}]} >
            Description *
          </Text>
          <TextInput
            style={[styles.input, {color: theme.primaryColor, 
              height: Dimensions.multiLineInputHeight,
              textAlignVertical: 'top'}]}
            value={description}
            keyboardType="default"
            blurOnSubmit={true}
            multiline={true}
            onChangeText={function (changedText) {
              setDescription(changedText);
            }}
          />
          <Text style={[styles.inputLabel, {color: theme.textColor}]} >
            Calories *
          </Text>
          <TextInput
            style={[styles.input, {color: theme.primaryColor}]}
            keyboardType="numeric"
            value={calories}
            blurOnSubmit={true}
            onChangeText={function (changedText) {
              setCalories(changedText);
            }}            
          />
          <Text style={[styles.inputLabel, {color: theme.textColor}]} >
            Date *
          </Text>
          <DateInput 
            date={date} 
            dateText={dateText}
            changeDateHandler={handleChangeDate} 
          />
        </View>
        <View style={styles.buttonSection} >
          <ButtonPair
            saveHandler={handleSave}
          />
          </View>
        </ScreenBackground>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  inputSection: {
    flex: 3,
    justifyContent: 'center',
    alignContent: 'flex-start',
    padding: Spacings.widePadding,
  },
  buttonSection: {
    flex: 1,
    justifyContent: 'center',
    alighContent: 'center',
  },
  input: {
    height: Dimensions.singleLineInputHeight,
    borderWidth: Dimensions.inputBorderWidth,
    borderRadius: Dimensions.mediumBorderRadius,
    borderColor: Colors.inputBorder,
    backgroundColor: Colors.inputBackground,
    padding: Spacings.mediumPadding,
  },
  inputLabel:{
    marginTop: Spacings.mediumMargin,
    padding: Spacings.extraNarrowPadding,
  },
});

export default DietEntry