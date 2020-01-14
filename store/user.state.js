import {produce} from 'immer'

const dummyUser={
    id:'로그인하자',
    name:'안녕',
    nickname:'코딩좀하자'
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
                draft.user=dummyUser//success부분에서 정보를 넣어준다
            })
        }
        case LOGIN_FAILURE:{
            return produce((state=initialState,draft)=>{
                draft.LoginError=action.data//에러부분 넣어주기
                draft.isLoggingIn=false
                draft.user=null
            })
        }
        case LOGOUT_REQUEST:{
            return (state=initialState,draft=>{
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