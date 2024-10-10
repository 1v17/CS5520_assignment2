import { TextInput, StyleSheet } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import React from 'react'
import { useState, useContext } from 'react'

import { ThemeContext } from '../context/ThemeContext'
import Colors from '../constants/Colors'
import Spacings from '../constants/Spacings'
import Dimensions from '../constants/Dimensions'

const DateInput = ({date, changeDateHandler}) => {

  const { theme } = useContext(ThemeContext);
  const [dateText, setDateText] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);

  function onChangeDate(event, selectedDate) {
    const currentDate = selectedDate || new Date();
    changeDateHandler(currentDate);
    setShowDatePicker(false);
    setDateText(currentDate.toDateString());
  }

  return (
    <>
      <TextInput
        style={[styles.input, {color: theme.primaryColor}]}
        value={dateText}
        onPressIn={() => {
          setShowDatePicker(!showDatePicker)
          setDateText(date.toDateString());
        }}
        showSoftInputOnFocus={false}
      />
      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode='date'
          display="inline"
          onChange={onChangeDate}
        />
      )}
    </>
  )
}

const styles = StyleSheet.create({
  input: {
    height: Dimensions.singleLineInputHeight,
    borderWidth: Dimensions.inputBorderWidth,
    borderRadius: Dimensions.mediumBorderRadius,
    borderColor: Colors.inputBorder,
    backgroundColor: Colors.inputBackground,
    padding: Spacings.mediumPadding,
  },
});

export default DateInput