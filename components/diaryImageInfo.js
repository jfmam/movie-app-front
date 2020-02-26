import {View,Text,Image,StyleSheet,ImageBackground} from 'react-native'
import React,{useEffect,useCallback, useState} from 'react'
import {Rating} from 'react-native-elements'
import { useDispatch, useSelector } from 'react-redux';
import { MOVIESEARCH_REQUEST } from '../store/search.state';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign'
import { WISHLISTPOST_REQUEST } from '../store/post.state';

const imageInfo=(props)=>{//props로 상세정보일때 보내준다(props.heart)
    const {movieDetail}=useSelector(state=>state.search)
    const {user}=useSelector(state=>state.user)
    const dispatch=useDispatch();
    const [toggle,setToggle]=useState(false)
    return(  
         <View >
            <ImageBackground style={styles.backgroundImage} source={{uri:`${movieDetail.poster}`}}>
                <View style={{flexDirection:'row'}}>
                <TouchableOpacity onPress={()=>{props.navigate}}><Image style={styles.posterImage}  source={{uri:`${movieDetail.poster}`}}/></TouchableOpacity> 
            <View style={styles.movieInfo}>
                <Text>{movieDetail.korTitle}</Text>
                <Text>{`${movieDetail.releaseDate}/${movieDetail.makingNation}`}</Text>      
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
        opacity:50
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
        
    }
})

export default imageInfo;