import React,{useEffect} from 'react';
import { StyleSheet, Text, View ,Platform} from 'react-native';
import { useSelector } from 'react-redux';

const Recommandation =(props)=>{
    const {myDiaryImage,diaryLoading}=useSelector(state=>state.image)
    useEffect(()=>{
        dispatch({type:MYDIARY_REQUEST,data:{userId:user.userId}})     
        if(!diaryLoading&&Object.keys(myDiaryImage).length!==0&&myDiaryImagemyDiaryImage.length<10){
            alert("다이어리 평점의 개수가 10개 미만입니다.");
            props.navigation.goBack();
        }
    },[])
        return (
            <View style={styles.container}>
                <Text>추천</Text>
            </View>
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