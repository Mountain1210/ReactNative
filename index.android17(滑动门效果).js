import React, { Component } from 'react';
import { AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Navigator,
  ScrollView,
  PixelRatio,
  AsyncStorage,
  NetInfo,
  clearTimeout,
  TouchableOpacity} from 'react-native';

var Swiper = require('react-native-swiper');

var MyProject=React.createClass({

  render:function(){
      console.log(11111);
    return(
    <View>
    <Swiper style={styles.wrapper} showButtons={true}>
    <View style={styles.slider1}>
    <Text style={styles.text}>第一张</Text>
    </View>
    <View style={styles.slider2}>
    <Text style={styles.text}>第二张</Text>
    </View>
    <View style={styles.slider3}>
    <Text style={styles.text}>第三张</Text>
    </View>
    </Swiper>
    </View>
    )
  }
});

var styles=StyleSheet.create({
    wrapper:{},
    slider1:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#9dd6eb'
    },
    slider2:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#97cae5'
    },
    slider3:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#92BBD9'
    },
    text:{
      color:'#fff',
      fontSize:30,
      fontWeight:'bold'
    }
})

AppRegistry.registerComponent('MyProject', () => MyProject);