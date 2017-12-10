import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight,TouchableOpacity } from 'react-native';

export default class Item extends Component {
  render() {
    return(
          <View style={styles.item}>
            <TouchableOpacity onPress={this.props.press}>
              <Image 
                  resizeMode="contain" 
                  style={styles.img}
                  source={{uri:this.props.url}}>
                <Text numberOfLines={1} style={styles.item_text}>{this.props.title}</Text>
              </Image>
            </TouchableOpacity>
          </View>
        );
  }
}
