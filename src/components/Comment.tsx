import React from "react";
import {View, Text, StyleSheet, ViewStyle, StyleProp} from "react-native";
import {IComment} from "../types/types";
import Style from "../style/Light";
import Avatar from "./Avatar";
import moment from "moment";

interface IProps {
  data: IComment;
  style?: StyleProp<ViewStyle>;
}

function Comment({data, style}: IProps) {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.header}>
        <Avatar name={data.user.name} color={data.user.color} width={40} />
        <View style={styles.meta}>
          <Text style={styles.user}>{data.user.name}</Text>
          <Text style={styles.date}>{moment(data.date).format("LL")}</Text>
        </View>
      </View>
      <Text style={styles.text}>{data.text}</Text>
      <Text style={styles.answer}>Ответить</Text>
    </View>
  );
}

export default Comment;

const styles = StyleSheet.create({
  container: {
    // flexDirection: "row",
  },
  header: {
    flexDirection: "row",
  },
  meta: {
    flex: 1,
    marginTop: -2,
  },
  user: {
    ...Style.font_bold,
    fontSize: 15,
  },
  date: {
    ...Style.font,
    fontSize: 11,
    opacity: 0.6,
  },
  text: {
    ...Style.font,
    fontSize: 14,
    marginTop: 5,
  },
  answer: {
    ...Style.font,
    fontSize: 13,
    color: "gray",
    paddingTop: 5,
  },
});
