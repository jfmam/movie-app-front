import {View, SafeAreaView, ImageBackground,StyleSheet,Platform,Text,Image,TextInput} from 'react-native'
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler'
import React,{ useState, useCallback, useEffect } from 'react'
import {Rating, ButtonGroup} from 'react-native-elements'
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
import ImageInfo from '../../components/diaryImageInfo'
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-native-paper';
import { WRITEDIARY_REQUEST, WRITEDIARYIMAGE_REQUEST } from '../../store/post.state';
import plusBtn from '../../assets/plusBut.png'

export default WriteDiary=(props)=>{
    let cnt=0;
    const {params}=props.navigation.state
    const movieId=params?params.movieId:null
    
    const [memo,setMemo]=useState('');
    const [rating,setRating]=useState(0);
    const [image1,setImage1]=useState('')
    const [image2,setImage2]=useState('')
    const [image3,setImage3]=useState('')
    const [check,setCheck]=useState(false);

    const today=new Date();
    const year=today.getFullYear();
    const month=today.getMonth()+1;
    const date=today.getDate();
    
    const dispatch=useDispatch();
    const {user}=useSelector(state=>state.user)
    const {address,updateLoding}=useSelector(state=>state.post)
    
    const ratingCompleted=(rating)=>{
        setRating(rating)   
    }
    const setText=useCallback((text)=>{
        setMemo(text);
    },[memo])
    const formData=new FormData('')


    const sendDiary=useCallback(async()=>{     
         dispatch({
            type:WRITEDIARY_REQUEST,
            data:{
                userId:user.id,
                movieId:movieId,
                memo:memo,
                createDate:`${year}${month}${date}`,
                image:Object.keys(address).length===0?null:address,
                rating:rating
            }
        })
        setCheck(true);
    },[user.id,movieId,memo,address,year,month,date,rating,check])
    //useSelector를 이용해서 사진가져오고 prpos로보내주기
    const getPermission=useCallback (async(n)=>{
         if (!Constants.platform.ios) {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status!== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
      else{
          await imagePicker(n)
      }
    }
    },[])

    const imagePicker=useCallback(async(n)=>{
        let result=await ImagePicker.launchImageLibraryAsync(
            {
              mediaTypes: ImagePicker.MediaTypeOptions.All,
              allowsEditing: false,     
              quality: 1,
            }
        )

        if(!result.cancelled){
            if(n===1){
                  if(image1!==''){
                    formData.delete(image1);
                    cnt--;
                }
                setImage1(result.uri);
                cnt++;
            }
            else if(n===2){
                    if(image2!==''){
                    formData.delete(image2);
                     cnt--;
                }
                setImage2(result.uri);
                cnt++;
            }
            else if(n===3){
                    if(image3){
                    formData.delete(image3);
                     cnt--;
                }
                setImage3(result.uri);
                cnt++;
            }
        }
         formData.append('image',{uri:result.uri,type:'image/jpg',name:result.uri})
             if(cnt===3){
     dispatch({
         type: WRITEDIARYIMAGE_REQUEST,
         data: formData
     })
    }
    },[])
    useEffect(()=>{
        if(!updateLoding&&check) props.navigation.navigate('DiaryScreen');
    }, [updateLoding,check])

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
                />
        </View>
        <View style={{flexDirection:"row",marginTop:24}}>
            <Text  style={styles.Text}>Date </Text>
            <Text  style={styles.Text}>{`${year}.${month}.${date}`} </Text>
        </View>
        <View style={{flexDirection:'row'}}>
         <View style={{marginTop:34}}>
           {!image1? <TouchableOpacity style={{marginRight:15}} onPress={()=>{getPermission(1)}}><Image source={plusBtn}/><Text style={styles.Text}>Add Photo</Text></TouchableOpacity>:
           <TouchableOpacity onPress={()=>{imagePicker(1)}}><Image style={{ width: 80, height: 115 }}  source={{uri:image1}}/></TouchableOpacity>
           }
        </View>
        <View style={{marginTop:34}}>
           {!image2? <TouchableOpacity style={{marginRight:15}} onPress={()=>{getPermission(2)}}><Image source={plusBtn}/><Text style={styles.Text}>Add Photo</Text></TouchableOpacity>:
           <TouchableOpacity onPress={()=>{imagePicker(2)}}><Image style={{ width: 80, height: 115 }}  source={{uri:image2}}/></TouchableOpacity>
           }
        </View>
        <View style={{marginTop:34}}>
           {!image3? <TouchableOpacity onPress={()=>{getPermission(3)}}><Image source={plusBtn}/><Text style={styles.Text}>Add Photo</Text></TouchableOpacity>:
           <TouchableOpacity onPress={()=>{imagePicker(3)}}><Image style={{ width: 80, height: 115 }}  source={{uri:image3}}/></TouchableOpacity>
           }
        </View>
        </View>
        <View style={{marginTop:29}}>
            <Text style={{...styles.Text,marginBottom:20}}>MEMO</Text>
            <TextInput style={{width:290,height:250,backgroundColor:"#d3d3d3"}} placeholder="메모를 입력해 주세요" multiline numberOfLines={10} onChangeText={(text)=>setText(text)}/>
        </View>
    </View> 
    <View style={{flexDirection:'row'}}>
        <Button style={styles.buttonGroup} onPress={sendDiary}>OK</Button>
        <Button  style={styles.buttonGroup} onPress={()=>props.navigation.goBack()}>Cancel</Button>
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
            },
            buttonGroup:{
                borderColor:"#d3d3d3",
                textAlignVertical:"center",
                width:"50%",
                height:70,
                color: "#ffffff",
                fontSize:18     
            }
            })