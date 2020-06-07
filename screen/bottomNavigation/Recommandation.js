import React,{useEffect} from 'react';
import { StyleSheet, Text, View ,Platform,TouchableOpacity,SafeAreaView} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler'
import { useSelector } from 'react-redux';
import {MYDIARY_REQUEST,RECOMMAND_REQUEST} from '../../store/image.state'
const Recommandation =(props)=>{
    const {myDiaryImage,diaryLoading,}=useSelector(state=>state.image)
    useEffect(()=>{
        dispatch({type:MYDIARY_REQUEST,data:{userId:user.userId}})   
        dispatch({type:RECOMMAND_REQUEST})  
        if(!diaryLoading&&Object.keys(myDiaryImage).length!==0&&myDiaryImagemyDiaryImage.length<10){
            alert("다이어리 평점의 개수가 10개 미만입니다.");
            props.navigation.goBack();
        }
    },[])
         return (
          <SafeAreaView style={styles.container}>
            <ScrollView>
              {{recommandImage}? <FlatList  numColumns={3} keyExtractor={item => item.poster} data={recommandImage} renderItem={ renderItem = ({ item, index }) => (//data는 사진 주소 renderItem은 데이터를 뿌려준다
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
        },
});

export default Recommandation;