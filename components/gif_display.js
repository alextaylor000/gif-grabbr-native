import React, { Component } from 'react';
import { TouchableHighlight, Linking, View, Text, Image, ActivityIndicator } from 'react-native';

class GifDisplay extends Component {
  constructor() {
    super();
    this.state = { loading: true };
    this.showSpinner = this.showSpinner.bind(this);
  }

  showSpinner() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator
          animating={this.props.prefetch || this.state.loading}
          color='white'
          size='large'
        />
      </View>
    );
  }

  render() {
    const { gif } = this.props;
    if (this.props.prefetch) return this.showSpinner();
    const siteURL = gif.url;
    const imageURL = gif.fixed_height_downsampled_url.replace('http:', 'https:');
    return (
      <TouchableHighlight style={{ flex: 1 }} onPress={() => Linking.openURL(siteURL) }>
        <Image
          source={{ uri: imageURL }}
          resizeMode='cover'
          style={{ flex: 1 }}
          onLoadStart={() => {
            console.log('Fetching image...')
            this.setState({ loading: true })
          }}
          onLoadEnd={() => this.setState({ loading: false })}
        >
          {this.showSpinner()}
        </Image>
      </TouchableHighlight>
    )
  }
}


export default GifDisplay
