import React, {useState} from "react";
import {StyleSheet, View, Text, TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Style from "../style/Light";

interface IProps {
  comments: number;
  likes: number;
}

function CounterLikesAndComments({comments, likes}: IProps) {
  const [isLike, setIsLike] = useState(false);

  const [commentsCount] = useState(comments);
  const [likesCount, setlikesCount] = useState(likes);

  const onSetLike = () => {
    setIsLike(!isLike);
    setlikesCount(isLike ? likesCount - 1 : likesCount + 1);
  };

  return (
    <View style={styles.icons}>
      <View style={styles.icon}>
        <Icon name={"comment-o"} color={"#00000055"} size={25} />
        <Text style={styles.icon_count}>{commentsCount}</Text>
      </View>
      <TouchableOpacity style={styles.icon} onPress={onSetLike}>
        <Text style={styles.icon_count}>{likesCount}</Text>
        {isLike ? (
          <Icon name={"heart"} color={"#d63031"} size={25} />
        ) : (
          <Icon name={"heart-o"} color={"#00000055"} size={25} />
        )}
      </TouchableOpacity>
    </View>
  );
}

export default CounterLikesAndComments;

const styles = StyleSheet.create({
  icons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    padding: 20,
    paddingBottom: 15,
    paddingTop: 15,
  },
  icon_count: {
    ...Style.font,
    fontSize: 12,
    color: "gray",
    marginStart: 10,
    marginEnd: 10,
  },
});
