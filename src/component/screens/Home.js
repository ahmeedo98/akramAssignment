import React, { Component } from 'react';
import { View, Animated } from 'react-native';
import { Button } from 'native-base';
import Map from '../layout/Map';
import MapCards from '../layout/MapCards';
import styles from '../../../styles/homestyle';

export default class Home extends Component {
  state = {
    userLatitude: null,
    userLongitude: null,
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          userLatitude: position.coords.latitude,
          userLongitude: position.coords.longitude,
        });
      },
      error => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 200000, maximumAge: 1000 }
    );

    this.index = 0;
    this.animation = new Animated.Value(0);
  }

  setRef = ref => {
    this._map = ref;
  };

  render() {
    const { error, userLatitude, userLongitude, animation, index } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <MapCards animation={animation} index={index} />
          {userLatitude && userLongitude && (
            <Map
              userLatitude={userLatitude}
              userLongitude={userLongitude}
              setRef={this.setRef}
              navigation={this.props.navigation}
            />
          )}
        </View>
      </View>
    );
  }
}
