import { Alert } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

import { writeToDB } from '../firebase/FirebaseHelper';
import Entry from '../components/Entry';

const DietEntryScreen = () => {

  const validCalories = /^[1-9]\d*$/; // positive integers without leading zeros
  const navigation = useNavigation();
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date()); // current date
  const [dateText, setDateText] = useState('');
  const [calories, setCalories] = useState('');

  function handleSave() {
    if (description && validCalories.test(calories) && dateText && date) {
      writeToDB({description, calories, date}, 'dietItems');
      navigation.goBack();
    } else {
      Alert.alert('Invalid input', 
        'Please check your input values');
    }
  }

  function handleChangeDate(selectedDate) {
    setDate(selectedDate);
    setDateText(selectedDate.toDateString());
  }

  function handleDescriptionChange(selectedDescription) {
    setDescription(selectedDescription);
  }

  function handleCaloriesChange(selectedCalories) {
    setCalories(selectedCalories);
  }

  return (
    <Entry 
      type={'diet'}
      title={description}
      amount={calories}
      date={date}
      dateText={dateText}
      changeTitleHandler={handleDescriptionChange}
      changeAmountHandler={handleCaloriesChange}
      changeDateHandler={handleChangeDate}
      saveHandler={handleSave}
    />
  )
}

export default DietEntryScreen