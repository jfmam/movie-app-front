import React from 'react'
import {View, SafeAreaView} from 'react-native' 
import { useSelector } from 'react-redux'
import ImageInfo from '../../components/imageInfo'


const MovieInfo=(props)=>{

    return(
        <SafeAreaView>
        <ImageInfo></ImageInfo>
        <View>
    <Text>{props.movieId}</Text> 
        </View>
        </SafeAreaView>
    )
}

export default MovieInfo