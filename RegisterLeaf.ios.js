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


left RegisterLeaf=React.createClass({
getInitialState:function(){
  return{
    inputedNum:'',
    inputedPW:''
  }
},
updateNum:function(newText){
  this.setState((oldState)=>{
    for(var aName in oldState){
      console.log(aName);
      console.log(oldState[aName])
    }

    return {
      aBrandnewStateVariable:"I am a new variable.",
      inputedNum:newText,
    }
  },this.changeNumDone);
}
,changeNumDone:function(){
  console.log("react Native has changed inputed Num");
}
,updatePW:function(newText){
  // console.log(newText)
  this.setState(()=>{
    return{
      inputePW:newText
    }
  })
}
  ,render:function(){

    return(
      <View style={styles.container}>

        <TextInput style={styles.numberInputStyle} placeholder={"请输入手机号"}  onChangeText={(newText)=>this.updateNum(newText)}/>
        <Text style={styles.textPromptStyle}>  请输入手机号{this.state.inputedNum}</Text>
        <TextInput style={styles.passwordInputStyle}  placeholder={'请输入密码'} password={true} onChangeText={(newText)=>this.updatePW(newText)} />
        <Text style={styles.textPromptStyle}>  请输入手机密码</Text>
        <Text style={styles.bigTextPrompt}>确定</Text>
      </View>
    )
  }
});

var styles=StyleSheet.create({
 container:{
  flex:1,
  backgroundColor:'white'
 },
 numberInputStyle:{
  top:20,
  height:20,
  left:leftStartPoint,
  width:componentWidth,
  backgroundColor:'gray'
  ,fontSize:20
 }
 ,textPromptStyle:{
  top:30
  ,left:leftStartPoint
  ,width:componentWidth
  ,fontSize:20
 }
 ,passwordInputStyle:{
  top:50
  height:20,
  ,left:leftStartPoint
  ,width:componentWidth
  ,backgroundColor:'gray'
  ,fontSize:20
 }
 ,bigTextPrompt:{
  top:70,
  height:20
  ,left:leftStartPoint
  ,width:componentWidth
  ,backgroundColor:'gray'
  ,color:'white'
  ,textAlign:'center'
  ,fontSize:60
 }
})

module.exports=RegisterLeaf;
