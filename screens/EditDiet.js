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

const EditDiet = ({ navigation, route }) => {
  const validCalories = /^[1-9]\d*$/; // positive integers without leading zeros
  const collectionName = "dietItems";
  const [description, setDescription] = useState(route.params.item.description);
  const [calories, setCalories] = useState(route.params.item.calories);
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

  function handleDescriptionChange(selectedDescription) {
    setDescription(selectedDescription);
  }

  function handleCaloriesChange(selectedCalories) {
    setCalories(selectedCalories);
  }

  function handleSave() {
    updateDB(
      route.params.item.id,
      { description, calories, date },
      collectionName
    );
    navigation.goBack();
  }

  function handleSaveAlert() {
    if (description && validCalories.test(calories) && dateText && date) {
      Alert.alert("Important", "Are you sure you want to save changes?", [
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
      type={"diet"}
      title={description}
      amount={calories}
      date={date}
      dateText={dateText}
      changeTitleHandler={handleDescriptionChange}
      changeAmountHandler={handleCaloriesChange}
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

export default EditDiet;
