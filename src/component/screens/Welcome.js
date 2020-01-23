import React, { Component } from 'react';
import { View, Animated, Text } from 'react-native';
import Map from '../layout/Map';
import MapCards from '../layout/MapCards';
import styles from '../../../styles/homestyle';

export default class Welcome extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Hello, world!</Text>
      </View>
    );
  }
}
