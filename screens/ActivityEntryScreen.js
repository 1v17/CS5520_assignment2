import { Alert } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

import { writeToDB } from '../firebase/FirebaseHelper';
import ActivityEntry from '../components/ActivityEntry';

const ActivityEntryScreen = () => {

  const validDuration = /^[1-9]\d*$/; // positive integers without leading zeros
  const navigation = useNavigation();
  const collectionName = 'activityItems';

  function handleSave(name, duration, date, dateText) {
    if (name && validDuration.test(duration) && dateText && date) {
      writeToDB({name, duration, date}, collectionName);
      navigation.goBack();
    } else {
      Alert.alert('Invalid input', 
        'Please check your input values');
    }
  }

  return (
    <ActivityEntry 
      saveHandler={handleSave}
    />
  )
}

export default ActivityEntryScreen