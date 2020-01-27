import React, { Component } from 'react';
import { View, Animated, Image, Text, TouchableOpacity } from 'react-native';
import '../../../global';
import styles from '../../../styles/homestyle';

const MapCards = animation => (
  <Animated.ScrollView
    horizontal
    scrollEventThrottle={1}
    showsHorizontalScrollIndicator={false}
    snapToInterval={styles.CARD_WIDTH}
    onScroll={Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: animation,
            },
          },
        },
      ],
      { useNativeDriver: true }
    )}
    style={styles.scrollView}
    contentContainerStyle={styles.endPadding}
  >
    <View style={styles.card}>
      <Image source={require('../img/pic1.png') } style={styles.cardImage} resizeMode="cover" />
      <View style={styles.textContent}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Welcome')} title="Welcome" />
        <Text numberOfLines={1} style={styles.cardtitle}>
          Best Place
        </Text>
        <Text numberOfLines={1} style={styles.cardDescription}>
          This is the Best Place
        </Text>
      </View>
    </View>
    <View style={styles.card}>
    <Image source={require('../img/pic2.png') } style={styles.cardImage} resizeMode="cover" />
      <View style={styles.textContent}>
        <Text numberOfLines={1} style={styles.cardtitle}>
          Second Best Place
        </Text>
        <Text numberOfLines={1} style={styles.cardDescription}>
          This is the Second Best Place
        </Text>
      </View>
    </View>
    <View style={styles.card}>
    <Image source={require('../img/pic3.png') } style={styles.cardImage} resizeMode="cover" />
      <View style={styles.textContent}>
        <Text numberOfLines={1} style={styles.cardtitle}>
          Third Best Place
        </Text>
        <Text numberOfLines={1} style={styles.cardDescription}>
          This is the Third Best Place
        </Text>
      </View>
    </View>
    <View style={styles.card}>
    <Image source={require('../img/pic4.png') } style={styles.cardImage} resizeMode="cover" />
      <View style={styles.textContent}>
        <Text numberOfLines={1} style={styles.cardtitle}>
          Third Best Place
        </Text>
        <Text numberOfLines={1} style={styles.cardDescription}>
          This is the Third Best Place
        </Text>
      </View>
    </View>
  </Animated.ScrollView>
);

export default MapCards;
