import React, { Component } from 'react';
import { StyleSheet, View, Text, SafeAreaView, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';

export default class BookCarousel extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            carouselItems: [
            {
                title:"Item 1",
                image={require('./img/flower.jpeg')}
            },
            {
                title:"Item 2"
            },
            {
                title:"Item 3"
            },
            {
                title:"Item 4"
            },
            {
                title:"Item 5"
            }
        ]}
    }

    _renderItem({item,index}){
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}> 
                <Text style={{color:'#fff'}} >{item.title}</Text>
            </View>
        )
    }

    render() {
        return (
        <SafeAreaView style={styles.container}>

            <Carousel
                    data={this.state.carouselItems}
                    sliderWidth={250}
                    itemWidth={250}
                    renderItem={this._renderItem}
                />

        </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#131420',
    alignItems: 'center',
    justifyContent: 'center',
  },
});