import { View, StyleSheet, Text } from "react-native";
import React from "react";
import { useContext } from "react";
import { useNavigation } from "@react-navigation/native";

import { ThemeContext } from "../context/ThemeContext";
import Spacings from "../constants/Spacings";
import Dimensions from "../constants/Dimensions";
import TextSizes from "../constants/TextSizes";
import PressableButton from "./PressableButton";

const ButtonPair = ({ saveHandler }) => {
  const { theme } = useContext(ThemeContext);
  const navigation = useNavigation();

  function handleCancel() {
    navigation.goBack();
  }

  return (
    <View style={styles.buttonWrapper}>
      <PressableButton
        pressHandler={handleCancel}
        componentStyle={styles.buttonStyle}
      >
        <Text style={[styles.buttonText, { color: theme.backgroundColor }]}>
          Cancel
        </Text>
      </PressableButton>
      <PressableButton
        pressHandler={saveHandler}
        componentStyle={styles.buttonStyle}
      >
        <Text style={[styles.buttonText, { color: theme.backgroundColor }]}>
          Save
        </Text>
      </PressableButton>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    marginVertical: Spacings.mediumMargin,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: Spacings.wideGap,
    width: Dimensions.buttonWidth,
    height: Dimensions.buttonHeight,
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: TextSizes.large,
  },
  buttonStyle: {
    padding: Spacings.mediumPadding,
  },
});

export default ButtonPair;
