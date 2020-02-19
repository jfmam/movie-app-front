import { all, call, fork, put, takeEvery,takeLatest } from 'redux-saga/effects';
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
  PROFILE_REQUEST,
  PROFILE_SUCCESS,
  PROFILE_FAILURE
} from '../store/user.state';

function profileAPI(profileData) {//Api요청시  data가 필요하면 param에작성
  console.log(profileData)
return axios({
    method: 'post',
    url: '/user/image',
    data:profileData,
    headers: {'Content-Type': 'multipart/form-data' },
})
}

function profileSaveAPI(saveData){
  console.log(saveData)
  return axios({
    method:'patch',
    url:'/user/image',
    data:saveData,
    headers: {'Content-Type': 'application/json' }
  })
}

function* profile(action) {//액션을 파라미터로 받을수있다.
  try {
    const result = yield call(profileAPI, action.data);
    console.log(result);
    const data={image:result.data}
   const access=yield call(profileSaveAPI,data)
    yield put({ // put은 dispatch 동일
      type: PROFILE_SUCCESS,
      data: result.data,
    });
  } catch (e) { // loginAPI )실패
    console.error(e);
    yield put({
      type: PROFILE_FAILURE,
      error:e
    });
  }
}

function* watchProfile() {
  yield takeLatest(PROFILE_REQUEST, profile);//LOGINREQUEST안에 type과 data가 모두담겨있다 요청=>logIn으로이동
}

function loginAPI(loginData) {//Api요청시  data가 필요하면 param에작성
return axios({
    method: 'post',
    url: '/user/login',
    data: loginData,
    headers: {'Content-Type': 'application/json' },
    withCredentials:true
    }, {
      withCredentials: true
    })
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
   return axios({
    method: 'post',
    url: '/user/logout',
    headers: {'Content-Type': 'application/json' },
    withCredentials:true
    }, {
      withCredentials: true
    })
}

function* logout(action){
    try{
        const result=yield call(logoutAPI,action.data);
        yield put({
            type:LOGOUT_SUCCESS
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
  console.log(signUpData)
  return axios({
    method: 'post',
    url: '/user',
    data: signUpData,
    headers: {'Content-Type': 'application/json' }
    })
}

function* signup(action){
    try{
    const result=yield call(signupAPI,action.data);
    if(result.data)
    yield put({
        type:SIGNUP_SUCCESS
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
    fork(watchProfile)
  ]);
}