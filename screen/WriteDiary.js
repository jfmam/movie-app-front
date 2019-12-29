import {View, SafeAreaView, ImageBackground,StyleSheet,Platform,Text,Image} from 'react-native'
import {ScrollView, TouchableOpacity, TextInput} from 'react-native-gesture-handler'
import React,{ useState, useEffect } from 'react'
import {Rating} from 'react-native-elements'
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import PxScrollView from 'react-native-parallax-scroll-view'
import Constants from 'expo-constants';

export default WriteDiary=(props)=>{
    const [memo,setMemo]=useState('');
    const [image1,setImage1]=useState();
    const [image2,setImage2]=useState('');
    const [image3,setImage3]=useState('');
    const [Invert,setInvert]=useState(false)
    const today=new Date();
    const year=today.getFullYear();
    const month=today.getMonth()+1;
    const date=today.getDate();

    useEffect(
         getPermission=async()=>{
       if(Constants.platform.android){
           const {status}=await Permissions.askAsync(Permissions.CAMERA_ROLL);
           if(status!=='granted'){
               alert('접근에 실패하였습니다!.');
           }
       }
        console.log("working!");
    },[])


    const imagePicker=async()=>{
        let result=await ImagePicker.launchImageLibraryAsync(
            {
                  mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,     
      quality: 1,
            }
        )
        console.log(result);

        if(!result.cancelled){
            setImage1(result.uri)
        }
    }
    //useEffect에서는 통신하는부분을 만든다
    return(
        <SafeAreaView style={styles.container}>    
            {/* < ImageBackground style={{width:100}} source = 'https://lorempixel.com/200/200/animals' / >
            < Image source = 'https://lorempixel.com/200/200/animals' / > */}
        <ScrollView 
        stickyHeaderIndices={[0]} style={styles.scrollContainer}>
        <View >
            <Text>전체배경</Text>
            <View>
            <Text>사진</Text>
            <View>
            <Text>영화제목</Text>
             <Text>영화 감독?</Text>      
            </View>    
            </View>    
        </View>    
        {Invert&&<View><Text>텍스트</Text></View>}
        <View style={{flexDirection:"row",marginTop:25}}> 
        <Text>Rating</Text>
        <Rating
             type='star'
             ratingCount={5}
             imageSize={18}
             onStartRating={0}
             onFinishRating={this.ratingCompleted}
        />
        </View>
        <View style={{flexDirection:"row",marginTop:24}}>
            <Text>Date</Text>
            <Text>{`${year}.${month}.${date}`} </Text>
        </View>
         <View style={{marginTop:34}}>
            {/* <TouchableOpacity><Image source=""/></TouchableOpacity> */}
           {!image1? <TouchableOpacity onPress={()=>{imagePicker()}}><Text>Add Photo</Text></TouchableOpacity>:
           <TouchableOpacity onPress={()=>{imagePicker()}}><Image source={image1}/></TouchableOpacity>
           }
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