import React, { Component } from 'react';
import { SliderBox } from "react-native-image-slider-box";
import { StyleSheet, View, Text, SafeAreaView, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';

export default class BookCarousel3 extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          images: [
            // "https://source.unsplash.com/1024x768/?nature",
            // "https://source.unsplash.com/1024x768/?water",
            // "https://source.unsplash.com/1024x768/?girl",
            // "https://source.unsplash.com/1024x768/?tree", // Network image
            require('../book3/0001.jpg'),
            require('../book3/0002.jpg'),
            require('../book3/0003.jpg'),
            require('../book3/0004.jpg'),
            require('../book3/0005.jpg'),
            require('../book3/0006.jpg'),
            require('../book3/0007.jpg'),
            require('../book3/0008.jpg'),
            require('../book3/0009.jpg'),
            require('../book3/0010.jpg'),
            require('../book3/0011.jpg'),
            require('../book3/0012.jpg'),
            require('../book3/0013.jpg'),
            require('../book3/0014.jpg'),
            require('../book3/0015.jpg'),
            require('../book3/0016.jpg'),
            require('../book3/0017.jpg'),
            require('../book3/0018.jpg'),
            require('../book3/0019.jpg'),
            require('../book3/0020.jpg'),
            require('../book3/0021.jpg'),
            require('../book3/0022.jpg'),
            require('../book3/0023.jpg'),
            require('../book3/0024.jpg'),
            require('../book3/0025.jpg'),
            require('../book3/0026.jpg'),
            require('../book3/0027.jpg'),
            require('../book3/0028.jpg'),
            require('../book3/0029.jpg'),
            require('../book3/0030.jpg'),
            require('../book3/0031.jpg'),
            require('../book3/0032.jpg'),
            require('../book3/0033.jpg'),
            require('../book3/0034.jpg'),
            require('../book3/0035.jpg'),
            require('../book3/0036.jpg'),
            require('../book3/0037.jpg'),
            require('../book3/0038.jpg'),
            require('../book3/0039.jpg'),
            require('../book3/0040.jpg'),
            require('../book3/0041.jpg'),
            require('../book3/0042.jpg'),
            require('../book3/0043.jpg'),
            require('../book3/0044.jpg'),
            require('../book3/0045.jpg'),
            require('../book3/0046.jpg'),
            require('../book3/0047.jpg'),
            require('../book3/0048.jpg'),
            require('../book3/0049.jpg'),
            require('../book3/0050.jpg'),
            require('../book3/0051.jpg'),
            require('../book3/0052.jpg'),      
       
          
          ]
        };
      }

    render() {
        return (
        <View style={styles.container}>
          <View styles={styles.slider}>
        <SliderBox
          images={this.state.images}
          sliderBoxHeight={600}
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
