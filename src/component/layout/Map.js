import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { Image, Animated, View, TouchableOpacity, Button } from 'react-native';
// import mapstyle from '../../../styles/mapstyles';
import { withNavigation } from 'react-navigation';
import styles from '../../../styles/homestyle';
import CalloutView from './CalloutView';

const Map = ({ userLatitude, userLongitude, setRef, navigation }) => (
  // const Images = [
  //    { uri: 'https://i.imgur.com/sNam9iJ.jpg' },
  //    { uri: 'https://i.imgur.com/N7rlQYt.jpg' },
  //    { uri: 'https://i.imgur.com/UDrH0wm.jpg' },
  //    { uri: 'https://i.imgur.com/Ka8kNST.jpg' },
  // ];
  // const markers = [
  //   {
  //     coordinate: {
  //       latitude: 45.524548,
  //       longitude: -122.6749817,
  //     },
  //     title: 'Best Place',
  //     description: 'This is the best place in Portland',
  //     image: Images[0],
  //   },
  //   {
  //     coordinate: {
  //       latitude: 45.524698,
  //       longitude: -122.6655507,
  //     },
  //     title: 'Second Best Place',
  //     description: 'This is the second best place in Portland',
  //     image: Images[1],
  //   },
  //   {
  //     coordinate: {
  //       latitude: 45.5230786,
  //       longitude: -122.6701034,
  //     },
  //     title: 'Third Best Place',
  //     description: 'This is the third best place in Portland',
  //     image: Images[2],
  //   },
  //   {
  //     coordinate: {
  //       latitude: 45.521016,
  //       longitude: -122.6561917,
  //     },
  //     title: 'Fourth Best Place',
  //     description: 'This is the fourth best place in Portland',
  //     image: Images[3],
  //   },
  // ];
  // const region = {
  //   latitude: 45.52220671242907,
  //   longitude: -122.6653281029795,
  //   latitudeDelta: 0.04864195044303443,
  //   longitudeDelta: 0.040142817690068,
  // };

  <MapView
    ref={setRef}
    provider={MapView.PROVIDER_GOOGLE}
    style={styles.map}
    showsMyLocationButton
    enablePoweredByContainer={false}
    initialRegion={{
      latitude: 51.544755,
      longitude: -0.456295,
      latitudeDelta: 0.04864195044303443,
      longitudeDelta: 0.040142817690068,
    }}
    // customMapStyle={mapstyle}
    showsUserLocation
  >
    <Marker
      coordinate={{
        latitude: 51.544219,
        longitude: -0.468209,
      }}
      title="Best Place"
      description="This is the best place in Portland"
      // image={require('./img/flower.jpeg')}
      // onPress={() => {
      //   alert('You tapped the button!');
      // }}
    >
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Welcome')} title="Welcome" />
      <Animated.View style={[styles.markerWrap]}>
        <Animated.View style={[styles.ring]} />
        <View style={styles.marker} />
      </Animated.View>
    </Marker>
    <Marker
      coordinate={{
        latitude: 51.538781,
        longitude: -0.462538,
      }}
      title="Second Best Place"
      description="This is the second best place in Portland"
    >
      <Animated.View style={[styles.markerWrap]}>
        <Animated.View style={[styles.ring]} />
        <View style={styles.marker} />
      </Animated.View>
    </Marker>
    <Marker
      coordinate={{
        latitude: 51.540623,
        longitude: -0.435523,
      }}
      title="Third Best Place"
      description="This is the third best place in Portland"
    >
      <Animated.View style={[styles.markerWrap]}>
        <Animated.View style={[styles.ring]} />
        <View style={styles.marker} />
      </Animated.View>
    </Marker>
    <Marker
      coordinate={{
        latitude: 51.546477,
        longitude: -0.500046,
      }}
      title="Fourth Best Place"
      description="This is the fourth best place in Portland"
    >
      <Animated.View style={[styles.markerWrap]}>
        <Animated.View style={[styles.ring]} />
        <View style={styles.marker} />
      </Animated.View>
    </Marker>
  </MapView>
);
export default Map;
