import {View, SafeAreaView, ImageBackground,StyleSheet,Platform,Text,Image,TextInput} from 'react-native'
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler'
import React,{ useState, useCallback } from 'react'
import {Rating, ButtonGroup} from 'react-native-elements'
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
import ImageInfo from '../../components/imageInfo'
import { useDispatch, useSelector } from 'react-redux';
import { DIARYSEARCH_REQUEST } from '../../store/search.state';
import { Button } from 'react-native-paper';
import { WRITEDIARY_REQUEST, WRITEDIARYIMAGE_REQUEST } from '../../store/post.state';


export default WriteDiary=(props)=>{
    const [memo,setMemo]=useState('');
    const [rating,setRating]=useState(0);
    const buttons=['OK','Cancel']
    const [image1,setImage1]=useState('');//배열로 하고 push를 쓰자
    const [image2,setImage2]=useState('');
    const [image3,setImage3]=useState('');
    
    const today=new Date();
    const year=today.getFullYear();
    const month=today.getMonth()+1;
    const date=today.getDate();
    
    const dispatch=useDispatch();
    const {user}=useSelector(state=>state.user)
    const ratingCompleted=(rating)=>{
        setRating(rating)   
    }
    const sendDiary=useCallback(async()=>{
        let formData=new FormData();
        await formData.append('image',{uri:image1,type:'image/jpg'})
        await formData.append('image',{uri:image2,type:'image/jpg'})
        await formData.append('image',{uri:image3,type:'image/jpg'})
       
        await dispatch({
            type:WRITEDIARYIMAGE_REQUEST,
            data:formData
        })//먼저 image값을 보낸뒤에한다
         dispatch({
            type:WRITEDIARY_REQUEST,
            data:{userId:user.userId,
                movieId:props.movieId,//??,
                memo:memo,
                createDate:today
            }
        })
        
    })
    //useSelector를 이용해서 사진가져오고 prpos로보내주기
    const getPermission=async(n)=>{
         if (!Constants.platform.ios) {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status!== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
      else{
          await imagePicker(n)
      }
    }
    }

    const imagePicker=async(n)=>{
        let result=await ImagePicker.launchImageLibraryAsync(
            {
              mediaTypes: ImagePicker.MediaTypeOptions.All,
              allowsEditing: false,     
              quality: 1,
            }
        )
        console.log(result.uri);

        if(!result.cancelled){
            setImage`${n}`(result.uri)
        }
    }
    //useEffect에서는 통신하는부분을 만든다
   
    return(
        <SafeAreaView style={styles.container}>    
        <ScrollView stickyHeaderIndices={[1]} >
        <ImageInfo image={props.movieId}/>
        <View style={styles.writeContainer}> 
            <View style={{flexDirection:"row"}}>
                <Text  style={styles.Text}>Rating </Text>
                <Rating
                 type='star'
                imageSize={18}
                onFinishRating={ratingCompleted}
                onStartRating={5}/>
        </View>
        <View style={{flexDirection:"row",marginTop:24}}>
            <Text  style={styles.Text}>Date </Text>
            <Text  style={styles.Text}>{`${year}.${month}.${date}`} </Text>
        </View>
        <View style={{flexDirection:'row'}}>
         <View style={{marginTop:34}}>
           {!image1? <TouchableOpacity onPress={()=>{getPermission(1)}}><Text style={styles.Text}>Add Photo</Text></TouchableOpacity>:
           <TouchableOpacity onPress={()=>{imagePicker(1)}}><Image style={{ width: 80, height: 115 }}  source={{uri:image1}}/></TouchableOpacity>
           }
        </View>
        <View style={{marginTop:34}}>
           {!image2? <TouchableOpacity onPress={()=>{getPermission(2)}}><Text style={styles.Text}>Add Photo</Text></TouchableOpacity>:
           <TouchableOpacity onPress={()=>{imagePicker(2)}}><Image style={{ width: 80, height: 115 }}  source={{uri:image1}}/></TouchableOpacity>
           }
        </View>
        <View style={{marginTop:34}}>
           {!image3? <TouchableOpacity onPress={()=>{getPermission(3)}}><Text style={styles.Text}>Add Photo</Text></TouchableOpacity>:
           <TouchableOpacity onPress={()=>{imagePicker(3)}}><Image style={{ width: 80, height: 115 }}  source={{uri:image1}}/></TouchableOpacity>
           }
        </View>
        </View>
        <View style={{marginTop:29}}>
            <Text style={{...styles.Text,marginBottom:20}}>MEMO</Text>
            <TextInput style={{width:290,height:250,backgroundColor:"#d3d3d3"}} placeholder="메모를 입력해 주세요" multiline numberOfLines={10} onChangeText={(text)=>setMemo(text)}/>
        </View>
    </View> 
    <View style={{flexDirection:'row'}}>
        <Button onPress={()=>{sendDiary()}}>OK</Button>
        <Button>Cancel</Button>
        {/* 뒤로가기 어케하는지몰랑 ㅎ.. */}
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