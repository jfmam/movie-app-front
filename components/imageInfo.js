import {View,Text,Image,StyleSheet,ImageBackground} from 'react-native'
import React,{useEffect,useCallback} from 'react'
import {Rating} from 'react-native-elements'
import { useDispatch, useSelector } from 'react-redux';
import { MOVIESEARCH_REQUEST } from '../store/search.state';


const imageInfo=(props)=>{//props로 상세정보일때 보내준다(props.heart)
    const {movieDetail}=useSelector(state=>state.search)
    const {user}=useSelector(state=>state.user)
    const dispatch=useDispatch();
    return(  
         <View >
            <ImageBackground style={styles.backgroundImage} source={{uri:`${movieDetail.poster}`}}>
                <View style={{flexDirection:'row'}}>
                 <Image style={styles.posterImage} source={{uri:`${movieDetail.poster}`}}/>
            <View style={styles.movieInfo}>
                <Text>{movieDetail.korTitle}</Text>
                <Text>{`${movieDetail.year}/${movieDetail.nation}`}</Text>      
            </View>    
            {props.heart&&<Rating type='heart' ratingColor='#aa00000' ratingCount={1} onStartRating={0} onFinishRating={completeRating} />}
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