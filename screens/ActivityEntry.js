import { View, Text, StyleSheet, Button, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { useContext, useState } from 'react'
import DropDownPicker from 'react-native-dropdown-picker'

import ScreenBackground from '../components/ScreenBackground'
import Colors from '../constants/Colors'
import { ItemsContext } from '../context/ItemsContext'
import { ThemeContext } from '../context/ThemeContext'

const ActivityEntry = () => {

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

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false} >
      <View style={styles.container} >
        <ScreenBackground>
          <View style={styles.inputSection} >
            <Text>Activity *</Text>
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
            <Text>Duration (min) *</Text>
            <TextInput
              style={[styles.input, {color: theme.primaryColor}]}
              keyboardType="numeric"
              autoFocus={true}
              value={duration}
              blurOnSubmit={true}
              onChangeText={function (changedText) {
                setDuration(changedText);
              }}            
            />
            <Text>Date *</Text>
          </View>
          <View style={styles.buttonSection} >
            <Button 
              title="Save" 
              onPress={() => alert('Activity Added')}
              color={Colors.primaryColor}
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
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: Colors.inputBorder,
    backgroundColor: Colors.inputBackground,
    padding: "3%",
  },
});

export default ActivityEntry