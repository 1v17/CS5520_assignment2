import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import { useContext } from 'react'

import ScreenBackground from '../components/ScreenBackground'
import Colors from '../constants/Colors'
import { ItemsContext } from '../context/ItemsContext'
import { ThemeContext } from '../context/ThemeContext'

const ActivityEntry = () => {

  const { addActivityItem } = useContext(ItemsContext);
  const { theme } = useContext(ThemeContext);

  return (
    <ScreenBackground>
      <View style={styles.inputSection} >
        <Text>Activity*</Text>
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