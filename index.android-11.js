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
  TouchableOpacity} from 'react-native';


class MyProject extends Component{
 
 render (){
   return(
     <View>
       <Text onPress={this._doXMLHttpRequest} style=
         {styles.btn}>XMLHttpRequest请求数据</Text>

       <Text onPress={this._doFetch} style={styles.btn}>Fetch请求数据</Text>
     </View>
   );
 }
 _doXMLHttpRequest (){
   var request = new XMLHttpRequest();
   request.onreadystatechange = (e) => {
     if (request.readyState !== 4) {
       return;
     }

     if (request.status === 200) {
       console.log('success', request.responseText);
     } else {
       console.warn('error');
     }
   };

   request.open('GET', 'http://www.baidu.com/');
   request.send();
 }

 _doFetch (){
   fetch('http://www.baidu.com/')
   .then(function(data){
     return data.text();
   })
   .then((responseText) => {
     console.log(responseText);
   })
   .catch((error) => {
     console.warn(error);
   });
 }
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    marginTop:25
  }
});

AppRegistry.registerComponent('MyProject', () => MyProject);