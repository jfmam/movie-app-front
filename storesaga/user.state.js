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
  PROFILE_FAILURE,
    WISHLISTPOST_REQUEST,
    WISHLISTPOST_SUCCESS,
    WISHLISTPOST_FAILURE, WISHLISTDELETE_REQUEST,
    WISHLISTDELETE_SUCCESS,
    WISHLISTDELETE_FAILURE,
    WISHLIST_REQUEST,WISHLIST_SUCCESS,WISHLIST_FAILURE
} from '../store/user.state';

function profileAPI(profileData) {//Api요청시  data가 필요하면 param에작성
return axios({
    method: 'post',
    url: '/user/image',
    data:profileData,
    headers: {'Content-Type': 'multipart/form-data' },
})
}

function profileSaveAPI(saveData){
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



function postWishListAPI(postWishListData) {
    return axios({
        method:'post',
        url:'/wishlist',
        data:postWishListData,
        headers:{'Content-Type':'application/json'}
    })
}

function* postWishList(action){
    try{
        yield call(postWishListAPI,action.data)//userId와 movieId등록? 
        yield put({
          type:WISHLISTPOST_SUCCESS
        })
       const result= yield call(wishlistAPI,{})
        yield put({
          type:WISHLIST_SUCCESS,
          data: result.data
        })
    }catch(e){
        console.error(e)
        yield put({
            type:WISHLISTPOST_FAILURE,
            error:e
        })
    }
}

function* watchPostWishList(){
    yield takeLatest(WISHLISTPOST_REQUEST,postWishList)
}


function deleteWishListAPI(deleteWishListData) {
    return axios({
        method:"delete",
        url:'/wishlist',
        data:deleteWishListData,
        headers:{'Content-Type':'application/json'}
    })
}

function* deleteWishList(action){

    try{
        yield call(deleteWishListAPI,action.data)//userId와 movieId등록? 
        yield put({
            type:WISHLISTDELETE_SUCCESS,
        })
        const result=yield call(wishlistAPI,{})
        yield put({
          type:WISHLIST_SUCCESS,
          data:result.data
        })
    }catch(e){
        console.error(e)
        yield put({
            type:WISHLISTDELETE_FAILURE,
            error:e
        })
    }
}

function* watchDeleteWishList(){
    yield takeLatest(WISHLISTDELETE_REQUEST,deleteWishList)
}



function wishlistAPI(wishlistData){
  return  axios({
      method:'get',
      url:'/wishlist',
      headers:{'Content-Type':'application/json'}
  })
}

function* wishlist(action){
    try{
        const result= yield call(wishlistAPI,action.data)
        yield put({
            type:WISHLIST_SUCCESS,
            data:result.data
        })
    }catch(e){
        console.error(e)

        yield put({
            type:WISHLIST_FAILURE,
            error:e
    })
    }
}

function* watchWishlist(){
    yield takeEvery(WISHLIST_REQUEST,wishlist)
}
export default function* userSaga() {
  yield all([
    fork(watchLogin),
    fork(watchLogout),
    fork(watchSignUp),
    fork(watchProfile),
    fork(watchPostWishList),
    fork(watchDeleteWishList),
    fork(watchWishlist),
  ]);
}