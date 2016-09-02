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
  TouchableHighlight,
  Image,
  View
} from 'react-native';
import GifDisplay from './components/gif_display';
import Spinner from './components/spinner';
import Initial from './components/initial';
import getGif from './utils/get_gif';

class GifGrabbr extends Component {
  constructor() {
    super()
    this.state = {
      initial: true,
      loading: true,
      query: '',
      gif: {}
    }

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch() {
    this.setState({ initial: false, loading: true });
    getGif(this.state.query)
      .then((response) => this.setState({ loading: false, gif: response.data }))
      .catch((error) => console.warn('error', error));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>gif grabbr</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({ query: text })}
          onEndEditing={this.handleSearch}
        />
        <View style={styles.gifView}>
          {this.state.initial ? <Initial /> : this.state.loading ? <Spinner /> : <GifDisplay gif={this.state.gif} />}
        </View>
        <TouchableHighlight
          underlayColor='darkslategray'
          style={styles.button}
          onPress={this.handleSearch}
        >
          <Text style={styles.buttonText}> search </Text>
        </TouchableHighlight>
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
  button: {
    marginTop: 10,
    height: 50,
    backgroundColor: 'dimgray',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  title: {
    marginTop: 25,
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
    height: 50
  }
});

AppRegistry.registerComponent('GifGrabbr', () => GifGrabbr);
