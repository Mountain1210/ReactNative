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
  TouchableOpacity} from 'react-native';

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

  ,componentWillUnmount:function(){
    BackAndroid.removeEventListener("NaviModulelistener");
  }
  ,render:function(){
    return(
        <Navigator 
              initialRoute={{name:'register'}}
              configureScene={this.configureScene}
              renderScene={this.renderScene} />
              )
  }
});

AppRegistry.registerComponent('MyProject', ()=>NaviModule);