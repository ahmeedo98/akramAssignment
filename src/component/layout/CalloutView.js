import React, { Component } from 'react';
import { View, Animated, Image, Text, TouchableOpacity } from 'react-native';
import '../../../global';
import styles from '../../../styles/homestyle';

const CalloutView = () => (
  <View>
    <View>
      <Text
        style={{
          fontWeight: 'bold',
        }}
      >
        Test
      </Text>
    </View>
    <View>
      <Image source={{ uri: 'https://facebook.github.io/react/logo-og.png' }} style={{ width: 100, height: 100 }} />
    </View>
  </View>
);

export default CalloutView;
