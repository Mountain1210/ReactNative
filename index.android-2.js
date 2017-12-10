/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View,PixelRatio } from 'react-native';


import Header from './header';
import List from './list';
import ImportantNews from './importantnews';


class MyProject extends Component {
  render() {
    var news = [
        '1、刘慈欣《三体》获“雨果奖”为中国作家首次',
        '2、京津冀协同发展定位明确：北京无经济中心表述',
        '3、好奇宝宝第一次淋雨，父亲用镜头记录了下来',
        '4、京津冀协同发展定位明确：:北京无经济中心表述+好奇宝宝第一次淋雨，父亲用镜头记录了下来'
     ];  
    return (
      <View style={styles.flex}>
          <Header></Header>
          <List title='宇航员在太空宣布“三体”获奖'></List>
        <List title='NASA发短片纪念火星征程50年'></List>
        <List title='男生连续做一周苦瓜吃吐女友'></List>
        <List title='女童遭鲨鱼袭击又下海救伙伴'></List>
        <ImportantNews news={news}></ImportantNews>
      </View>
    );
  }
};

const styles=StyleSheet.create({
  flex:{
    flex:1
  }
});

AppRegistry.registerComponent('MyProject', () => MyProject);