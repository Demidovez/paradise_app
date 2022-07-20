import React from "react";
import {StyleSheet, Text, View} from "react-native";
import Style from "../style/Light";

interface IProps {
  name: string;
  color: string;
  width?: number;
}

function Avatar({name, color, width}: IProps) {
  return (
    <View
      style={[
        styles.user,
        {backgroundColor: color, width: width || 120, height: width || 120},
      ]}>
      <Text style={[styles.name_avatar, {fontSize: width ? width * 0.3 : 40}]}>
        {name
          .split(" ")
          .map(part => part[0])
          .slice(0, 2)}
      </Text>
    </View>
  );
}

export default Avatar;

const styles = StyleSheet.create({
  user: {
    backgroundColor: "#FFFFFF",
    borderRadius: 300,
    alignItems: "center",
    justifyContent: "center",
    marginEnd: 10,
  },
  name_avatar: {
    ...Style.font_bold,
    color: "white",
  },
});
