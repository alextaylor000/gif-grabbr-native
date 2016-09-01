/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

class GifGrabbr extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>gif grabbr</Text>
        <TextInput style={styles.input} />
        <View style={styles.gifView} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: 'deepskyblue',
    padding: 15
  },
  title: {
    marginTop: 50,
    marginBottom: 15,
    color: 'white',
    fontSize: 45,
    fontWeight: 'bold'
  },
  input: {
    height: 40,
    backgroundColor: 'white'
  },
  gifView: {
    flex: 3,
    marginTop: 10,
    height: 50,
    backgroundColor: 'gray',
  }
});

AppRegistry.registerComponent('GifGrabbr', () => GifGrabbr);
