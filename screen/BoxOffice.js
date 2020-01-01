import React, { useState } from 'react';
import { StyleSheet, Text, View,SafeAreaView, DatePickerAndroid } from 'react-native';
import {ScrollView} from 'react-native-gesture-handler'
import {Button} from 'react-native-elements'


export default function BoxOffice(){
    const date=new Date()
    const [year,setYear]=useState(`${date.getFullYear()}`)
     const [month,setMonth]=useState(`${date.getMonth()+1}`)
    let Count=1
     //useEffect를 이용해 년도와 월이 바뀔때마다 업데이틉
//     const datePicker=async ()=>{
//        try{
//         const {action,Year,Month}=await DatePickerAndroid.open({
//             date: new Date(),
//             maxDate:new Date(),
//             mode:'spinner'
//         })
//         if (action !== DatePickerAndroid.dismissedAction){
//             setYear(Year);
//             setMonth(Month+1);
//         }
//     }catch{
//         console.log('error')
//     }
// ;
    // }
    return (
        <SafeAreaView style={styles.container}>
           <View style={styles.datePick}> 
            <Text>Year</Text>
            <Button containerStyle={styles.btn} type="clear" title={year} onPress={()=>{datePicker()}}/>
             <Text>Month</Text>
            <Button containerStyle={styles.btn} type="clear" title={month} onPress={()=>{datePicker()}}>{month}</Button>
           </View>
            }
            <ScrollView>
                <Text>{Count++}</Text>

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
        marginLeft:24
    },
    btn:{
        width:80,
        height:30,
        borderRadius:50,
        backgroundColor:"#fff"
        
    }
})
