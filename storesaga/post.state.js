import {fork,call,takeEvery,takeLatest,put} from 'redux-saga/effects'
import { WRITEDIARY_REQUEST, WRITEDIARY_SUCCESS, WRITEDIARY_FAILURE, WISHLISTPOST_REQUEST, WISHLISTPOST_SUCCESS, WISHLISTPOST_FAILURE } from '../store/post.state'
import axios from 'axios'

function writeDiaryAPI(postWishListData){
    return axios.post('',postWishListData)
}

function* postWishList(action){
    try{
        const result=yield call(postWishListAPI,action.data)//userId와 movieId등록? 
        yield put({
            type:WISHLISTPOST_SUCCESS,
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
    yield put(WISHLISTPOST_REQUEST,postWishList)
}

function writeDiaryAPI(postDiaryData){
    return axios.post('',postDiaryData)
}

function* writeDiary(action){
    try{
        const result=yield call(writeDiaryAPI,action.data)
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
    yield takeLatest(WRITEDIARY_REQUEST,writeDiary)
}

export default function* postSaga(){
    yield all([
        fork(watchPostDiary),
        fork(watchPostWishList)
        ])
}