import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput,Text, View,SafeAreaView,Platform} from 'react-native';
import {Button,} from 'react-native-elements'
import {useDispatch} from 'react-redux'
import axios from 'axios'
import {authAdress} from '../api/api'
import { LOGIN_REQUEST } from '../store/user.state';

export default Login=(props)=>{
    const [id,setId]=useState("")
    const [password,setPassword]=useState("")
    
    const dispatch=useDispatch();
    const loginUser=()=>{
        dispatch(
            {type:LOGIN_REQUEST,
            data:{
                userId:id,//res.body 부분과맞쳐주어야한다
                passowrd:password
            }//data,type모두 액션에 포함된다
            }
        )
         }
        
    
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.idView}>
                    <Text style={styles.idText}>ID</Text>
            <TextInput style={styles.id} value={id} onChange={e=>setId(e.target.value)} placeholder='아이디를 입력해주세요  '/>
            </View>
            <View style={styles.pwdView}>
                <Text style={styles.pwdText}>PASS</Text>
            <TextInput secureTextEntry={true} value={password} onChange={e=>setPassword(e.target.value)} style={styles.id} placeholder='패스워드를 입력해주세요'/>  
            </View>
            <Button  type="clear" containerStyle={styles.btn} title="로그인" onPress={()=>{props.navigation.navigate('App')} }></Button>  
             <Button type="clear" containerStyle={styles.btn} title="회원가입" onPress={()=>{props.navigation.navigate('SignUp')} }></Button>  
            </SafeAreaView>
        );
    }


const styles=StyleSheet.create({
    
    container:{
        flex:1,
        justifyContent:'flex-start',
        paddingTop: Platform.OS === 'android' ? 25 : 0,
        backgroundColor:"#282828"
    },
    id:{
    fontSize:20,
    borderBottomColor:'#d3d3d3',
    borderBottomWidth:1,
    color:"#d3d3d3"
    },
    idText:{
        fontSize:20,
        marginLeft:55,
        marginRight:55,
        color: "#d3d3d3"
    },
    idView:{
        flexDirection:'row',
        marginTop:155,
        marginBottom:55,
        color: "#d3d3d3"
    },
    pwdText:{
         fontSize:20,
        marginLeft:50,
        marginRight:28,
        color: "#d3d3d3"
    },
    pwdView:{
        flexDirection:'row',
        marginBottom:99.5
    },
    btn:{
        alignSelf:'center',
        alignItems:'stretch',
        width:238,
        height:40,
        marginBottom:20,
        backgroundColor:'#afafaf',
        borderRadius:18,
        
    }    
})


