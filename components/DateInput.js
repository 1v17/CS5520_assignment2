import { TextInput, StyleSheet } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import React from 'react'
import { useState, useContext } from 'react'

import { ThemeContext } from '../context/ThemeContext'
import Colors from '../constants/Colors'

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
        onPressIn={() => setShowDatePicker(true)}
        onBlur={() => {
          setShowDatePicker(false);
          onChangeDate(null, date);
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
    height: 45,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: Colors.inputBorder,
    backgroundColor: Colors.inputBackground,
    padding: "3%",
  },
});

export default DateInput