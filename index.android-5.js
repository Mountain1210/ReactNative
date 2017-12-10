/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View,PixelRatio,Navigator,TextInput,TouchableHighlight,TouchableOpacity} from 'react-native';


class MyProject extends Component {
  show(text){
    alert(text)
  }
  render(){
    return(
     <View style={[styles.flex]}>
        <View>
            <TouchableHighlight 
                onPress={this.show.bind(this,'React Native入门与实战')}
                underlayColor="#E1f6ff"
                >
                <Text style={styles.item}>React Native入门与实战</Text>
                </TouchableHighlight>

                <TouchableOpacity 
                    onPress={this.show.bind(this,'图灵出版社')}
                    underlayColor="#ff0000"
                    >
                    <Text style={styles.item}>图灵出版社</Text>
               </TouchableOpacity>

               <TouchableOpacity>
               <View style={styles.btn}>
               <Text style={{fontSize:25,color:'#fff'}}>按钮</Text>
               </View>
               </TouchableOpacity>
        </View>
     </View>
    );
  }
};

const styles = StyleSheet.create({
  flex:{
    flex: 1,
    alignItems:'center'
  },
  image:{
    borderWidth:1,
    width:300,
    height:200,
    borderRadius:5,
    borderColor:'#ccc'
  },
  img:{
    height:200,
    width:300,
  },
  btns:{
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop:20
  },
  btn:{
    width:60,
    height:30,
    borderColor: '#0089FF',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems:'center',
    borderRadius:3,
    marginRight:20,
  },
});



AppRegistry.registerComponent('MyProject', () => MyProject);