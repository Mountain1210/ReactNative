import React, { Component } from 'react';
import { AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Navigator,
  ScrollView,
  PixelRatio,
  BackAndroid,
  AsyncStorage,
  NetInfo,
  clearTimeout,
  TextInput,
  TouchableOpacity} from 'react-native';

var Swiper = require('react-native-swiper');

let Dimensions=require("Dimensions");
let totalWidth=Dimensions.get("window").width;
let totalHeight=Dimensions.get("window").height;


let ConfirmDialog=React.createClass({
  propTypes:{
    userConfirmed:React.PropTypes.func.isRequired,
    userCanceled:React.PropTypes.func.isRequired,
    amIStillAlive:React.PropTypes.func.isRequired

  }
  ,getDefaultProps:function(){
    return{
      promptToUser:'你确定么？'
    }
  }
  ,componentDidMount:function(){
    BackAndroid.addEventListener('ConfirmDialogListener',()=>{
      if(amIStillAlive()){
        this.props.userCanceled();
        return true;
      }
      return false;
    });
  }
  ,componentWillUnmount:function(){
    BackAndroid.removeEventListener('ConfirmDialogListener')
  }
  ,render:function(){
    return(
      <View style={styles.confirmCont}>
        <View style={styles.dialogStyle}>
          <Text style={styles.textPrompt}>{this.props.promptToUser}</Text>
          <Text style={styles.yesButton} onPress={this.props.userConfirmed} numberOfLines={3}>
          {'\r\n'}确定
          </Text>
          <Text style={styles.canceButton} onPress={this.props.userCanceled} numberOfLines={3}>{'\r\n'}取 消</Text>
        </View>
      </View>
      )
  }
});




var styles=StyleSheet.create({
 confirmCont:{
    position:'absolute'
    ,top:0
    ,width:totalWidth
    ,height:totalHeight
    ,backgroundColor:'rgba(52,52,52,0.5)'
 }
 ,dialogStyle:{
    position:'absolute'
    ,top:totalHeight*0.4
    ,left:totalWidth/10
    ,width:totalWidth*0.8
    ,height:totalHeight*0.3
    ,backgroundColor:'white'
 }
 ,textPrompt:{
  position:'absolute'
  ,top:10
  ,left:10
  ,fontSize:20
  ,color:'black'
 }
 ,yesButton:{
  position:'absolute'
  ,bottom:10
  ,left:10
  ,width:totalWidth*0.35
  ,height:totalHeight*0.12
  ,backgroundColor:'grey'
  ,fontSize:20
  ,color:'white'
  ,textAlign:'center'
 }
 ,canceButton:{
  position:'absolute'
  ,bottom:10
  ,right:10
  ,width:totalWidth*0.35
  ,height:totalHeight*0.12

  ,backgroundColor:'grey'
  ,fontSize:20
  ,color:'white'
  ,textAlign:'center'
 }
})

module.exports=ConfirmDialog;