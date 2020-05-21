import {View,Text,Image,StyleSheet,ImageBackground} from 'react-native'
import React,{useEffect,useCallback, useState} from 'react'
import {Rating} from 'react-native-elements'
import { useDispatch, useSelector } from 'react-redux';
import { MOVIESEARCH_REQUEST } from '../store/search.state';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { WISHLISTPOST_REQUEST } from '../store/user.state';

const imageInfo=(props)=>{//props로 상세정보일때 보내준다(props.heart)
    const {movieDetail,movieSearch}=useSelector(state=>state.search)
    const {user}=useSelector(state=>state.user)
    const dispatch=useDispatch();
    const [toggle,setToggle]=useState(false)
    return(  
         <View >
            <ImageBackground style={styles.backgroundImage} source={{uri:`${movieDetail.poster}`}}>
                <View style={{flexDirection:'row'}}>
                <TouchableOpacity onPress={()=>{props.navigation.navigate('posterImage',{ImageURI:`${movieDetail.poster}`})}}><Image style={styles.posterImage}  source={{uri:`${movieDetail.poster}`}}/></TouchableOpacity> 
            <View style={styles.movieInfo}>
                <Text style={styles.Text}>{movieDetail.korTitle||movieSearch.korTitle}</Text>
                <Text style={styles.Text}>{`${movieDetail.releaseDate||movieSearch.releaseDate}/${movieDetail.makingNation||movieSearch.makingNation}`}</Text>      
            </View>    
            </View>
            </ImageBackground>
            </View>    
     
        );
};

const styles = StyleSheet.create({
    backgroundImage:{
        height:240,
        width:'100%',
        elevation:-1,
        opacity:0.7
    },
    posterImage:{
        marginTop:60,
        marginLeft:20,
        width:115,
        height:165
    },
    movieInfo:{
        marginTop:170,
        marginLeft:10,  
    },
    Text:{
        color:"#fff"
    }
})

export default imageInfo;