import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight,TouchableOpacity } from 'react-native';

export default class Item extends Component {
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
}
