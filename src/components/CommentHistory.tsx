import React, {useCallback, useEffect, useState} from "react";
import {StyleSheet, View, Text, StatusBar, ScrollView} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import Style from "../style/Light";
import {IComment} from "../types/types";
import moment from "moment";
import Emoji from "react-native-emoji";

interface IProps {
  comment: IComment;
}

function CommentHistory({comment}: IProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.article}>{comment.article}</Text>
      <Text style={styles.date}>{moment(comment.date).format("LL")}</Text>
      <View style={styles.content}>
        <View>
          <Icon name="chevrons-left" size={20} color="#00000044" />
        </View>
        <Text style={styles.text}>{comment.text}</Text>
        <View style={styles.quote_end}>
          <Icon name="chevrons-right" size={20} color="#00000044" />
        </View>
      </View>
    </View>
  );
}

export default React.memo(CommentHistory);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 15,
    padding: 15,
    backgroundColor: "white",
    elevation: 20,
    shadowColor: "#D4D4D4",
  },
  article: {
    ...Style.font_bold,
    opacity: 0.8,
  },
  date: {
    ...Style.font,
    fontSize: 12,
    color: "gray",
  },
  content: {
    flexDirection: "row",
    paddingTop: 10,
  },
  text: {
    ...Style.font,
    fontSize: 14,
    width: 0,
    flexGrow: 1,
    paddingStart: 5,
    paddingEnd: 5,
  },
  quote_end: {
    flexDirection: "column",
    justifyContent: "flex-end",
  },
});
