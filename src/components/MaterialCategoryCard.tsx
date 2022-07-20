import React, {useRef} from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import {IMaterialCategory} from "../types/types";
import Style from "../style/Light";

interface IProps {
  category: IMaterialCategory;
  onPress: (category: IMaterialCategory) => void;
}

function MaterialCategoryCard({category, onPress}: IProps) {
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

  return (
    <TouchableWithoutFeedback
      onPress={() => onPress(category)}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}>
      <View style={styles.material_card}>
        <View
          style={[styles.background_card, {backgroundColor: category.color}]}>
          <Animated.View
            style={{
              transform: [
                {
                  scale: scaleAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 1.7],
                  }),
                },
              ],
            }}>
            <Text style={styles.icon}>{category.icon}</Text>
          </Animated.View>
        </View>
        <Text style={styles.title}>{category.title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default MaterialCategoryCard;

const styles = StyleSheet.create({
  material_card: {
    marginTop: 20,
    width: "33.3%",
  },
  background_card: {
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    marginStart: 10,
    marginEnd: 10,
    borderRadius: 15,
  },
  title: {
    ...Style.font_bold,
    fontSize: 14,
    paddingTop: 5,
    textAlign: "center",
  },
  icon: {
    fontSize: 30,
    color: "#000000",
  },
});
