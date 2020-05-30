import React, { useEffect } from 'react'
import {Text,View,StyleSheet,SafeAreaView,TouchableOpacity,FlatList,Image,Platform} from 'react-native'
import {ScrollView} from 'react-native-gesture-handler'
import { useSelector, useDispatch } from 'react-redux'
import { WISHLIST_REQUEST } from '../store/user.state'
import { MOVIE_DETAIL } from '../store/search.state'

const Wishlist=(props)=>{
    const {wishListImage}=useSelector(state=>state.user)
    const dispatch=useDispatch();
    
    useEffect(()=>{
      dispatch({
        type:WISHLIST_REQUEST
      })
    },[])
      return (
          <SafeAreaView style={styles.container}>
            <ScrollView>
              {wishListImage&&<FlatList data={wishListImage} renderItem={ renderItem = ( {item, index} ) => (//data는 사진 주소 renderItem은 데이터를 뿌려준다
        <View>
     
        {item.poster? <Image style={styles.image}  source={{uri:`${item.poster}`}} />
        :<Text>이미지가 없습니다.</Text>
        }
        </View>
    )}
        numColumns={3}  />
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
            backgroundColor:'#282828',
    },  
    image: {
    width: 115,
    height: 165,
    margin:3,
    marginLeft:11,
  },
   Text: {
     color: "#ffffff",
     fontSize: 18
   },
});

export default Wishlist;