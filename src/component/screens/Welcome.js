import React, { Component } from "react";
import {
  View,
  Animated,
  Text,
  Button,
  Image,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import Map from "../layout/Map";
import MapCards from "../layout/MapCards";
import styles from "../../../styles/homestyle";

export default class Welcome extends Component {
  render() {
    return (
      <View
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        {/* <Image source={require(background)} style={styles.backgroundImage} /> */}
        <Image
          style={styles.backgroundImage}
          source={require("../img/empty-bookshelf.jpg")}
        />

        <View style={styles.bookshelf}>
        
          <TouchableOpacity
            style={styles.book1}
            onPress={() => this.props.navigation.navigate("BookCarousel")}
          >
            <Text style={styles.bookText}> The M25 </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.book2}
            onPress={() => this.props.navigation.navigate("BookCarousel2")}
          >
            <Text style={styles.bookText}> Visual Control Room </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.book3}
            onPress={() => this.props.navigation.navigate("BookCarousel3")}
          >
            <Text style={styles.bookText}> Eleven  Windsocks for Brunel </Text>
          </TouchableOpacity>

        </View>

          <TouchableOpacity
            style={styles.bookButton}
            onPress={() => this.props.navigation.navigate("Home")}
            >
            <Text> Go to Map </Text>
          </TouchableOpacity>
        
      </View>
    );
  }
}
