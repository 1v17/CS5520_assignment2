import { View, Text, StyleSheet, Button, TextInput, Keyboard,
   TouchableWithoutFeedback, Alert } from 'react-native'
import React from 'react'
import { useContext, useState } from 'react'
import DropDownPicker from 'react-native-dropdown-picker'
import DateTimePicker from '@react-native-community/datetimepicker'
import { useNavigation } from '@react-navigation/native';

import ScreenBackground from '../components/ScreenBackground'
import Colors from '../constants/Colors'
import { ItemsContext } from '../context/ItemsContext'
import { ThemeContext } from '../context/ThemeContext'

const ActivityEntry = () => {

  const validDuration = /^[1-9]\d*$/; // positive integers without leading zeros
  const { addActivityItem } = useContext(ItemsContext);
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
  const [showDatePicker, setShowDatePicker] = useState(false);
  const navigation = useNavigation();

  function onChangeDate(event, selectedDate) {
    const currentDate = selectedDate || new Date();
    setDate(currentDate);
    setShowDatePicker(false);
    setDateText(currentDate.toDateString());
  }

  function handleSave() {
    if (name && validDuration.test(duration) && date) {
      addActivityItem({name, duration, date});
      navigation.navigate("ActivityScreen");
    } else {
      Alert.alert('Invalid Entry', 
        'Please make sure all fields are filled out correctly.');
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
          </View>
          <View style={styles.buttonSection} >
            <View style={styles.buttonWrapper}>
              <Button
                title="Cancel"
                onPress={() => navigation.goBack()}
                color={theme.primaryColor}
              />
              <Button 
                title="Save" 
                onPress={handleSave}
                color={theme.primaryColor}
              />
            </View>
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
  buttonWrapper: {
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: 20,
  }
});

export default ActivityEntry