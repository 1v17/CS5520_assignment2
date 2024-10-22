import { Alert, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

import { deleteFromDB, updateDB } from "../firebase/FirebaseHelper";
import Entry from "../components/Entry";
import PressableButton from "../components/PressableButton";
import Colors from "../constants/Colors";
import Dimensions from "../constants/Dimensions";
import Spacings from "../constants/Spacings";

const EditActivity = ({ navigation, route }) => {
  const validDuration = /^[1-9]\d*$/; // positive integers without leading zeros
  const collectionName = "activityItems";
  const [name, setName] = useState(route.params.item.name);
  const [duration, setDuration] = useState(route.params.item.duration);
  const [date, setDate] = useState(route.params.item.date);
  const [dateText, setDateText] = useState(
    route.params.item.date.toDate().toDateString()
  );
  const [isSpecial, setIsSpecial] = useState(route.params.item.isSpecial);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <PressableButton
          pressHandler={handleDeleteAlert}
          componentStyle={styles.headerButtonDefault}
          pressedStyle={styles.headerButtonPressed}
        >
          <AntDesign
            name="delete"
            size={Dimensions.iconSize}
            color={Colors.headerText}
          />
        </PressableButton>
      ),
    });
  }, []);

  function handleDelete() {
    deleteFromDB(route.params.item.id, collectionName);
    navigation.goBack();
  }

  function handleDeleteAlert() {
    Alert.alert("Delete", "Are you sure you want to delete this item?", [
      {
        text: "No",
        style: "cancel",
      },
      {
        text: "Yes",
        onPress: handleDelete,
      },
    ]);
  }

  function handleChangeDate(selectedDate) {
    setDate(selectedDate);
    setDateText(selectedDate.toDateString());
  }

  function handleNameChange(selectedName) {
    setName(selectedName);
  }

  function handleDurationChange(selectedDuration) {
    setDuration(selectedDuration);
  }

  function handleSave() {
    updateDB(route.params.item.id, { name, duration, date, isSpecial }, collectionName);
    navigation.goBack();
  }

  function handleSaveAlert() {
    if (name && validDuration.test(duration) && dateText && date) {
      Alert.alert("Important", "Are you sure you want to save these changes?", [
        {
          text: "No",
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: handleSave,
        },
      ]);
    } else {
      Alert.alert("Invalid input", "Please check your input values");
    }
  }

  return (
    <Entry
      type={"activity"}
      title={name}
      amount={duration}
      date={date}
      dateText={dateText}
      changeTitleHandler={handleNameChange}
      changeAmountHandler={handleDurationChange}
      changeDateHandler={handleChangeDate}
      saveHandler={handleSaveAlert}
      showCheckBox={route.params.item.isSpecial}
    />
  );
};

const styles = StyleSheet.create({
  headerButtonDefault: {
    backgroundColor: Colors.headerBackground,
    marginVertical: Spacings.narrowMargin,
    maxWidth: Dimensions.iconSize,
    justifyContent: "flex-end",
  },
  headerButtonPressed: {
    backgroundColor: Colors.headerBackground,
  },
});

export default EditActivity;
