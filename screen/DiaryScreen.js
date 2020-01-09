import React from 'react';
import { Image, FlatList,StyleSheet,View, TouchableOpacity,TextInput,Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler'

const items = [
    { thumbnail: { uri: 'http://file.koreafilm.or.kr/thm/02/00/01/25/tn_DPA000032.jpg' } },
    { thumbnail: { uri: 'http://file.koreafilm.or.kr/thm/02/00/01/03/tn_DPA000006.jpg' } },
    { thumbnail: { uri: 'http://file.koreafilm.or.kr/thm/02/00/01/05/tn_DPA000009.jpg' } },
    { thumbnail: { uri: 'http://file.koreafilm.or.kr/thm/02/00/01/46/tn_DPK004440.JPG' } },
];
export default  DiaryScreen=(props)=>{

   
        return (
            <ScrollView style={styles.container}>
               <FlatList data={items} renderItem={ renderItem = ({ item, index }) => (//data는 사진 주소 renderItem은 데이터를 뿌려준다
       <View>
        <View style={{flexDirection:'row'}}>
        <View style={{flex:1}}>
       <TouchableOpacity onPress={()=>{props.navigation.navigate('writeDiary')}}>
        <Image style={styles.image} title={index} source={item.thumbnail} />
        </TouchableOpacity>
        </View>
        <View style={{flex:1,marginTop:80}}>
                <Text style={styles.Text}>영화정보</Text>
        </View>
        </View>
         <TextInput editable={false} underlineColorAndroid="#d3d3d3"/>
         </View>
    )}
        numColumns={1}   />
               </ScrollView> 
        );
    }

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor:'#282828'
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
   }
});