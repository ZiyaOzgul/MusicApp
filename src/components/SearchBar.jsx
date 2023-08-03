import { Dimensions, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { changeFilter } from "../redux/musicSlice/musicSlice";

const { width, height } = Dimensions.get("window");

const SearchBar = () => {
  const dispatch = useDispatch();
  return (
    <View style={styles.textView}>
      <TextInput
        placeholder="Search ..."
        style={styles.input}
        onChangeText={(e) => dispatch(changeFilter(e))}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  textView: {
    width: width * 0.98,
    height: height * 0.05,
    marginTop: 5,
  },
  input: {
    width: "100%",
    height: "100%",
    backgroundColor: "lightgray",
    borderRadius: 10,
    textAlign: "center",
  },
});
