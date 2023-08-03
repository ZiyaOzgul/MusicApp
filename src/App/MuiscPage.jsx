import {
  Dimensions,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

const { width, height } = Dimensions.get("screen");
const MuiscPage = ({ route }) => {
  const { item } = route.params;
  return (
    <SafeAreaView style={styles.page}>
      <Text style={styles.title}>{item.title} </Text>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <Text style={styles.album}>Albüm İsmi : {item.album}</Text>
      <View style={styles.card}>
        <Text style={styles.artist}> {item.artist}</Text>
        <Text style={styles.year}> Yapım Yılı: {item.year} </Text>
      </View>
    </SafeAreaView>
  );
};

export default MuiscPage;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: StatusBar.currentHeight || 0,
  },
  title: {
    marginTop: 5,
    fontSize: 36,
    fontWeight: "600",
  },
  image: {
    width: width,
    height: height * 0.4,
    borderRadius: 20,
    marginTop: 10,
    resizeMode: "cover",
  },
  album: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: "500",
  },
  card: {
    marginTop: 20,
    width: width,
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
  },
  artist: {
    fontSize: 24,
    fontWeight: "500",
  },
  year: {
    fontSize: 24,
    fontWeight: "600",
  },
});
