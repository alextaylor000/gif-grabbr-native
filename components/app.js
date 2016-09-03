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
import GifDisplay from './gif_display';
import Spinner from './spinner';
import Initial from './initial';
import getGif from '../utils/get_gif';

class App extends Component {
  constructor() {
    super()
    this.state = {
      initial: true,
      prefetch: true,
      query: '',
      gif: {}
    }

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch() {
    console.log('handleSearch start...');
    this.setState({ initial: false, prefetch: true });
    getGif(this.state.query)
      .then((response) => {
        console.log('GIPHY API response complete', response.data);
        this.setState({ prefetch: false, gif: response.data });
      })
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
          onSubmitEditing={this.handleSearch}
          returnKeyType='search'
        />
        <View style={styles.gifView}>
          {this.state.initial ? <Initial /> : <GifDisplay prefetch={this.state.prefetch} gif={this.state.gif} />}
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

export default App;
