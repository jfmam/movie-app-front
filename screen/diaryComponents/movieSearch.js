import React,{useState,useCallback,useEffect} from 'react';
import { Image, FlatList,StyleSheet,View, TouchableOpacity,TextInput,Text, SafeAreaView,Platform} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler'
import {SearchBar} from 'react-native-elements'
import { DIARYSEARCH_REQUEST } from '../../store/search.state';
import { useSelector,useDispatch } from 'react-redux';

const items = [
    { thumbnail: { uri: 'http://file.koreafilm.or.kr/thm/02/00/01/25/tn_DPA000032.jpg' } },
    { thumbnail: { uri: 'http://file.koreafilm.or.kr/thm/02/00/01/03/tn_DPA000006.jpg' } },
    { thumbnail: { uri: 'http://file.koreafilm.or.kr/thm/02/00/01/05/tn_DPA000009.jpg' } },
    { thumbnail: { uri: 'http://file.koreafilm.or.kr/thm/02/00/01/46/tn_DPK004440.JPG' } },
];
export default MovieSearchScreen=(props)=>{
    const [search,setSearch]=useState(null)
    const dispatch=useDispatch();
    const {diarySearch,diarySearchLoading,Search}=useSelector(state=>state.search)
     setSearch(Search);

    
   
//    이부분은 지금은 componentState 처리했지만 나중에 리덕스로처리해야한다
    // useEffect(()=>{
    //     dispatch({
    //       type:DIARYSEARCH_REQUEST,//영화검색부분
    //       data:{korTitle:search}
    //     })
    // },[search])
  
        return (
          <SafeAreaView style={styles.container}>
        <SearchBar 
        onChangeText={(text)=>setSearch(text)}
        value={search}
        platform="android"
        containerStyle={styles.search}
        maxLength={20} 
        showLoading={diarySearchLoading}
        placeholder="영화를 한국 제목으로 검색하세요"
      />
        <ScrollView>
               {diarySearch&&<FlatList data={diarySearch} renderItem={ renderItem = ({ item, index }) => (//data는 사진 주소 renderItem은 데이터를 뿌려준다
       <View>
        <View style={{flexDirection:'row'}}>
        <View style={{flex:1}}>
       <TouchableOpacity moiveId={diarySearch.id} onPress={()=>{props.navigation.navigate('movieInfo')}}>
        <Image style={styles.image} title={index} source={{uri:item.poster}} />
        </TouchableOpacity>
        </View>
        <View style={{flex:1,marginTop:80,flexDirection:'column'}}>
               <Text style={styles.Text}>{item.korTitle}</Text>
               <Text style={styles.Text}>{item.genres}</Text>
               <Text style={styles.Text}>{item.makingNation}</Text>
               <Text style={styles.Text}>{item.releaseDate}</Text>
        </View>
        </View>
         <TextInput editable={false} underlineColorAndroid="#d3d3d3"/>
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