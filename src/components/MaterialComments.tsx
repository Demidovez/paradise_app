import React, {useEffect, useState} from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import Style from "../style/Light";
import {IComment} from "../types/types";
import Comment from "./Comment";

function MaterialComments() {
  const [comments, setComments] = useState<IComment[]>([]);

  const [textComment, setTextComment] = useState("");

  useEffect(() => {
    const comments: IComment[] = [
      {
        id: 0,
        article: "",
        date: new Date(),
        text: "Очень крутая статья! Спасибо Вам огромное!!!",
        user: {
          id: 0,
          name: "Екатерина Пирагова",
          color: "#a4b0dd",
        },
      },
      {
        id: 1,
        article: "",
        date: new Date(),
        text: "Немного не поняла пункт про ИП",
        user: {
          id: 0,
          name: "Иван Пушкин",
          color: "#daae8c",
        },
      },
      {
        id: 2,
        article: "",
        date: new Date(),
        text: "Тема очень интересная и сложная, согласна с вами, не все так однозначно, особенно учитывая прошлый отчетный период",
        user: {
          id: 0,
          name: "Ирина Петрова",
          color: "#c0d28e",
        },
      },
    ];

    setComments(comments);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <TextInput
          placeholder="Оставить комментарий..."
          numberOfLines={1}
          multiline
          style={styles.textarea}
          value={textComment}
          onChangeText={setTextComment}
        />
      </View>
      {textComment ? (
        <TouchableWithoutFeedback onPress={() => {}}>
          <View style={styles.submit}>
            <Text style={styles.submit_label}>Отправить</Text>
          </View>
        </TouchableWithoutFeedback>
      ) : null}
      <Text style={styles.label}>Комментарии: </Text>
      <View style={styles.comments}>
        {comments.map(comment => (
          <Comment data={comment} key={comment.id} style={styles.comment} />
        ))}
      </View>
    </View>
  );
}

export default React.memo(MaterialComments);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 0,
  },
  label: {
    ...Style.font_bold,
    fontSize: 18,
    marginTop: 5,
    marginBottom: 15,
  },
  wrapper: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
  },
  textarea: {
    ...Style.font,
    fontSize: 15,
    backgroundColor: "#f4f4f4DD",
    flex: 1,
    borderRadius: 10,
    padding: 10,
  },
  submit: {
    borderRadius: 100,
    backgroundColor: "black",
    paddingStart: 20,
    paddingEnd: 20,
    paddingTop: 10,
    paddingBottom: 10,
    alignSelf: "flex-end",
  },
  submit_label: {
    ...Style.font_bold,
    fontSize: 15,
    color: "white",
  },
  comments: {
    // backgroundColor: "red",
  },
  comment: {
    marginBottom: 25,
  },
});
