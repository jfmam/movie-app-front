import React from 'react';
import { Image, FlatList,StyleSheet,View, TouchableOpacity,TextInput,Text, SafeAreaView,Platform} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler'
import PlusButton from '../assets/plusBut.png'
import { useDispatch, useSelector } from 'react-redux';
import { MYDIARY_REQUEST } from '../../store/image.state';

const items = [
    { thumbnail: { uri: 'http://file.koreafilm.or.kr/thm/02/00/01/25/tn_DPA000032.jpg' } },
    { thumbnail: { uri: 'http://file.koreafilm.or.kr/thm/02/00/01/03/tn_DPA000006.jpg' } },
    { thumbnail: { uri: 'http://file.koreafilm.or.kr/thm/02/00/01/05/tn_DPA000009.jpg' } },
    { thumbnail: { uri: 'http://file.koreafilm.or.kr/thm/02/00/01/46/tn_DPK004440.JPG' } },
];
export default  DiaryScreen=(props)=>{
 
  const dispatch=useDispatch();
  const diaryList=useSelector(state=>state.image.myDiaryImage);
  const userInfo=useSelector(state=>state.user.id)
  useEffect(()=>{
    dispatch({type:MYDIARY_REQUEST,data:{userId:userInfo}})
    
  },[diaryList])
   
        return (
          <SafeAreaView style={styles.container}>
            <ScrollView>
              {diaryList&& <FlatList  data={diaryList} renderItem={ renderItem = ({ item, index }) => (//data는 사진 주소 renderItem은 데이터를 뿌려준다
        <View style={{flex:1}}>
       <TouchableOpacity onPress={()=>{props.navigation.navigate('getDiary')}}>
        <Image style={styles.image} title={index} source={item.thumbnail} />
        </TouchableOpacity>
        </View>
    )}
        numColumns={3}   />}
               </ScrollView> 
          <TouchableOpacity onPress={()=>{props.navigation.navigate('diarySearch')}} style={styles.plusBut}><Image source={PlusButton}></Image></TouchableOpacity>
        </SafeAreaView>    
        );
    }

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor:'#282828',
    alignContent: 'center',
    justifyContent: 'flex-start',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  image: {
    width: 115,
    height: 165,
    marginTop:10,
    marginLeft:29.5,
  },
   Text: {
     color: "#ffffff",
     fontSize: 18
   },
   plusBut:{
     position:'absolute',
     marginTop:535,
     marginLeft:310,
     width:39,
     height:39,
   }
});