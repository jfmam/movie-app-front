import {View, SafeAreaView} from 'react-native'
import {ScrollView} from 'react-native-gesture-handler'
import { useState, useEffect } from 'react'

export default WriteDiary=(props)=>{
    const [myMovie,getMyMovie]=useState([])//movie를 띄워준다
    useEffect()// 다이어리 추가시에 movie계속해서변환 
    
    return(
        <SafeAreaView style={styles.container}>
        <ScrollView>
        <Text>get Diary</Text>
        </ScrollView>
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