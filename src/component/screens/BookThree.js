import React, { Component } from 'react';
import { View } from 'react-native'
import PDFReader from 'rn-pdf-reader-js'

export default class BookThree extends Component {
  render() {
    return (
      <PDFReader
        source={{
          uri: 'http://gahp.net/wp-content/uploads/2017/09/sample.pdf',
          // uri: 'file://bookone.pdf'
        }}
      />
    )
  }
}