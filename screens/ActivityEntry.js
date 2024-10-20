import { View, Text, StyleSheet, TextInput, Keyboard,
   TouchableWithoutFeedback, Alert } from 'react-native'
import React from 'react'
import { useContext, useState } from 'react'
import DropDownPicker from 'react-native-dropdown-picker'
import { useNavigation } from '@react-navigation/native';

import ScreenBackground from '../components/ScreenBackground'
import ButtonPair from '../components/ButtonPair'
import Colors from '../constants/Colors'
import DateInput from '../components/DateInput'
import { ThemeContext } from '../context/ThemeContext'
import Dimensions from '../constants/Dimensions';
import Spacings from '../constants/Spacings';
import { writeToDB } from '../firebase/FirebaseHelper';

const ActivityEntry = () => {

  const validDuration = /^[1-9]\d*$/; // positive integers without leading zeros
  const { theme } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(null);
  const [items, setItems] = useState([
    {label: 'Walking', value: 'Walking'},
    {label: 'Running', value: 'Running'},
    {label: 'Swimming', value: 'Swimming'},
    {label: 'Weights', value: 'Weights'},
    {label: 'Yoga', value: 'Yoga'},
    {label: 'Cycling', value: 'Cycling'},
    {label: 'Hiking', value: 'Hiking'},
  ]);

  const [duration, setDuration] = useState('');
  const [date, setDate] = useState(new Date()); // current date
  const [dateText, setDateText] = useState('');
  const navigation = useNavigation();
  const collectionName = 'activityItems';

  function handleChangeDate(selectedDate) {
    setDate(selectedDate);
    setDateText(selectedDate.toDateString());
  }

  function handleSave() {
    if (name && validDuration.test(duration) && dateText && date) {
      writeToDB({name, duration, date}, collectionName);
      navigation.goBack();
    } else {
      Alert.alert('Invalid input', 
        'Please check your input values');
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false} >
      <View style={styles.container} >
        <ScreenBackground>
          <View style={styles.inputSection} >
            <Text style={[styles.inputLabel, {color: theme.textColor}]} >
              Activity *
            </Text>
            <>
              <DropDownPicker
                open={open}
                value={name}
                items={items}
                setOpen={setOpen}
                setValue={setName}
                setItems={setItems}
                placeholder="Select An Activity"
                textStyle={{
                  color: theme.primaryColor,
                }}
                hideSelectedItemIcon={true}
              />
            </>
            <Text style={[styles.inputLabel, {color: theme.textColor}]} >
              Duration (min) *
            </Text>
            <TextInput
              style={[styles.input, {color: theme.primaryColor}]}
              keyboardType="numeric"
              value={duration}
              blurOnSubmit={true}
              onChangeText={function (changedText) {
                setDuration(changedText);
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

export default ActivityEntry