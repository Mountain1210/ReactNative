/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View,PixelRatio } from 'react-native';

export default class Header extends Component {
  show(title){
    alert(title)
  }

  render(){
    var news=[];
    for(var i in this.props.news){
      var text=(
          <Text 
              onPress={this.show.bind(this.props.news[i])} 
              numberOfLinew={2} key={i}
              style={styles.news_item}>
                {this.props.news[i]}
              </Text>
        );
      news.push(text)
    }
    return (
      <View style={styles.flex}>
      <Text style={styles.news_title}>今日要闻</Text>
      {news}
      </View>
      )
  }
};

const styles=StyleSheet.create({

  flex:{
    marginTop:35,
    marginLeft:10,
    marginRight:10

  },
  list_item:{
    height:40,
    marginLeft:10,
    marginRight:10,
    borderBottomWidth:1,
    borderBottomColor:'#ddd',
    justifyContent:'center'
  },
  list_item_font:{
    fontSize:16
  },
  news_title:{

    fontSize:20,
    fontWeight:'bold',
    color:'#cd1d1c',
    marginLeft:10,
    marginRight:15
  },
  new_item:{
    marginLeft:10,
    marginRight:10,
    fontSize:15,
    lineHeight:20
  }
});


