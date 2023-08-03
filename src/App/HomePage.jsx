import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import SearchBar from "../components/SearchBar";
import Cards from "../components/Cards";

const HomePage = () => {
  const allMusics = useSelector((state) => state.musics.music);
  const filter = useSelector((state) => state.musics.filterVal);

  const filtered = allMusics.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(filter.toLowerCase())
    );
  });

  return (
    <SafeAreaView style={styles.page}>
      <SearchBar />
      <FlatList
        data={filtered}
        renderItem={(music) => <Cards music={music.item} />}
        keyExtractor={(music) => music.id}
      />
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: StatusBar.currentHeight || 0,
  },
});
