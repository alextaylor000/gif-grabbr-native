import React, { Component } from 'react';
import { TouchableHighlight, Linking, View, Text, Image, ActivityIndicator } from 'react-native';
const fallbackImage = 'https://media3.giphy.com/media/11gZBGuDnYwdpu/200_d.gif';
const fallbackImageURL = 'http://giphy.com/gifs/gustavo-art-glitch-image-11gZBGuDnYwdpu';

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
    const siteURL = gif.id ? gif.url : fallbackImageURL;
    const imageURL = gif.id ? gif.fixed_height_downsampled_url.replace('http:', 'https:') : fallbackImage;
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
