import { SafeAreaView,Platform,StyleSheet,Text,TextInput,View,Alert } from 'react-native'
import {Button} from 'react-native-elements'
import React,{ useState,useEffect, useCallback} from 'react';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { SIGNUP_REQUEST } from '../../store/user.state';

export default signUp=(props)=>{
  const[userId,SetId]=useState('')
  const[password,SetPassword]=useState('')
  const [name, SetName] = useState('')
  const [nickname,SetNickname] = useState('')
  const [check,SetCheck]=useState(false)
  const {isSignUping,signUpError,isSignUp}=useSelector(state=>state.user);
  const dispatch=useDispatch();

  const signup=useCallback(async(e)=>{
      if(userId===undefined){
       alert("아이디를 입력해주세요")
      }
      else if (password === undefined) {
        alert("비밀번호를 입력해주세요")
      }
      else if (nickname=== undefined) {
        alert("닉네임을 입력해주세요")
      }
       else if (check === false) {
           alert("비밀번호가 일치하지않습니다")
       }
       else{
          dispatch({
               type:SIGNUP_REQUEST,
               data:{
                   userId,
                   password,
                   nickname
               }
           })
       }
  },[userId,password,nickname])

  useEffect(()=>{
     if(signUpError.length!==0){ alert('회원 가입에 실패하였습니다.')}
     if (isSignUp && !isSignUping) {
         alert('회원가입에 성공하였습니다.');
         props.navigation.navigate('Login');
     }
  },[signUpError,isSignUp,isSignUping])
  
    return(
        <SafeAreaView style={styles.container}>
        <View style={styles.rowViewTop}>  
        <Text style={{color:"#d3d3d3",fontSize:18}}>ID</Text>
        <TextInput style={{marginLeft:117,  borderBottomColor:'#feabab',color:'#fff',
    borderBottomWidth:1}} placeholder="ID를 입력하세요                "  value={userId}  onChangeText={(text)=>{SetId(text)}}/>
    
        </View>
        <View  style={styles.rowView}>
            <Text style={{color:"#d3d3d3",fontSize:18}}>PASS</Text>
        <TextInput style={{marginLeft:83,  borderBottomColor:'#feabab',color:'#fff',
    borderBottomWidth:1}} placeholder="비밀번호를 입력하세요          " onChangeText={(text)=>SetPassword(text)}/>
        </View>
        <View  style={styles.rowView}>
         <Text style={{color:"#d3d3d3",fontSize:18}}>PASS-CHECK</Text>
        <TextInput style={{marginLeft:20,  borderBottomColor:'#feabab',color:'#fff',
    borderBottomWidth:1}} placeholder="비밀번호를 다시입력하세요      " onChangeText={(text)=>{text===password?SetCheck(true):SetCheck(false)}} />
         
        </View>
       <View  style={styles.rowView}>
            <Text style={{color:"#d3d3d3",fontSize:18}}>NICKNAME</Text>
        <TextInput style={{marginLeft:28,  borderBottomColor:'#feabab',color:'#fff',
    borderBottomWidth:1}} placeholder="닉네임을 입력하세요              " onChangeText={(text)=>{SetNickname(text)}} />
       </View>
       
        <Button type="clear" loading={isSignUping} containerStyle={styles.btn} onPress={()=>{signup()}} title="signUp"></Button>
         <Button type="clear" containerStyle={{...styles.btn,marginTop:15}} onPress={()=>{props.navigation.navigate('Login')}} title="cancel"></Button>
    {/* onChange와 onChangeText의 차이는 onChange는 함수를 이용해서 변경하는방법이다
        onChangeText input text를 매개변수로 보내는 메소드
    */}
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        alignContent: 'center',
        justifyContent: 'flex-start',
        paddingTop: Platform.OS === 'android' ? 25 : 0,
        backgroundColor:"#282828",
        elevation:-10
    },
    rowView:{
        flexDirection:'row',
        marginTop:30,
        elevation: 50,
        marginLeft:25,
        color:"#d3d3d3"
    },
     rowViewTop: {
         flexDirection: 'row',
         marginTop: 130,
        elevation:50,
         marginLeft:25,
          color: "#d3d3d3"
     },
     btn: {
         alignSelf: 'center',
         width: 238,
         height: 40,
         marginTop:85,
         backgroundColor: '#afafaf',
         borderRadius: 18,
     },
     Text:{
         color:"#fff"
     }
})
