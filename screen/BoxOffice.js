import React, { useState } from 'react';
import { StyleSheet, Text, View,SafeAreaView, DatePickerAndroid} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler'
import {Button} from 'react-native-elements'


export default function BoxOffice(){
    const date=new Date()
    const [years,setYear]=useState(`${date.getFullYear()}`)
     const [months,setMonth]=useState(`${date.getMonth()+1}`)
    let Count=1
     //useEffect를 이용해 년도와 월이 바뀔때마다 업데이틉
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
             <Text  style={{fontSize:19,color:"#d3d3d3"}}>Month</Text>
            <Button containerStyle={styles.btn} type="clear" title={`${months}`}  onPress={()=>{ datePicker()}}/>
           </View>
            <ScrollView>
           <Text>카운트</Text>

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
    btn:{
        width:80,
        height:30,
        borderRadius:50,
        backgroundColor:"#fff",
        fontSize:20,
        marginLeft:17
    }
})
