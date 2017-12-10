/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View,PixelRatio,Navigator } from 'react-native';

import MyScene from './MyScene';
// export default class List extends Component {

//   render(){
//       return (
//         <ScrollView style={styles.flex}>
//           <Text style={styles.list_item} onPress={this.goTo}>☆ 豪华邮轮济州岛3日游</Text>
//           <Text style={styles.list_item} onPress={this.goTo}>☆ 豪华邮轮台湾3日游</Text>
//           <Text style={styles.list_item} onPress={this.goTo}>☆ 豪华邮轮地中海8日游</Text>
//         </ScrollView>
//         );
//     }
//     goTo(){
//       this.props.navigator.push({
//         component: Detail,
//         title: '邮轮详情',
//         rightButtonTitle: '购物车',
//         onRightButtonPress: function(){
//           alert('进入我的购物车');
//         }
//       });
//     }
// }




// class Detail extends Component {
//   render (){
//     return (
//       <ScrollView>
//         <Text>详情页</Text>
//         <Text>尽管信息很少，但这就是详情页</Text>
//       </ScrollView>
//     );
//   }
// }




class MyProject extends Component {
  render() {
      return (
        <Navigator
          initialRoute={{ title: 'My Initial Scene', index: 0 }}
          renderScene={(route, navigator) =>
            <MyScene
              title={route.title}

              // Function to call when a new scene should be displayed           
              onForward={ () => {    
                const nextIndex = route.index + 1;
                navigator.push({
                  title: 'Scene ' + nextIndex,
                  index: nextIndex,
                });
              }}

              // Function to call to go back to the previous scene
              onBack={() => {
                if (route.index > 0) {
                  navigator.pop();
                }
              }}
            />
          }
        />
      )
    }
};

const styles = StyleSheet.create({
  flex:{
    flex: 1,
  },
  list_item:{
    lineHeight:25,
    fontSize:16,
    marginLeft:10,
    marginRight:10
  }
});

AppRegistry.registerComponent('MyProject', () => MyProject);