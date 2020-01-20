import {View,Text,Image,StyleSheet,ImageBackground} from 'react-native'
import React from 'react'
import {Rating} from 'react-native-elements'
import { useDispatch } from 'react-redux';

const imageInfo=(props)=>{//props로 상세정보일때 보내준다(props.heart)
    const dispatch=useDispatch;
    const completeRating=()=>{
        dispatch()
    }
    return(  
         <View >
            <ImageBackground style={styles.backgroundImage} source={{uri:props.image[1]}}>
                <View style={{flexDirection:'row'}}>
                 <Image style={styles.posterImage} source={{uri:props.image[1]}}/>
            <View style={styles.movieInfo}>
            <Text>영화제목</Text>
             <Text>영화정보</Text>      
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