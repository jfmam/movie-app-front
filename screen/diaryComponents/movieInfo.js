import React from 'react'
import {View, SafeAreaView,Text} from 'react-native' 
import { useSelector } from 'react-redux'
import ImageInfo from '../../components/imageInfo'


const MovieInfo=(props)=>{

    return(
        <SafeAreaView>
        <ImageInfo movieId={props.movieId}></ImageInfo>
        <View>
    <Text>{props.movieId}</Text> 
        </View>
        </SafeAreaView>
    )
}

export default MovieInfo