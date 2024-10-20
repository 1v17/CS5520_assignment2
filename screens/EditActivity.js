import { Alert } from "react-native";
import { useState } from "react";
import React from "react";

import { updateDB } from "../firebase/FirebaseHelper";
import ActivityEntry from "../components/ActivityEntry";

const EditActivity = ({ navigation, route }) => {

  const validDuration = /^[1-9]\d*$/; // positive integers without leading zeros
  const collectionName = "activityItems";
  const [name, setName] = useState(route.params.item.name);
  const [duration, setDuration] = useState(route.params.item.duration);
  const [date, setDate] = useState(route.params.item.date);
  const [dateText, setDateText] = useState(
    route.params.item.date.toDate().toDateString()
  );

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
    updateDB(route.params.item.id, { name, duration, date }, collectionName);
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
    <ActivityEntry
      name={name}
      duration={duration}
      date={date}
      dateText={dateText}
      changeNameHandler={handleNameChange}
      changeDurationHandler={handleDurationChange}
      changeDateHandler={handleChangeDate}
      saveHandler={handleSaveAlert}
    />
  );
};

export default EditActivity;
