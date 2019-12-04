import React, { Component } from 'react';
import { Image, FlatList,StyleSheet,View, TouchableOpacity,TextInput,Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler'
import Wishlist from './WishList'
const items = [
    { thumbnail: { uri: 'https://lorempixel.com/200/200/animals' } },
    { thumbnail: { uri: 'https://lorempixel.com/200/200/city' } },
    { thumbnail: { uri: 'https://lorempixel.com/200/200/nature' } },
    { thumbnail: { uri: 'https://lorempixel.com/200/200/cats' } },
];
export default class DiaryScreen extends Component {
    renderItem = ({ item, index }) => (
        <TouchableOpacity onPress={(props)=>{this.props.navigation.navigate('WriteDiary')}}>
        <Image style={styles.image} source={item.thumbnail} />
        </TouchableOpacity>
    );

    render() {
        return (
            <ScrollView style={styles.container}>
               <FlatList data={items} renderItem={ renderItem = ({ item, index }) => (//data는 사진 주소 renderItem은 데이터를 뿌려준다
       <View>
        <View style={{flexDirection:'row'}}>
        <View style={{flex:1}}>
       <TouchableOpacity onPress={(props)=>{this.props.navigation.navigate('위시리스트')}}>
        <Image style={styles.image} source={item.thumbnail} />
        </TouchableOpacity>
        </View>
        <View style={{flex:1,marginTop:80}}>
                <Text>hi</Text>
        </View>
        </View>
         <TextInput editable={false} underlineColorAndroid="#d3d3d3"/>
         </View>
    )}
        numColumns={1}   />
               </ScrollView> 
        );
    }
}
const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor:'#282828'
  },
  image: {
    width: 115,
    height: 165,
    marginTop:10,
    marginLeft:29.5,
  },
});