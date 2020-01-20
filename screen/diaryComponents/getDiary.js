import {View, SafeAreaView, ImageBackground,StyleSheet,Platform,Text,Image} from 'react-native'
import {ScrollView, TouchableOpacity, TextInput} from 'react-native-gesture-handler'
import React,{ useState, useEffect, useCallback } from 'react'
import {Rating} from 'react-native-elements'
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
import ImageInfo from '../../components/imageInfo'
import { useDispatch } from 'react-redux';

const dummyImage=[
   'http://file.koreafilm.or.kr/thm/02/00/01/25/tn_DPA000032.jpg',
   'http://file.koreafilm.or.kr/thm/02/00/01/03/tn_DPA000006.jpg',
   'http://file.koreafilm.or.kr/thm/02/00/01/05/tn_DPA000009.jpg',
  'http://file.koreafilm.or.kr/thm/02/00/01/46/tn_DPK004440.JPG' 
];

export default WriteDiary=(props)=>{
    const [ratingValue,setRatingValue]=useState(0)
    const dispatch=useDispatch();
    const ratingCompleted=useCallback((rating)=>{
        
    },[rating])

    return(
        <SafeAreaView style={styles.container}>    
        <ScrollView 
        stickyHeaderIndices={[1]} >
        <ImageInfo image={dummyImage[1]}/>
        {/* props로 image를 보내줘야함 */}
    
        <View style={styles.writeContainer}> 
        <View style={{flexDirection:"row"}}>
        <Text  style={styles.Text}>Rating </Text>
        <Rating
             type='star'
             readonly={true}
             ratingCount={5}
             imageSize={18}
             onFinishRating={this.ratingCompleted}
             onStartRating={5}
        />
        </View>
        <View style={{flexDirection:"row",marginTop:24}}>
            <Text  style={styles.Text} >Date </Text>
            <Text  style={styles.Text}>{`${year}.${month}.${date}`} </Text>
        </View>
         <View style={{marginTop:34}}>
            {/* <TouchableOpacity><Image source=""/></TouchableOpacity> */}
           {!image1? <TouchableOpacity onPress={()=>{getPermission()}}><Text style={styles.Text}>Add Photo</Text></TouchableOpacity>:
           <TouchableOpacity onPress={()=>{imagePicker()}}><Image style={{ width: 80, height: 115 }}  source={{uri:image1}}/></TouchableOpacity>
           }
        </View>
        <View style={{marginTop:29}}>
            <Text style={{...styles.Text,marginBottom:20}}>MEMO</Text>
            <TextInput placeholder="메모를 입력해 주세요" multiline numberOfLines={10} onChangeText={(text)=>setMemo(Text)}/>
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