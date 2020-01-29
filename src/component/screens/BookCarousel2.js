import React, { Component } from 'react';
import { SliderBox } from "react-native-image-slider-box";
import { StyleSheet, View, Text, SafeAreaView, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';

export default class BookCarousel2 extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          images: [
            // "https://source.unsplash.com/1024x768/?nature",
            // "https://source.unsplash.com/1024x768/?water",
            // "https://source.unsplash.com/1024x768/?girl",
            // "https://source.unsplash.com/1024x768/?tree", // Network image
            require('../img/bookone-01.jpg'),
            require('../img/bookone-02.jpg'),
            require('../img/bookone-03.jpg'),
            require('../img/bookone-04.jpg'),        
            require('../img/pic4.png'),          
            require('../img/pic5.png'),          
            require('../img/pic6.png'),          
            require('../img/pic7.png'),          
            require('../img/pic8.png'),          
            require('../img/pic9.png'),          
            require('../img/pic10.png'),          
            require('../img/pic11.png'),          
            require('../img/pic12.png'),   
            require('../img/pic14.png'),          
            require('../img/pic15.png'),          
            require('../img/pic16.png'),          
            require('../img/pic17.png'),          
            require('../img/pic18.png'),          
       
          
          ]
        };
      }

    render() {
        return (
        <View style={styles.container}>
          <View styles={styles.slider}>
        <SliderBox
          images={this.state.images}
          sliderBoxHeight={400}
          sliderBoxWidth={200}
          dotColor="white"
          inactiveDotColor="#90A4AE"
          paginationBoxVerticalPadding={20}
          //autoplay
          circleLoop
          resizeMethod={'resize'}
          resizeMode={'cover'}
          paginationBoxStyle={{
            position: "absolute",
            bottom: 0,
            padding: 0,
            alignItems: "center",
            alignSelf: "center",
            justifyContent: "center",
            paddingVertical: 10
          }}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 0,
            padding: 0,
            margin: 0,
            backgroundColor: "rgba(128, 128, 128, 0.92)"
          }}
          ImageComponentStyle={{borderRadius: 15, width: '97%', marginTop: 5}}
          imageLoadingColor="#2196F3"
        />
      </View>
      </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    }
  });
