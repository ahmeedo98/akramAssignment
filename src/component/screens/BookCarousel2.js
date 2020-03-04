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
            require('../book2/0001.jpg'),
            require('../book2/0002.jpg'),
            require('../book2/0003.jpg'),
            require('../book2/0004.jpg'),
            require('../book2/0005.jpg'),
            require('../book2/0006.jpg'),
            require('../book2/0007.jpg'),
            require('../book2/0008.jpg'),
            require('../book2/0009.jpg'),
            require('../book2/0010.jpg'),
            require('../book2/0011.jpg'),
            require('../book2/0012.jpg'),
            require('../book2/0013.jpg'),
            require('../book2/0014.jpg'),
            require('../book2/0015.jpg'),
            require('../book2/0016.jpg'),
            require('../book2/0017.jpg'),
            require('../book2/0018.jpg'),
            require('../book2/0019.jpg'),
            require('../book2/0020.jpg'),
            require('../book2/0021.jpg'),
            require('../book2/0022.jpg'),
            require('../book2/0023.jpg'),
            require('../book2/0024.jpg'),
            require('../book2/0025.jpg'),
            require('../book2/0026.jpg'),
            require('../book2/0027.jpg'),
            require('../book2/0028.jpg'),
            require('../book2/0029.jpg'),
            require('../book2/0030.jpg'),
            require('../book2/0031.jpg'),
            require('../book2/0032.jpg'),
            require('../book2/0033.jpg'),
            require('../book2/0034.jpg'),
            require('../book2/0035.jpg'),
            require('../book2/0036.jpg'),
            require('../book2/0037.jpg'),
            require('../book2/0038.jpg'),
            require('../book2/0039.jpg'),
            require('../book2/0040.jpg'),
            require('../book2/0041.jpg'),
            require('../book2/0042.jpg'),
            require('../book2/0043.jpg'),
            require('../book2/0044.jpg'),
            require('../book2/0045.jpg'),
            require('../book2/0046.jpg'),
            require('../book2/0047.jpg'),
            require('../book2/0048.jpg'),        
          
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
