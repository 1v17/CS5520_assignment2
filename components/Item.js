import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useContext } from "react";
import Entypo from "@expo/vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";

import { ThemeContext } from "../context/ThemeContext";
import Spacings from "../constants/Spacings";
import Dimensions from "../constants/Dimensions";
import TextSizes from "../constants/TextSizes";
import PressableButton from "./PressableButton";

const Item = ({ item, type }) => {
  const longDuration = 60;
  const largeCalories = 800;

  const { theme } = useContext(ThemeContext);
  const navigation = useNavigation();
  const formattedDate = item.date.toDate().toDateString();
  const showSpecialMark =
    item.isSpecial ||
    (type === "activity" &&
      (item.name === "Running" || item.name === "Weights") &&
      item.duration > longDuration) ||
    (type === "diet" && item.calories > largeCalories);

  function handlePress() {
    if (type === "activity") {
      navigation.navigate("EditActivity", { item });
    } else {
      navigation.navigate("EditDiet", { item });
    }
  }

  return (
    <View key={item.id}>
      <PressableButton
        pressHandler={handlePress}
        componentStyle={[
          styles.container,
          { backgroundColor: theme.foregroundColor },
        ]}
        pressedStyle={{ backgroundColor: theme.foregroundColor }}
      >
        <Text style={[styles.label, { color: theme.backgroundColor }]}>
          {type === "activity" ? item.name : item.description}
        </Text>
        <View style={styles.rightView}>
          {showSpecialMark && (
            <Entypo
              name="warning"
              size={Dimensions.iconSize}
              color={theme.backgroundColor}
            />
          )}
          <View
            style={[styles.textBox, { backgroundColor: theme.backgroundColor }]}
          >
            <Text style={[styles.text, { color: theme.primaryColor }]}>
              {formattedDate}
            </Text>
          </View>
          <View
            style={[styles.textBox, { backgroundColor: theme.backgroundColor }]}
          >
            <Text style={[styles.text, { color: theme.primaryColor }]}>
              {type === "activity" ? item.duration + " min" : item.calories}
            </Text>
          </View>
        </View>
      </PressableButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: Spacings.narrowMargin,
    paddingVertical: Spacings.narrowPadding,
    paddingHorizontal: Spacings.mediumPadding,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    borderRadius: Dimensions.largeBorderRadius,
  },
  rightView: {
    flexDirection: "row",
    gap: Spacings.narrowGap,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: TextSizes.medium,
    paddingVertical: Spacings.narrowPadding,
    fontWeight: "bold",
  },
  textBox: {
    borderRadius: Dimensions.smallBorderRadius,
    justifyContent: "center",
    alignContent: "center",
  },
  text: {
    fontSize: TextSizes.small,
    paddingVertical: Spacings.extraNarrowPadding,
    paddingHorizontal: Spacings.narrowPadding,
  },
});

export default Item;
