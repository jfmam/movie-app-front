import {View, SafeAreaView, ImageBackground,StyleSheet,Platform,Text,Image} from 'react-native'
import {ScrollView, TouchableOpacity, TextInput} from 'react-native-gesture-handler'
import React,{ useState, useEffect, useCallback } from 'react'
import {Rating} from 'react-native-elements'
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
import ImageInfo from '../../components/diaryImageInfo'
import { useDispatch, useSelector } from 'react-redux';
import { GETDIARY_REQUEST } from '../../store/image.state';

//사진부분추가

export default WriteDiary=(props)=>{
    const [ratingValue,setRatingValue]=useState(0)
    const dispatch=useDispatch();
    const {getDiaryData}=useSelector(state=>state.image)
    const{movieDetail}=useSelector(state=>state.search)
    const ratingCompleted = (rating) => {
        setRatingValue(rating)
    }

    useEffect(()=>{
        dispatch({
            type:GETDIARY_REQUEST,
            data:{
                diaryId:movieDetail.diaryId
            }
        })
    },[])
    return(
        <SafeAreaView style={styles.container}>    
        <ScrollView 
        stickyHeaderIndices={[1]} >
        <ImageInfo/>
        {/* props로 image를 보내줘야함 */}
    
        <View style={styles.writeContainer}> 
        <View style={{flexDirection:"row"}}>
        <Text  style={styles.Text}>Rating </Text>
        {/* <Rating
             type='star'
             readonly={true}
             ratingCount={5}
             imageSize={18}
             onFinishRating={ratingCompleted}
             onStartRating={5}
        /> */}
        </View>
        <View style={{flexDirection:"row",marginTop:24}}>
            <Text  style={styles.Text} >Date </Text>
            <Text  style={styles.Text}>{getDiaryData.createDate} </Text>
        </View>
         <View style={{marginTop:34,marginRight:39 ,flexDirection:'row',justifyContent:'space-around'}}>
          {getDiaryData.diaryimages?getDiaryData.diaryimages.map((item,index)=>{
             return <Image style={{width:80 ,height:115,resizeMode:'cover'}}   source={{uri:`${item.src}`}} key={index}></Image>
          }):<Text>이미지가 없습니다</Text>}      
        </View>
        <View style={{marginTop:29}}>
            <Text style={{...styles.Text,marginBottom:20}}>MEMO</Text>
            <Text style={{width:290,height:250,backgroundColor:"#d3d3d3"}}>{getDiaryData.memo}</Text>
        </View>
    </View> 
        </ScrollView>
      

        </SafeAreaView> 
    )
}


const styles = StyleSheet.create({
            container: {
                flex: 1,
                alignContent: 'center',
                justifyContent: 'flex-start',
                paddingTop: Platform.OS === 'android' ? 25 : 0,
                backgroundColor: '#282828',
                flexDirection:'column'
            },
            writeContainer:{
                marginTop:25,
                marginLeft:39,
            },
            Text:{
                color: "#ffffff",
                fontSize:18
            }
            })