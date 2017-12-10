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
  BackAndroid,
  TextInput,
  NativeModules,
  TouchableOpacity} from 'react-native';


let ExampleInterface=NativeModules.ExampleInterface;
console.log(ExampleInterface);
var RegisterLeaf=require('./RegisterLeaf.android');
var WaitingLeaf=require("./WaitingLeaf");

var NaviModule=React.createClass({
  configureScene:function(route){
    return Navigator.SceneConfigs.FadeAndroid;
  }
  ,renderScene:function(router,navigator) {
    // console.log("121212121212");
    this._navigator=navigator;
    switch(router.name){
      case "register":
        return <RegisterLeaf navigator={navigator} />;
        case "waiting":
        return <WaitingLeaf phoneNumber={router.phoneNumber} userPW={router.userPW} navigator={navigator} />
    }
  }
  ,componentDidMount:function(){
    var navigator=this._navigator;
    BackAndroid.addEventListener('NaviModuleListener',()=>{
      if(navigator && navigator.getCurrentRoutes().length>1){
        navigator.pop();
        return true;
      }
      return false
    })
  }
  ,buttonPressed:function(){
    ExampleInterface.HandleMessage();
  }
  ,componentWillUnmount:function(){
    BackAndroid.removeEventListener("NaviModulelistener");
  }
  ,render:function(){
    alert(3344433)
    return(
      <View style={styles.container}>
      <Text style={styles.welcome} onPress={this.buttonPressed}>
        Welcome to React Native!
      </Text>
      </View>
              )
  }
});


var styles=StyleSheet.create({
  container:{
    flex:1
    ,justifyContent:'center'
    ,alignItems:'center'
    ,backgroundColor:'#F5FCFF'
  }
  ,welcome:{
    fontSize:30,
    textAlign:'center'
    ,margin:10
    ,backgroundColor:'grey'
  }
})
AppRegistry.registerComponent('MyProject', ()=>NaviModule);