import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { useContext, useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";

import ScreenBackground from "./ScreenBackground";
import ButtonPair from "./ButtonPair";
import Colors from "../constants/Colors";
import DateInput from "./DateInput";
import { ThemeContext } from "../context/ThemeContext";
import Dimensions from "../constants/Dimensions";
import Spacings from "../constants/Spacings";

const ActivityEntry = ({
  name,
  duration,
  date,
  dateText,
  changeNameHandler,
  changeDurationHandler,
  changeDateHandler,
  saveHandler,
  showCheckBox=false,
}) => {

  const { theme } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: "Walking", value: "Walking" },
    { label: "Running", value: "Running" },
    { label: "Swimming", value: "Swimming" },
    { label: "Weights", value: "Weights" },
    { label: "Yoga", value: "Yoga" },
    { label: "Cycling", value: "Cycling" },
    { label: "Hiking", value: "Hiking" },
  ]);

  function handleDropDownChange(value) {
    changeNameHandler(value);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <ScreenBackground>
          <View style={styles.inputSection}>
            <Text style={[styles.inputLabel, { color: theme.textColor }]}>
              Activity *
            </Text>
            <>
              <DropDownPicker
                open={open}
                value={name}
                items={items}
                setOpen={setOpen}
                setValue={handleDropDownChange}
                onChangeValue={(selectedName) => {
                  changeNameHandler(selectedName);
                }}
                setItems={setItems}
                placeholder="Select An Activity"
                textStyle={{
                  color: theme.primaryColor,
                }}
                hideSelectedItemIcon={true}
              />
            </>
            <Text style={[styles.inputLabel, { color: theme.textColor }]}>
              Duration (min) *
            </Text>
            <TextInput
              style={[styles.input, { color: theme.primaryColor }]}
              keyboardType="numeric"
              value={duration}
              blurOnSubmit={true}
              onChangeText={function (changedText) {
                changeDurationHandler(changedText);
              }}
            />
            <Text style={[styles.inputLabel, { color: theme.textColor }]}>
              Date *
            </Text>
            <DateInput
              date={date}
              dateText={dateText}
              changeDateHandler={changeDateHandler}
            />
          </View>
          <View style={styles.buttonSection}>
            {/* TODO: add checkbox here */}
            <ButtonPair saveHandler={saveHandler} />
          </View>
        </ScreenBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  inputSection: {
    flex: 3,
    justifyContent: "center",
    alignContent: "flex-start",
    padding: Spacings.widePadding,
  },
  buttonSection: {
    flex: 1,
    justifyContent: "center",
    alighContent: "center",
  },
  input: {
    height: Dimensions.singleLineInputHeight,
    borderWidth: Dimensions.inputBorderWidth,
    borderRadius: Dimensions.mediumBorderRadius,
    borderColor: Colors.inputBorder,
    backgroundColor: Colors.inputBackground,
    padding: Spacings.mediumPadding,
  },
  inputLabel: {
    marginTop: Spacings.mediumMargin,
    padding: Spacings.extraNarrowPadding,
  },
});

export default ActivityEntry;
