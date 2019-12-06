import {View, SafeAreaView,StyleSheet,Platform} from 'react-native'
import {ScrollView} from 'react-native-gesture-handler'
import React,{ useState, useEffect } from 'react'

export default  getDiary=(props)=>{
    const [myMovie,getMyMovie]=useState([])//movie를 띄워준다
    useEffect()// 다이어리 추가시에 movie계속해서변환 
    
    return(
        <SafeAreaView style={styles.container}>
        
        <Text>get Diary</Text>
       
        </SafeAreaView> 
    )
}

const styles = StyleSheet.create({
            container: {
                flex: 1,
                alignContent: 'center',
                justifyContent: 'flex-start',
                paddingTop: Platform.OS === 'android' ? 25 : 0,
                backgroundColor: '#282828'
            }
            })