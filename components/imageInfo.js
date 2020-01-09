import {View,Text,Image,StyleSheet,ImageBackground} from 'react-native'
import React from 'react'
import axios from 'axios'

const imageInfo=(props)=>{
    
    return(  
         <View >
            <ImageBackground style={styles.backgroundImage} source={{uri:props.image[1]}}>
                <View style={{flexDirection:'row'}}>
                 <Image style={styles.posterImage} source={{uri:props.image[1]}}/>
            <View style={styles.movieInfo}>
            <Text>영화제목</Text>
             <Text>영화정보</Text>      
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
        elevation:-1
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