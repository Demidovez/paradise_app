import React, {useState} from "react";
import {StyleSheet, View, Text, StatusBar} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import UserContentTabs from "../components/UserContentTabs";
import Style from "../style/Light";
import Emoji from "react-native-emoji";
import Avatar from "../components/Avatar";

function User() {
  const [avatarColor] = useState("#D95DE944");

  const [fullname] = useState("Демидовец Николай Михайлович");

  return (
    <View style={styles.container}>
      <View style={styles.account}>
        <Avatar name={fullname} color={avatarColor} />
        <View style={styles.profile}>
          <Text style={styles.name}>{fullname}</Text>
          <Text style={styles.email}>nikolaydemidovez@gmail.com</Text>
          <Text style={styles.status}>Членство оформлено</Text>

          <View style={styles.controls}>
            <Icon
              name={"edit"}
              color={"black"}
              size={30}
              style={styles.control}
            />
            <Icon
              name={"gear"}
              color={"black"}
              size={30}
              style={styles.control}
            />
            <Icon
              name={"sign-out"}
              color={"black"}
              size={30}
              style={styles.control}
            />
          </View>
        </View>
      </View>
      <View style={styles.subscribe}>
        <Emoji name="trophy" style={{fontSize: 25}} />
        <Text style={styles.label_subscribe}>Членство в клубе</Text>
      </View>
      <UserContentTabs />
    </View>
  );
}

export default React.memo(User);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f3f5DD",
    paddingTop: StatusBar.currentHeight || 0,
  },
  account: {
    marginTop: 10,
    marginStart: 20,
    marginEnd: 20,
    marginBottom: 10,
    flexDirection: "row",
  },
  user: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    width: 120,
    height: 120,
    borderRadius: 300,
    alignItems: "center",
    justifyContent: "center",
    marginEnd: 20,
  },
  name_avatar: {
    ...Style.font_bold,
    fontSize: 40,
    color: "white",
  },
  profile: {width: 0, flexGrow: 1},
  name: {
    ...Style.font_bold,
    fontSize: 16,
  },
  email: {
    ...Style.font,
    fontSize: 13,
    marginTop: 5,
    opacity: 0.6,
  },
  status: {
    ...Style.font,
    fontSize: 12,
    marginTop: 5,
    opacity: 1,
    color: "#1FBE91",
  },
  controls: {flexDirection: "row", marginStart: -15},
  control: {
    padding: 15,
  },
  subscribe: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    marginStart: 20,
    marginEnd: 20,
    borderRadius: 20,
    padding: 10,
    elevation: 20,
    shadowColor: "#D4D4D4",
  },
  label_subscribe: {
    ...Style.font_bold,
    fontSize: 20,
    paddingStart: 10,
  },
});
