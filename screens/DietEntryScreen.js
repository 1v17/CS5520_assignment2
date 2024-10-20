import { Alert } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

import { writeToDB } from '../firebase/FirebaseHelper';
import DietEntry from '../components/DietEntry';

const DietEntryScreen = () => {

  const validCalories = /^[1-9]\d*$/; // positive integers without leading zeros
  const navigation = useNavigation();

  function handleSave(description, calories, date, dateText) {
    if (description && validCalories.test(calories) && dateText && date) {
      writeToDB({description, calories, date}, 'dietItems');
      navigation.goBack();
    } else {
      Alert.alert('Invalid input', 
        'Please check your input values');
    }
  }

  return (
    <DietEntry 
      saveHandler={handleSave}
    />
  )
}

export default DietEntryScreen