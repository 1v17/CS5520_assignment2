import { View, Text, TouchableWithoutFeedback, StyleSheet, 
  Keyboard, TextInput, Alert } from 'react-native'
import React from 'react'
import { useContext, useState } from 'react'
import { useNavigation } from '@react-navigation/native';

import ScreenBackground from '../components/ScreenBackground'
import ButtonPair from '../components/ButtonPair'
import Colors from '../constants/Colors'
import DateInput from '../components/DateInput'
import { ItemsContext } from '../context/ItemsContext'
import { ThemeContext } from '../context/ThemeContext'

const DietEntry = () => {

  const validCalories = /^[1-9]\d*$/; // positive integers without leading zeros
  const { theme } = useContext(ThemeContext);
  const [description, setDescription] = useState('');
  const navigation = useNavigation();
  const { addDietItem } = useContext(ItemsContext);
  const [date, setDate] = useState(new Date()); // current date
  const [calories, setCalories] = useState('');

  function handleSave() {
    if (description && validCalories.test(calories) && date) {
      addDietItem({description, calories, date});
      navigation.goBack();
    } else {
      Alert.alert('Invalid input', 
        'Please check your input values');
    }
  }

  function handleChangeDate(selectedDate) {
    setDate(selectedDate);
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
              height: 135,
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
    padding: '5%',
  },
  buttonSection: {
    flex: 1,
    justifyContent: 'center',
    alighContent: 'center',
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: Colors.inputBorder,
    backgroundColor: Colors.inputBackground,
    padding: "3%",
  },
  inputLabel:{
    marginTop: "5%",
    padding: "1%",
  },
});

export default DietEntry