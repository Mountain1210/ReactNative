]/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import { AppRegistry, StyleSheet, Text, View,PixelRatio,Navigator,TextInput,TouchableHighlight,TouchableOpacity,Image,WebView} from 'react-native';


var imgs = [
  'http://vczero.github.io/ctrip/hua2.png',
  'http://vczero.github.io/ctrip/nian2.png',
  'http://vczero.github.io/me/img/xiaoxue.png'
];


class Item extends Component {
  render(){
    return(
      <View style={styles.item}>
        <TouchableOpacity onPress={this.props.press}>
          <Image 
              resizeMode="contain" 
              style={styles.img}
              source={{uri:this.props.url}}>
            <Text numberOfLines={1} style={styles.item_text}>{this.props.title}</Text>
          </Image>
        </TouchableOpacity>
      </View>
    );
  }

}

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {count:0};
  }
  componentDidMount(){
    var _that = this;
    AsyncStorage.getAllKeys(function(err, keys){
      if(err){
        //TODO：存储取数据出错
      }
      //将存储的商品条数反应到按钮上
      _that.setState({
        count: keys.length
      });
    });
  }
  render() {
    var list = [];
    for(var i in Model){
      if(i % 2 === 0){
        var row = (
          <View style={styles.row}>
            <Item url={Model[i].url} 
              title={Model[i].title} 
              press={this.press.bind(this, Model[i])}></Item>
            <Item 
              url={Model[parseInt(i)+1].url} 
              title={Model[parseInt(i)+1].title} 
              press={this.press.bind(this, Model[parseInt(i)+1])}></Item>
          </View>);
        list.push(row);
      }
    }

    var count = this.state.count;
    var str = null;
    if(count){
      str = '，共'+ count + '件商品';
    }
    return (
      <ScrollView style={{marginTop:10}}>
        {list}
        <Text onPress={this.goGouWu} style={styles.btn}>去结算{str}</Text>
      </ScrollView>
    );
  }
  goGouWu (){
    this.props.navigator.push({
      component: GouWu,
      title:'购物车'
    });
  }
  press (data){
    var count = this.state.count;
    count ++;
    //改变数字状态
    this.setState({
      count: count
    });
    //AsyncStorage存储
    AsyncStorage.setItem('SP-' + this.genId() + '-SP', JSON.stringify(data), function(err){
      if(err){
        //TODO：存储出错
      }
    });
  }
  //生成随机ID：GUID
  genId (){
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0,
          v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      }).toUpperCase();
  }
}

class MyProject extends Component {
  show(text){
    alert(text)
  }
  render(){
      return(
        <View style={[styles.flex, {marginTop:40}]}>
          <MyImage imgs={imgs}></MyImage>
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