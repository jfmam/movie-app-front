import React,{useEffect, useCallback} from 'react';
import { Image, FlatList,StyleSheet,View, TouchableOpacity,TextInput,Text, SafeAreaView,Platform} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler'
import PlusButton from '../../assets/plusBut.png'
import { useDispatch, useSelector } from 'react-redux';
import { MYDIARY_REQUEST } from '../../store/image.state';
import {MOVIE_DETAIL, MOVIESEARCH_REQUEST} from '../../store/search.state'


export default  DiaryScreen=(props)=>{
  const dispatch=useDispatch();
  const {myDiaryImage}=useSelector(state=>state.image);
  const {user}=useSelector(state=>state.user)
  const {movieSearchLoading,movieSearch}=useSelector(state=>state.search)
  const movieSearchFunc=useCallback(item=>()=>{
     dispatch({
           type:MOVIESEARCH_REQUEST,
           data:{id:item.movieId}
         })
         dispatch({
           type:MOVIE_DETAIL,
           data:item
         })
         props.navigation.navigate('getDiary')
  },[])

  useEffect(()=>{
    dispatch({type:MYDIARY_REQUEST,data:{userId:user.userId}})
  },[])
  
        return (
          <SafeAreaView style={styles.container}>
            <ScrollView>
              {{myDiaryImage}? <FlatList  numColumns={3} keyExtractor={item => item.poster} data={myDiaryImage} renderItem={ renderItem = ({ item, index }) => (//data는 사진 주소 renderItem은 데이터를 뿌려준다
        <View>
       <TouchableOpacity  style={styles.image} diaryData={item} onPress={movieSearchFunc(item)}>
        {item.poster?<Image style={styles.image} title={index} source={{uri:`${item.poster}`}} />
        :<Text>이미지가 없습니다.</Text>
        }
        </TouchableOpacity>
        </View>
    )}
          />
      :<Text style={{alignContent:'center',justifyContent:'center',fontSize:19,color:"#fff"}}>등록된 다이어리가 없습니다.</Text>
      }
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
    margin:3,
  },
   TextStyle: {
     color: "#ffffff",
     fontSize: 18
   },
   plusBut:{
     position:'absolute',
     marginTop:490,
     marginLeft:290,
     width:39,
     height:39,
   }
});