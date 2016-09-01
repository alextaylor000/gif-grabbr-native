import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

function GifDisplay({ gif }) {
  console.log('GifDisplay, new props', gif)
  const url = gif.image_url.replace('http:', 'https:');
  return (
    <Image
      source={{ uri: url }}
      resizeMode='cover'
      style={{ flex: 1 }}
    />
  )
}


export default GifDisplay
