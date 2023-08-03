import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import SearchBar from "./SearchBar";
import { useNavigation } from "@react-navigation/native";
const { width, height } = Dimensions.get("window");

const Cards = ({ music }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("MusicPage", { item: music })}
    >
      <View style={styles.card}>
        <Image source={{ uri: music.imageUrl }} style={styles.musicImage} />
        <View style={styles.textView}>
          <Text style={styles.title}>{music.title}</Text>
          <View style={styles.textCard}>
            <Text style={styles.artist}>{music.artist}</Text>
            <Text style={styles.year}>{music.year}</Text>
            {music.isSoldOut ? (
              <View style={styles.soldCard}>
                <Text style={styles.sold}>Tükendi</Text>
              </View>
            ) : null}
          </View>
          <View style={styles.albumCard}>
            <Text style={styles.albumName}>Albüm : {music.album}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Cards;

const styles = StyleSheet.create({
  card: {
    width: width,
    height: height * 0.2,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
    marginBottom: 5,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  musicImage: {
    height: "75%",
    flex: 1,
    borderRadius: 999,
    marginLeft: 5,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "center",
  },
  textView: {
    flex: 2,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
    marginLeft: 5,
  },

  textCard: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "start",
  },
  artist: {
    fontSize: 18,
    marginLeft: 5,
  },
  year: {
    fontSize: 16,
    marginLeft: 8,
    fontWeight: "500",
  },
  soldCard: {
    marginTop: 5,
    marginLeft: 8,
    width: 80,
    borderColor: "red",
    borderWidth: 0.5,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    height: 34,
  },
  sold: {
    fontSize: 18,
    color: "red",
  },
  albumCard: {
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "start",
    marginTop: 4,
  },
  albumName: {
    fontSize: 18,
    textAlign: "center",
  },
});
