import React from 'react'
import {Text,View,StyleSheet} from 'react-native'
import Top from '../components/Top'
import { useSelector } from 'react-redux'

const Wishlist=()=>{
    const {wishListImage}=useSelector(state=>state.image)
      return (
          <SafeAreaView style={styles.container}>
            <ScrollView>
              {{wishListImage}? <FlatList data={myDiaryImage} renderItem={ renderItem = ({ item, index }) => (//data는 사진 주소 renderItem은 데이터를 뿌려준다
        <View style={{flex:1}}>
       <TouchableOpacity diaryData={item} onPress={()=>{
         dispatch({
           type:MOVIE_DETAIL,
           data:item
         })
         props.navigation.navigate('movieInfo')}}>
        {item.poster?<Image style={styles.image} title={index} source={{uri:`${item.poster}`}} />
        :<Text>이미지가 없습니다.</Text>
        }
        </TouchableOpacity>
        </View>
    )}
        numColumns={3}  />
      :<Text style={{alignContent:'center',justifyContent:'center',fontSize:19,color:"#fff"}}>등록된 다이어리가 없습니다.</Text>
      }
           </ScrollView> 
        </SafeAreaView>    
        );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
});

export default Wishlist;