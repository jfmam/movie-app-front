import { SafeAreaView,Platform,StyleSheet,Text,TextInput,View,Alert } from 'react-native'
import {Button} from 'react-native-elements'
import React,{ useState,useEffect} from 'react';
import axios from 'axios'
import {authAdress} from '../../api/api'
import { useDispatch } from 'react-redux';
import { SIGNUP_REQUEST } from '../../store/user.state';

export default signUp=()=>{
  const[id,SetId]=useState('')
  const[password,SetPassword]=useState('')
  const [name, SetName] = useState('')
  const [nickname,SetNickname] = useState('')
  const [check,SetCheck]=useState(false)
  const dispatch=useDispatch();
    const onChangeid = e => {
        SetId(e.target.value);
    };
  signUp=()=>{
      if(id===undefined){
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
                userId:id,
                password,
                nickname
               }
           })
       }
  }
    return(
        <SafeAreaView style={styles.container}>
        <View style={styles.rowViewTop}>  
        <Text style={{color:"#d3d3d3",fontSize:18}}>ID</Text>
        <TextInput style={{marginLeft:117,  borderBottomColor:'#feabab',
    borderBottomWidth:1}} placeholder="ID를 입력하세요                "  value={id}  onChangeText={(text)=>{SetId(text)}}/>
    
        </View>
        <View  style={styles.rowView}>
            <Text style={{color:"#d3d3d3",fontSize:18}}>PASS</Text>
        <TextInput style={{marginLeft:83,  borderBottomColor:'#feabab',
    borderBottomWidth:1}} placeholder="비밀번호를 입력하세요          " onChangeText={(text)=>SetPassword(text)}/>
        </View>
        <View  style={styles.rowView}>
         <Text style={{color:"#d3d3d3",fontSize:18}}>PASS-CHECK</Text>
        <TextInput style={{marginLeft:20,  borderBottomColor:'#feabab',
    borderBottomWidth:1}} placeholder="비밀번호를 다시입력하세요      " onChangeText={(text)=>{text===password?SetCheck(true):SetCheck(false)}} />
         
        </View>
       <View  style={styles.rowView}>
            <Text style={{color:"#d3d3d3",fontSize:18}}>NAME</Text>
        <TextInput style={{marginLeft:83,  borderBottomColor:'#feabab',
    borderBottomWidth:1}} placeholder="이름을 입력하세요              " onChangeText={(text)=>{SetName(text)}} />
       </View>
         <View  style={styles.rowView}>
         <Text style={{color:"#d3d3d3",fontSize:18}}>NICKNAME</Text>
        <TextInput style={{marginLeft:25,  borderBottomColor:'#feabab',
    borderBottomWidth:1}} placeholder="닉네임을 입력하세요            " onChangeText={(text)=>{SetNickname(text)}} />
        </View>
        <Button type="clear" containerStyle={styles.btn} onPress={()=>{signUp()}} title="signUp"></Button>
         <Button type="clear" containerStyle={styles.btn} onPress={()=>{signUp()}} title="cancel"></Button>
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
         alignItems:'stretch',
         alignContent:'space-around',
         width: 238,
         height: 40,
         marginBottom:20,
         marginTop:30,
         backgroundColor: '#afafaf',
         borderRadius: 18,
     },
})
