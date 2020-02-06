import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from '../store/user.state';

function loginAPI(loginData) {//Api요청시  data가 필요하면 param에작성
  // 서버에 요청을 보내는 부분
  return axios.post('user/login', loginData, { //시퀄라이즈로 정리하자.
    withCredentials: true,//cofigure부분
  });
}

function* login(action) {//액션을 파라미터로 받을수있다.
  try {
    const result = yield call(loginAPI, action.data);
    yield put({ // put은 dispatch 동일
      type: LOGIN_SUCCESS,
      data: result.data,
    });
  } catch (e) { // loginAPI 실패
    console.error(e);
    yield put({
      type: LOGIN_FAILURE,
      error:e
    });
  }
}

function* watchLogin() {
  yield takeEvery(LOGIN_REQUEST, login);//LOGINREQUEST안에 type과 data가 모두담겨있다 요청=>logIn으로이동
}

function logoutAPI(){
    return axios.post('',{
        withCredentials:true
    })
}

function* logout(action){
    try{
        const result=yield call(logoutAPI,action.data);
        yield put({
            type:LOGIN_SUCCESS
        })
    }catch(e){
        console.error(e);
        yield put({
            type:LOGOUT_FAILURE,
            error:e
        });
    }
}

function * watchLogout(){
    yield takeEvery(LOGOUT_REQUEST,logout)
}

async function signupAPI(signUpData){
   
  return await axios.post('54.180.186.62/api/user', signUpData)
  .then((res)=>{console.log(res)})
  .catch((e)=>{console.log(e)})
}

function* signup(action){
    try{
    const result=yield call(signupAPI,action.data);
    console.log(result)
    yield put({
        type:SIGNUP_SUCCESS,
        data:result
    })
}catch(e){
    console.error(e);
    yield put({
        type:SIGNUP_FAILURE,
        error:e
    })
}
}

function* watchSignUp(){
    yield takeEvery(SIGNUP_REQUEST,signup)
}

export default function* userSaga() {
  yield all([
    fork(watchLogin),
    fork(watchLogout),
    fork(watchSignUp),
  ]);
}