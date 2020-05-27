import React,{useState,useCallback,useEffect} from 'react';
import { Image, FlatList,StyleSheet,View, TouchableOpacity,TextInput,Text,Button, SafeAreaView,Platform} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler'
import {SearchBar} from 'react-native-elements'
import { DIARYSEARCH_REQUEST,MOVIESEARCH_REQUEST, MOVIE_DETAIL } from '../../store/search.state';
import { useSelector,useDispatch } from 'react-redux';

export default  DiarySearchScreen=(props)=>{
    const [search,setSearch]=useState('')

    const {params}=props.navigation.state
     const title=params?params.title:null
    const dispatch=useDispatch();
    const {diarySearch,diarySearchLoading}=useSelector(state=>state.search)

    const movieSearch=useCallback((text)=>{
      setSearch(text)
      dispatch({
        type:DIARYSEARCH_REQUEST,
        data:{
          korTitle:text
        }
      })
    },[search])
    const movieDetail=useCallback((item)=>{
          dispatch({
            type: MOVIE_DETAIL,
            data: item
          })
          dispatch({
            type:MOVIESEARCH_REQUEST,
            data:{
              id:item.id
            }
          })
          props.navigation.navigate('movieInfo',{movieId:item.id});
    },[])
 
        return (
          <SafeAreaView style={styles.container}>
        <SearchBar    
        onChangeText={(text)=>movieSearch(text)}
        value={search}
        platform="android"
        containerStyle={styles.search}
        maxLength={20} 
        defaultValue={title}
        showLoading={diarySearchLoading}
        placeholder="영화를 한국 제목으로 검색하세요"
      />
        <ScrollView>
               {diarySearch&&<FlatList data={diarySearch}  renderItem={ renderItem = ({ item, index }) => (//data는 사진 주소 renderItem은 데이터를 뿌려준다
       <View key={index}>
        <View style={{flexDirection:'row'}}>
        <View style={{flex:1}}>
       <TouchableOpacity key={index} movieId={item.id} onPress={()=>{
         movieDetail(item);}}>
        <Image style={styles.image} title={index} key={index} source={{uri:item.poster}} />
        </TouchableOpacity>
        </View>
        <View key={index} style={{flex:1,marginTop:80,flexDirection:'column'}}>
               <Text style={styles.Text}>{item.korTitle}</Text>
               <Text style={styles.Text}>{item.genres}</Text>
               <Text style={styles.Text}>{item.makingNation}</Text>
               <Text style={styles.Text}>{item.releaseDate}</Text>
        </View>
        </View>
         <TextInput  key={index} editable={false} underlineColorAndroid="#d3d3d3"/>
         </View>
    )}
        numColumns={1}   />}
               </ScrollView>
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
    search:{
     marginTop: 30, 
     backgroundColor: "#d3d3d3",
     width:271,
     alignSelf:'center',
     borderRadius:20,  
        },
  
});