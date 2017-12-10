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
  TextInput,
  TouchableOpacity} from 'react-native';

var Swiper = require('react-native-swiper');

let Dimensions=require("Dimensions");
let totalWidth=Dimensions.get("window").width;
let leftStartPoint=totalWidth*0.1;
let componentWidth=totalWidth*0.8;


let WaitingLeaf=React.createClass({
  goBack:function(){
  this.props.navigator.push({
    name:"register"
  })
},
render:function(){
  return(
    <View style={styles.container}>
    <Text style={styles.textPromptStyle}>注册使用的手机号{this.props.phoneNumber}</Text>
    <Text style={styles.textPromptStyle}>注册使用密码：{this.props.userPW}</Text>
    <Text style={styles.bigTextPrompt} onPress={this.goBack}>返回</Text>
    </View>
    )
}

})

var styles=StyleSheet.create({
 container:{
  flex:1,
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:'#F5FCFF'
 },
 numberInputStyle:{
  top:6
  ,color:'white'
  ,left:leftStartPoint
  ,width:componentWidth
  ,backgroundColor:'gray'
  ,fontSize:20
   ,height:45
 }
 ,textPromptStyle:{

  fontSize:20

 }


 ,bigTextPrompt:{

  width:300
  ,backgroundColor:'gray'
  ,color:'white'
  ,textAlign:'center'
  ,fontSize:60
 }
})

module.exports=WaitingLeaf;