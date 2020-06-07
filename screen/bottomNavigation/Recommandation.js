import React,{useEffect} from 'react';
import { StyleSheet, Text, View ,Platform,TouchableOpacity,SafeAreaView,FlatList,Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler'
import { useSelector,useDispatch } from 'react-redux';
import {MYDIARY_REQUEST,RECOMMAND_REQUEST} from '../../store/image.state'
const Recommandation =(props)=>{
    const {myDiaryImage,diaryLoading,recommandImage}=useSelector(state=>state.image)
    const dispatch=useDispatch();
    const {user}=useSelector(state=>state.user)
    useEffect(()=>{
        dispatch({type:MYDIARY_REQUEST,data:{userId:user.userId}});   
        dispatch({type:RECOMMAND_REQUEST});  
    },[])
     console.log(recommandImage)
         return (
          <SafeAreaView style={styles.container}>
            <ScrollView>
              {{recommandImage}? <FlatList  numColumns={3} keyExtractor={item => item.movieId} data={recommandImage} renderItem={ renderItem = ({ item, index }) => (//data는 사진 주소 renderItem은 데이터를 뿌려준다
        <View>
       <TouchableOpacity  style={styles.image}>
        {item.movie.poster?<Image style={styles.image} title={index} source={{uri:`${item.movie.poster}`}} />
        :<Text>이미지가 없습니다.</Text>
        }
        </TouchableOpacity>
        </View>
    )}
          />
      :<Text style={{alignContent:'center',justifyContent:'center',fontSize:19,color:"#fff"}}>등록된 추천이 없습니다.</Text>
      }
           </ScrollView> 
        </SafeAreaView>    
        );
}



const styles = StyleSheet.create({
     container: {
            flex: 1,
            alignContent: 'center',
            justifyContent: 'flex-start',
            paddingTop: Platform.OS === 'android' ? 25 : 0,
            backgroundColor:'#282828'           
        }, image: {
            width: 115,
            height: 165,
            margin: 3,
        },
});

export default Recommandation;