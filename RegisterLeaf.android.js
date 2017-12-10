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
  Alert,
  clearTimeout,
  TextInput,
  TouchableOpacity} from 'react-native';
var Swiper = require('react-native-swiper');
let Dimensions=require("Dimensions");
let totalWidth=Dimensions.get("window").width;
let leftStartPoint=totalWidth*0.1;
let componentWidth=totalWidth*0.8;
let ConfirmDialog=require('./ConfirmDialog');
let RegisterLeaf=React.createClass({

getInitialState:function(){
  return{
    inputedNum:'',
    inputedPW:''
    ,needToConfirm:false
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
  this.setState(()=>{
    return{
      inputedPW:newText
    }
  })
}
,userPressConfirme:function(){
    /*  this.props.navigator.push({
        phoneNumber:this.state.inputedNum,
        userPW:this.state.inputedPW,
        name:'waiting'
      })*/

        Alert.alert(
            '弹出框标题提示语',
            '弹出框文正文提示语'
            [
              {text:'我知道了', onPress:this.optionlSelected}
            ]
          );
        this.setState((state)=>{
          return{
            needToConfirm:true
          }
        })
  }
  ,optionlSelected:function(){
    console.log('显示optionlSelected.')
  }
  ,userCanceled:function(){
    console.log(222)
    this.setState((state)=>{
      return{
        needToConfirm:false
      }
    })
  }
  ,userConfirmed:function(){
    this.setState((state)=>{
      return{
        needToConfirm:false
      }
    });
    // alert(1111)
    this.props.navigator.replace({
      phoneNumber:this.state.inputedNum,
      userPW:this.state.inputedPW,
      name:'waiting'
    })
  }
  ,tellConfirmDialogItsStatus:function(){
    return this.state.needToConfirm;
  }
    ,renderWithDialog:function(){
    return(
      <View style={styles.container}>
        <Text style={styles.textPromptStyle}>  请输入手机号{this.state.inputedNum}</Text>
        <TextInput style={styles.numberInputStyle} placeholder={"请输入手机号"}  onChangeText={(newText)=>this.updateNum(newText)}/>
        <Text style={styles.textPromptStyle2}>  请输入手机密码</Text>
        <TextInput style={styles.passwordInputStyle}  placeholder={'请输入密码'} password={true} onChangeText={(newText)=>this.updatePW(newText)} />
        
        <Text style={styles.bigTextPrompt} onPress={this.userConfirmed}>确定</Text>
        <ConfirmDialog 
        userConfirmed={this.userConfirmed}
        userCanceled={this.userCanceled}
        amIStillAlive={this.tellConfirmDialogItsStatus} 
        promptToUser={'使用'+this.state.inputedNum+'号码登 录？'}/>
      </View>
    )
  }
  ,render:function(){
    console.log(this.state.needToConfirm)
    if(this.state.needToConfirm) return this.renderWithDialog();


    return(
      <View style={styles.container}>
        <Text style={styles.textPromptStyle}>  请输入手机号{this.state.inputedNum}</Text>
        <TextInput style={styles.numberInputStyle} placeholder={"请输入手机号"}  onChangeText={(newText)=>this.updateNum(newText)}/>
        <Text style={styles.textPromptStyle2}>  请输入手机密码</Text>
        <TextInput style={styles.passwordInputStyle}  placeholder={'请输入密码'} password={true} onChangeText={(newText)=>this.updatePW(newText)} />
        
        <Text style={styles.bigTextPrompt} onPress={this.userPressConfirme}>确定</Text>
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
  top:6
  ,color:'white'
  ,left:leftStartPoint
  ,width:componentWidth
  ,backgroundColor:'gray'
  ,fontSize:20
   ,height:45
 }
 ,textPromptStyle:{
 left:leftStartPoint
  ,width:componentWidth
  ,fontSize:20

 }
  ,textPromptStyle2:{
  top:50
  ,left:leftStartPoint
  ,width:componentWidth
  ,fontSize:20
 }
 ,passwordInputStyle:{
  top:50
  ,left:leftStartPoint
  ,width:componentWidth
  ,backgroundColor:'gray'
  ,fontSize:20
  ,height:45
 }
 ,bigTextPrompt:{
  top:70
  ,left:leftStartPoint
  ,width:componentWidth
  ,backgroundColor:'gray'
  ,color:'white'
  ,textAlign:'center'
  ,fontSize:20
 }
})

module.exports=RegisterLeaf;