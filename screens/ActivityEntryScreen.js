import { Alert } from "react-native";
import React from "react";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { writeToDB } from "../firebase/FirebaseHelper";
import Entry from "../components/Entry";

const ActivityEntryScreen = () => {
  const longDuration = 60;
  const validDuration = /^[1-9]\d*$/; // positive integers without leading zeros
  const navigation = useNavigation();
  const collectionName = "activityItems";
  const [name, setName] = useState(null);
  const [duration, setDuration] = useState("");
  const [date, setDate] = useState(new Date()); // current date
  const [dateText, setDateText] = useState("");

  function handleSave() {
    if (name && validDuration.test(duration) && dateText && date) {
      const isSpecial =
        (name === "Running" || name === "Weights") &&
        Number(duration) > longDuration;
      writeToDB({ name, duration, date, isSpecial }, collectionName);
      navigation.goBack();
    } else {
      Alert.alert("Invalid input", "Please check your input values");
    }
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
      saveHandler={handleSave}
    />
  );
};

export default ActivityEntryScreen;
