import React, { Component } from 'react';
import { View, Animated, Text, Button, Image, ImageBackground } from 'react-native';
import Map from '../layout/Map';
import MapCards from '../layout/MapCards';
import styles from '../../../styles/homestyle';


export default class Welcome extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* <Image source={require(background)} style={styles.backgroundImage} /> */}
        <Image
          style={styles.backgroundImage}
          source={require('../img/bookshelf.jpg')}
        />
        
        <View style={styles.bookshelf}>
          <Button 
          title="Open Book 1" onPress={() => this.props.navigation.navigate('BookCarousel2')}
          style={styles.mapButton}
          /><Button 
          title="Open Book 2" onPress={() => this.props.navigation.navigate('BookTwo')}
          style={styles.mapButton}
          /><Button 
          title="Open Book 3" onPress={() => this.props.navigation.navigate('BookThree')}
          style={styles.mapButton}
          />
        </View>

        <Button 
        title="Go to Map" onPress={() => this.props.navigation.navigate('Home')}
        style={styles.mapButton}
        />
      </View>

    );
  }
}
