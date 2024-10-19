import { View, StyleSheet, Button } from 'react-native'
import React from 'react'
import { useContext } from 'react'
import { useNavigation } from '@react-navigation/native';

import { ThemeContext } from '../context/ThemeContext'
import Spacings from '../constants/Spacings';

const ButtonPair = ({saveHandler}) => {

  const { theme } = useContext(ThemeContext);
  const navigation = useNavigation();

  return (
    <View style={styles.buttonWrapper}>
      <Button
        title="Cancel"
        onPress={() => navigation.goBack()}
        color={theme.primaryColor}
      />
      <Button 
        title="Save" 
        onPress={saveHandler}
        color={theme.primaryColor}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  buttonWrapper: {
    marginVertical: Spacings.mediumMargin,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: Spacings.mediumGap,
  }
});

export default ButtonPair