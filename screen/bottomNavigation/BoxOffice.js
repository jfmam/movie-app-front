import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet, Text, View,SafeAreaView, DatePickerAndroid} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler'
import {Button} from 'react-native-elements'
import { useDispatch, useSelector } from 'react-redux';
import { BOXOFFICE_REQUEST } from '../../store/image.state';


const items = [
    { thumbnail: { uri: 'http://file.koreafilm.or.kr/thm/02/00/01/25/tn_DPA000032.jpg' } },
    { thumbnail: { uri: 'http://file.koreafilm.or.kr/thm/02/00/01/03/tn_DPA000006.jpg' } },
    { thumbnail: { uri: 'http://file.koreafilm.or.kr/thm/02/00/01/05/tn_DPA000009.jpg' } },
    { thumbnail: { uri: 'http://file.koreafilm.or.kr/thm/02/00/01/46/tn_DPK004440.JPG' } },
];

export default function BoxOffice(){
    const date=new Date()
    const [years,setYear]=useState(`${date.getFullYear()}`)
    const [months,setMonth]=useState(`${date.getMonth()+1}`)
    const dispatch=useDispatch();
    const boxOfficeList=useSelector(state=>state.image.boxOfficeImage)
     //useEffect를 이용해 년도와 월이 바뀔때마다 업데이틉
    useEffect(()=>{
        dispatch({type:BOXOFFICE_REQUEST,data:{years,months}})//year와 month를 보내준다
        if(boxOfficeList){
            setboxOfficeImage(boxOfficeList)
        }
    },[boxOfficeList])

    let datePicker=async ()=>{
       try{
        const {action,year,month,day}=await DatePickerAndroid.open({
            date: new Date(),
            maxDate:new Date(),
            minDate:new Date(2003,0,1),
            mode:'spinner',
            day:false
        })
        if (action!== DatePickerAndroid.dismissedAction){
            setYear(year);
            setMonth(month+1);
        }
    }catch(e){
        console.log(e)
    }
;
    }

    return (
        <SafeAreaView style={styles.container}>
           <View style={styles.datePick}> 
            <Text style={{fontSize:19,color:"#d3d3d3"}}>Year</Text>
            <Button containerStyle={styles.btn} type="clear" title={`${years}`}  onPress={()=>{
              datePicker()
            }}/>
             <Text  style={{fontSize:19,color:"#d3d3d3",marginLeft:27}}>Month</Text>
            <Button containerStyle={styles.btn} type="clear" title={`${months}`}  onPress={()=>{ datePicker()}}/>
           </View>
            <ScrollView>
            {boxOfficeList&&<FlatList data={boxOfficeList} renderItem={ renderItem = ({ item, index }) => (//data는 사진 주소 renderItem은 데이터를 뿌려준다
    //data부분 boxOfficeImage로변경
        <View style={{flexDirection:'row'}}>
         <Text style={{fontSize:25, color:"#ffffff",marginLeft:20}}>{`${index+1}.`}</Text>
        <View style={{flex:1}}>
       <TouchableOpacity onPress={()=>{props.navigation.navigate('writeDiary')}}>
        <Image style={styles.image} title={index} source={item.thumbnail} />
        </TouchableOpacity>
        </View>
        <View style={{flex:1,marginTop:80,flexDirection:'column'}}>
                <Text style={styles.Text}>영화제목</Text>
                <Text style={styles.Text}>장르</Text>
                <Text style={styles.Text}>개봉일</Text>
                <Text style={styles.Text}>영화정보</Text>
        </View>
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
        backgroundColor: '#282828',
        alignItems: 'center',
        justifyContent: 'center'
    },
    datePick:{
        flexDirection:'row',
        marginTop:35,
        marginLeft:24,
        
    },
     image: {
         width: 115,
         height: 165,
         marginTop: 10,
         marginLeft:16,
     },
    btn:{
        width:80,
        height:30,
        borderRadius:50,
        backgroundColor:"#fff",
        marginLeft:17
    }
})
