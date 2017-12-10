/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View,PixelRatio,Navigator,TextInput} from 'react-native';



var onePT = 1 /PixelRatio.get();
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




class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { show:false,value:'避暑山'};
  }
  getValue(text){
    // var value = text;
    // alert(text)
    this.setState({
      show: true,
      value: text
    });
  }
  hide(val){
    this.setState({
      show: false,
      value: val
    });
  }

  render() {
      return (
        <View style={styles.flex}>
                <View style={[styles.flexDirection, styles.inputHeight]}>
                  <View style={styles.flex}>
                    <TextInput 
                      style={styles.input} 
                      returnKeyType="search"
                      placeholder="请输入关键字"  
                      onEndEditing={this.hide.bind(this, this.state.value)} 
                      value={this.state.value}        

                      onChangeText={this.getValue.bind(this)}/>
                  </View>
                  <View style={styles.btn}>
                    <Text style={styles.search} onPress={this.hide.bind(this, this.state.value)}>搜索</Text>
                  </View>
                </View>
                {this.state.show?
                  <View style={[styles.result]}>
                    <Text onPress={this.hide.bind(this, this.state.value + '庄')} 
                          style={styles.item} numberOfLines={1}>{this.state.value}庄</Text>
                    <Text onPress={this.hide.bind(this, this.state.value + '园街')}
                          style={styles.item} numberOfLines={1}>{this.state.value}园街</Text>
                    <Text onPress={this.hide.bind(this, 80 + this.state.value + '综合商店')} 
                          style={styles.item} numberOfLines={1}>80{this.state.value}综合商店</Text>
                    <Text onPress={this.hide.bind(this, this.state.value + '桃')} 
                          style={styles.item} numberOfLines={1}>{this.state.value}桃</Text>
                    <Text onPress={this.hide.bind(this, '杨林' + this.state.value + '园')} 
                          style={styles.item} numberOfLines={1}>杨林{this.state.value}</Text>
                  </View>
                  : null
                }
              </View>
      )
    }
};

const styles = StyleSheet.create({
  flex:{
    flex: 1,
  },
  flexDirection:{
    flexDirection:'row'
  },
  topStatus:{
    marginTop:25,
  },
  inputHeight:{
    height:45,
  },
  input:{
    height:45,
    borderWidth:1,
    marginLeft: 5,
    paddingLeft:5,
    borderColor: '#ccc',
    borderRadius: 4
  },
  btn:{
    width:55,
    marginLeft:-5,
    marginRight:5,
    backgroundColor:'#23BEFF',
    height:45,
    justifyContent:'center',
    alignItems: 'center'
  },
  search:{
    color:'#fff',
    fontSize:15,
    fontWeight:'bold'
  },
  result:{
    marginTop:onePT,
    marginLeft:5,
    marginRight:5,
    height:200,
    borderColor:'#ccc',
    borderTopWidth:onePT,
  },
  item:{
    fontSize:16,
    padding:5,
    paddingTop:10,
    paddingBottom:10,
    borderWidth:onePT,
    borderColor:'#ddd',
    borderTopWidth:0,
  }
});

class MyProject extends Component {
  render(){
    return(
      <View style={[styles.flex, styles.topStatus]}>
        <Search></Search>
      </View>
    );
  }
};

AppRegistry.registerComponent('MyProject', () => MyProject);