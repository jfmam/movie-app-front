import {View,Text,Image,StyleSheet,ImageBackground} from 'react-native'
import React,{useEffect,useCallback, useState} from 'react'
import {Rating} from 'react-native-elements'
import { useDispatch, useSelector } from 'react-redux';
import { MOVIESEARCH_REQUEST, MOVIE_DETAIL, DIARYSEARCH_REQUEST } from '../store/search.state';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign'
import { WISHLISTPOST_REQUEST,WISHLISTDELETE_REQUEST } from '../store/user.state';

const imageInfo=(props)=>{//props로 상세정보일때 보내준다(props.heart)
    const {movieDetail,movieSearch}=useSelector(state=>state.search)
    const {wishListImage,user}=useSelector(state=>state.user)
    const dispatch=useDispatch();
    const [toggle,setToggle]=useState(false)
    const postWishList=useCallback(()=>{
              dispatch({
                  type: WISHLISTPOST_REQUEST,
                  data: {
                      userId: user.id,
                      movieId: movieDetail.movieId || movieDetail.id
                  }
              })
              
    },[])
    const deleteWishList=useCallback(()=>{
        dispatch({
            type: WISHLISTDELETE_REQUEST,
            data: {
                userId: user.id,
                movieId: movieDetail.movieId || movieDetail.id
            }
        })
    },[])

    return(  
         <View>
            <ImageBackground style={styles.backgroundImage} source={{uri:`${movieDetail.poster}`}}>
                <View style={{flexDirection:'row'}}>
                <TouchableOpacity onPress={()=>{props.navigate}}><Image style={styles.posterImage}  source={{uri:`${movieDetail.poster}`}}/></TouchableOpacity> 
            <View style={styles.movieInfo}>
                <Text style={styles.textStyle}>{movieDetail.korTitle||movieSearch.korTitle}</Text>
                <Text style={styles.textStyle}>{`${movieDetail.releaseDate}/${movieSearch.makingNation}`}</Text>      
            </View>    
            {
            movieDetail.movieId!==undefined
            ?wishListImage.find(k=>k.movieId===movieDetail.movieId)
            ?<Icon style={{position:"absolute",top:193,left:315}} onPress={()=>{
              deleteWishList();
            }} name='heart' color="#f00" size={25} />
            :<Icon color="#fff" name='hearto' style={{position:"absolute",top:193,left:315}} onPress={()=>{
                postWishList();
            }} size={25}/>
        : wishListImage.find(k=>k.movieId===movieDetail.id)
            ?<Icon color="#f00" style={{position:"absolute",top:193,left:315}} onPress={()=>{
              deleteWishList();
            }} name='heart' size={25} />
            :<Icon name='hearto' color="#fff"  style={{position:"absolute",top:193,left:315}} onPress={()=>{
                postWishList();
            }} size={25}/>
        }
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
    textStyle:{
        color:'#fff',
    }
})

export default imageInfo;