import {fork,call,takeEvery,takeLatest,put,all} from 'redux-saga/effects'
import {
    WRITEDIARY_REQUEST,
    WRITEDIARY_SUCCESS,
    WRITEDIARY_FAILURE,
    WRITEDIARYIMAGE_REQUEST,
    WRITEDIARYIMAGE_SUCCESS,
    WRITEDIARYIMAGE_FAILURE ,
    WISHLISTPOST_REQUEST,
    WISHLISTPOST_SUCCESS,
    WISHLISTPOST_FAILURE, WISHLISTDELETE_REQUEST,
    WISHLISTDELETE_SUCCESS,
    WISHLISTDELETE_FAILURE
} from '../store/post.state'
import axios from 'axios'

function postWishListAPI(postWishListData) {
    console.log(postWishListData)
    return axios({
        method:'post',
        url:'/wishlist',
        data:postWishListData,
        headers:{'Content-Type':'application/json'}
    })
}

function* postWishList(action){
    try{
        const result=yield call(postWishListAPI,action.data)//userId와 movieId등록? 
        yield put({
            type:WISHLISTPOST_SUCCESS,
            data:result.data
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
    console.log("도달")
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
        const result=yield call(deleteWishListAPI,action.data)//userId와 movieId등록? 
        yield put({
            type:WISHLISTDELETE_SUCCESS,
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

function writePostDiaryAPI(postDiaryData){
    console.log(postDiaryData)
    return axios({
        method:'post',
        url:'/diary',
        data:postDiaryData,
        headers:{'Content-Type':'application/json'}
    })
}

function* writePostDiary(action){
    try{
        const result=yield call(writePostDiaryAPI,action.data)
        yield put({
            type:WRITEDIARY_SUCCESS,
            data:result.data
        })
    }catch(e){
        console.error(e)
        yield put({
            type:WRITEDIARY_FAILURE,
            error:e
        })
    }
}

function* watchPostDiary(){
    yield takeLatest(WRITEDIARY_REQUEST,writePostDiary)
}


function writePostDiaryImageAPI(postDiaryData){
    console.log(postDiaryData)
    return axios({
        method:'post',
        url:'/diary/image',
        data:postDiaryData,
        headers:{'Content-Type':'multipart/form-data'}
    })
}

function* writePostDiaryImage(action){
    try{
        const result=yield call(writePostDiaryImageAPI,action.data)
        console.log(result.data)
        yield put({
            type:WRITEDIARYIMAGE_SUCCESS,
            data:result.data
        })
    }catch(e){
        console.error(e)
        yield put({
            type:WRITEDIARYIMAGE_FAILURE,
            error:e
        })
    }
}

function* watchPostDiaryImage(){
    yield takeLatest(WRITEDIARYIMAGE_REQUEST,writePostDiaryImage)
}


export default function* postSaga(){
    yield all([
        fork(watchPostDiary),
        fork(watchPostWishList),
        fork(watchDeleteWishList),
        fork(watchPostDiaryImage)
        ])
}