import  createReducer from './createReducer'
import {produce} from 'immer'

export const LOGIN_REQUEST = 'front/LOGIN'//요청 성공,실패가 대표적이다
export const LOGIN_SUCCESS = 'front/SUCCESS'
export const LOGIN_FAILURE = 'front/FAILURE'
export const LOGOUT='front/LOGOUT'
export const SIGNUP = 'front/SIGNUP'
export const SIGNUP_SUCCESS='front/SIGNUP_SUCCESS'


export const loginAction=(data)=>{
    return{
        type:LOGIN,
        data:{
            id:'',
            password:''
        }
    }
}

export const logoutAction=()=>{
    return{
        type:LOGOUT
        //jwt토큰 해제
    }
}

export const signUpAction=(data)=>{//매개변수가 객체로 전달되야하는거아닌가?
    return{
        type:SIGNUP,
        data:{
            id:'',
            password:'',
            name:'',
            nickname:'',
        }
        
    }
}

const initialState={
    isLoggedIn:false,
    user:null//login 할시에 user에 들어갈정보?
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case LOGIN_SUCCESS :{
            return{
                ...state
            }
        }
        default:{
            return{
                ...state
            }
        }
    }
}
export default reducer;