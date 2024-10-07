import { View, Text, StyleSheet, Button } from 'react-native'
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
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Walking', value: 'Walking'},
    {label: 'Running', value: 'Running'},
    {label: 'Swimming', value: 'Swimming'},
    {label: 'Weights', value: 'Weights'},
    {label: 'Yoga', value: 'Yoga'},
    {label: 'Cycling', value: 'Cycling'},
    {label: 'Hiking', value: 'Hiking'},
  ]);

  return (
    <ScreenBackground>
      <View style={styles.inputSection} >
        <Text>Activity*</Text>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />
        <Text>Duration (min)*</Text>
      </View>
      <View style={styles.buttonSection} >
        <Button 
          title="Save" 
          onPress={() => alert('Activity Added')}
          color={Colors.primaryColor}
        />
      </View>
    </ScreenBackground>
  )
}

const styles = StyleSheet.create({
  inputSection: {
    flex: 3,
    justifyContent: 'center',
    alignContent: 'flex-start',
    padding: '5%',
  },
  buttonSection: {
    flex: 1,
  },
});

export default ActivityEntry