import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet, Text, View, Image,Platform,SafeAreaView} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { SearchBar } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { MOVIESEARCH_REQUEST, SEARCH, DIARYSEARCH_REQUEST } from '../../store/search.state';
import {Rating} from 'react-native-elements'

export default HomeScreen=(props)=> {
   const [search,setSearch]=useState('')
//    이부분은 지금은 componentState 처리했지만 나중에 리덕스로처리해야한다
    const {user,isLogginIn}=useSelector(state=>state.user)
    const {movieSearchLoading,Search}=useSelector(state=>state.search)
    const setText=useCallback((text)=>{
        props.navigation.navigate('movieSearch')
    },[search])
    useEffect(()=>{
        if(user.userId===undefined&&!isLogginIn){
            alert('아이디와 패스워드를 다시 입력해주세요');
            // props.navigation.navigate('Login');
        }
    },[user,isLogginIn])



        return (
        <SafeAreaView style={styles.container}>
        <View style={styles.title}>
           
            <Text style={{fontSize:40,alignSelf:'center',color:"#d3d3d3"}}>MOVIE MOON</Text>
            <SearchBar 
        onChangeText={(text)=>{setText(text)}}
        platform="android"
        containerStyle={styles.search}
        maxLength={20} 
        showLoading={movieSearchLoading}
      /> 
      {/* searchBar부분은 component로 따로 처리하도록한다 */}
        </View>
        <View style={styles.poster}>
            <Text style={{fontSize:16 ,marginLeft:20,color:"#d3d3d3"}}>흥행예상작</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >      
     
      </ScrollView>
      </View>
      </SafeAreaView>
        );
    }

const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignContent: 'center',
            justifyContent: 'flex-start',
            paddingTop: Platform.OS === 'android' ? 25 : 0,
            backgroundColor:'#282828',
            
        },
        title:{
            marginTop:95,
            alignContent:'center',
           color:"#d3d3d3"
        },
        search:{
           marginTop: 17, 
           backgroundColor: "#d3d3d3",
        width:271,
        alignSelf:'center',
        borderRadius:20,
        
        },
        poster:{
            marginTop:100
        },
        possterImage:{
            padding:18
        }
        
});