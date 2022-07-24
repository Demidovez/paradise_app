import React, {useRef, useState} from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Animated,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Style from "../style/Light";
import {IMaterial} from "../types/types";
import moment from "moment";
import * as RootNavigation from "../navigation/rootNavigation";
import {Routes} from "../navigation/routes";
import {useAppSelector} from "../hooks/redux";

interface IProps {
  material: IMaterial;
}

function MaterialCard({material}: IProps) {
  const {id: userId} = useAppSelector(state => state.userReducer);

  const [isLike, setIsLike] = useState(material.likes.includes(userId));

  const [commentsCount] = useState(material.comments.length);
  const [likesCount, setlikesCount] = useState(material.likes.length);

  const scaleAnim = useRef(new Animated.Value(0)).current;

  const handlePressIn = () => {
    Animated.timing(scaleAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const handlePressOut = () => {
    Animated.timing(scaleAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const onSetLike = () => {
    setIsLike(!isLike);
    setlikesCount(isLike ? likesCount - 1 : likesCount + 1);
  };

  const goToCategory = () => {
    RootNavigation.navigate(Routes.Library, {
      screen: Routes.MaterialPage,
      params: {id: material.id},
    });
  };

  return (
    <TouchableWithoutFeedback
      onPress={goToCategory}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}>
      <Animated.View
        style={[
          styles.container,
          {
            transform: [
              {
                scale: scaleAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 1.1],
                }),
              },
            ],
          },
        ]}>
        <View style={styles.wrapper}>
          <Text style={styles.article}>{material.title}</Text>
          <Text style={styles.date}>{moment(material.date).format("LL")}</Text>
          <View style={styles.separator} />
          <View style={styles.content}>
            <Text style={styles.text}>{material.desc}...</Text>
          </View>
        </View>
        <View style={styles.icons}>
          <View style={styles.icon}>
            <Icon name={"comment-o"} color={"#00000055"} size={25} />
            <Text style={styles.icon_count}>{commentsCount}</Text>
          </View>
          <TouchableOpacity style={styles.icon} onPress={onSetLike}>
            <Text style={styles.icon_count}>{likesCount || null}</Text>
            {isLike ? (
              <Icon name={"heart"} color={"#d63031"} size={25} />
            ) : (
              <Icon name={"heart-o"} color={"#00000055"} size={25} />
            )}
          </TouchableOpacity>
        </View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}

export default React.memo(MaterialCard);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 15,
    backgroundColor: "white",
    elevation: 20,
    shadowColor: "#D4D4D4",
  },
  wrapper: {
    padding: 15,
    paddingBottom: 0,
  },
  article: {
    ...Style.font_bold,
    opacity: 0.8,
    fontSize: 16,
  },
  date: {
    ...Style.font,
    fontSize: 12,
    color: "gray",
  },
  separator: {
    borderBottomColor: "#00000011",
    borderWidth: 0,
    borderBottomWidth: 1,
    marginTop: 10,
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
  },
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
