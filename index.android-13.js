/**
 *跳转目前还不能用
 *不到跳转了，先做PixeIRatio
 *
 *  * 
 *
 * class 类名 extends Component {}
 */



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

let _that=this;
class MyProject extends Component{
  render(){

    //通NetInfo获取手机是通过哪个链接进网络通信，例：wifi
    NetInfo.fetch().done(function(rea){
      alert(rea);
    })


    var timeoutID=setTimeout(function(){
      var geo=require('Geolocation');
      alert(geo);
      geo.getCurrentPosition(function(data){
        alert(_that.JSON.stringfy(data));
      },function(e){
        alert(_that.JSON.stringify(e));
      });
      if(timeoutID){
        _that.clearTimeout(timeoutID)
      }
    },5000)
    return(
      <View style={styles.container}>
          <View style={{borderWidth:1,borderColor:'red',height:40,marginBottom:20}}></View>
          <View style={{borderWidth:1/PixelRatio.get(),borderColor:'red',height:40}}></View>
      </View>
      )
   }
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    marginTop:25
  }
});

AppRegistry.registerComponent('MyProject', () => MyProject);