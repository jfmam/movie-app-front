import  createReducer from './createReducer'
import {produce} from 'immer'

const dummyUser={
    id:'',
    name:'',
    nickname:''
}

export const LOGIN_REQUEST = 'front/LOGIN_REQUEST'//요청 성공,실패가 대표적이다
export const LOGIN_SUCCESS = 'front/LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'front/LOGIN_FAILURE'

export const LOGOUT_REQUEST='front/LOGOUT_REQUEST'
export const LOGOUT_SUCCESS= 'front/LOGOUT_SUCCESS'
export const LOGOUT_FAILURE = 'front/LOGOUT_FAILURE'

export const SIGNUP_REQUEST='front/SIGNUP_REQUEST'
export const SIGNUP_SUCCESS='front/SIGNUP_SUCCESS'
export const SIGNUP_FAILURE = 'front/SIGNUP_FAILURE'


const initialState={
    user:null,//login 할시에 user에 들어갈정보
    isLoggedIn:false,//로그인 여부
    isLoggingIn:false,//로그인 시도여부 activity modal
    LoginError:'',
    isSignUp:false,
    isSignUping:false,
    signUpError:'',
    isLoggingout:false,
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case LOGIN_REQUEST :{
            return produce((state=initialState,draft)=>{
                    draft.isLoggingIn=true;
                    draft.LoginError=''
                })
            
        }
        case LOGIN_SUCCESS :{
            return produce((state=initialState,draft)=>{
                draft.isLoggingIn=false;
                draft.isLoggedIn=true;
                draft.user=dummyUser
            })
        }
        case LOGIN_FAILURE:{
            return produce((state=initialState,draft)=>{
                draft.LoginError=action.data
                draft.isLoggingIn=false
                draft.isLoggedIn=false
                draft.user=null
            })
        }
        case LOGOUT_REQUEST:{
            return (state=initialState,draft=>{
                draft.isLoggedIn=false
                draft.user=null
            })
        }
        case SIGNUP_REQUEST:{
             return (state = initialState, draft => {
                draft.isSignUping=true
                draft.isSignUp=false
                draft.signUpError=''
             })
        }
        case SIGNUP_SUCCESS:{
            return (state=initialState,draft=>{
                draft.isSignUping=false
                draft.isSignUp=true
            })
        }
        case SIGNUP_FAILURE:{
             return (state = initialState, draft => {
                 draft.signUpError=action.data
                 draft.isSignUping=false
             })
        }
    
        default:{
            return{
                ...state
            }
        }
    }
}
export default reducer;