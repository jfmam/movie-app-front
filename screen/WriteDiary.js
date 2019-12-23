import {View, SafeAreaView, ImageBackground,StyleSheet,Platform,Text,Image} from 'react-native'
import {ScrollView, TouchableOpacity, TextInput} from 'react-native-gesture-handler'
import React,{ useState, useEffect } from 'react'
import {Rating} from 'react-native-elements'

export default WriteDiary=(props)=>{
    const [memo,setMemo]=useState('')
    const imagePicker=()=>{

    }
    return(
        <SafeAreaView style={styles.container}>    
            {/* < ImageBackground style={{width:100}} source = 'https://lorempixel.com/200/200/animals' / >
            < Image source = 'https://lorempixel.com/200/200/animals' / > */}
            <Text>영화제목</Text>
            <Text>영화 정보</Text>
        <ScrollView>
        <View>
        <Text>Rating</Text>
        <Rating
             type='star'
             ratingCount={5}
             imageSize={18}
             onFinishRating={this.ratingCompleted}
        />
        </View>
        <View>
            <Text>Date</Text>
            <Text>____________</Text>
        </View>
         <View>
            {/* <TouchableOpacity><Image source=""/></TouchableOpacity> */}
            <TouchableOpacity onPress={()=>{imagePicker()}}><Text>Add Photo</Text></TouchableOpacity>
        </View>
        <TextInput multiline numberOfLines={10} onChangeText={(text)=>setMemo(Text)}/>
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
            }
            })