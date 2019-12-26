import {View, SafeAreaView, ImageBackground,StyleSheet,Platform,Text,Image} from 'react-native'
import {ScrollView, TouchableOpacity, TextInput} from 'react-native-gesture-handler'
import React,{ useState, useEffect } from 'react'
import {Rating} from 'react-native-elements'
import { Row } from 'native-base'

export default WriteDiary=(props)=>{
    const [memo,setMemo]=useState('')
    const imagePicker=()=>{
        
    }
    //useEffect에서는 통신하는부분을 만든다
    return(
        <SafeAreaView style={styles.container}>    
            {/* < ImageBackground style={{width:100}} source = 'https://lorempixel.com/200/200/animals' / >
            < Image source = 'https://lorempixel.com/200/200/animals' / > */}
            <Text>영화제목</Text>
            <Text>영화 정보</Text>
        <ScrollView style={styles.scrollContainer}>
        <View style={{flexDirection:"row",marginTop:25}}> 
        <Text>Rating</Text>
        <Rating
             type='star'
             ratingCount={5}
             imageSize={18}
             onFinishRating={this.ratingCompleted}
        />
        </View>
        <View style={{flexDirection:"row",marginTop:24}}>
            <Text>Date</Text>
            <Text>____________</Text>
        </View>
         <View style={{marginTop:34}}>
            {/* <TouchableOpacity><Image source=""/></TouchableOpacity> */}
            <TouchableOpacity onPress={()=>{imagePicker()}}><Text>Add Photo</Text></TouchableOpacity>
        </View>
        <View style={{marginTop:29}}>
            <Text style={{marginBottom:20}}>MEMO</Text>
            <TextInput placeholder="메모를 입력해 주세요" multiline numberOfLines={10} onChangeText={(text)=>setMemo(Text)}/>
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
            scrollContainer:{
                marginTop:240,

            }
            })