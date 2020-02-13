import {fork,call,takeEvery,takeLatest,put,all} from 'redux-saga/effects'
import {
    WRITEDIARY_REQUEST,
    WRITEDIARY_SUCCESS,
    WRITEDIARY_FAILURE,
    GETDIARY_REQUEST,
    GETDIARY_SUCCESS,
    GETDIARY_FAILURE ,
    WISHLISTPOST_REQUEST,
    WISHLISTPOST_SUCCESS,
    WISHLISTPOST_FAILURE
} from '../store/post.state'
import axios from 'axios'

function postWishListAPI(postWishListData) {
    return axios.post('',postWishListData)
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

function getDiaryAPI(getDiaryData){
    return axios({
        method:'get',
        params:getDiaryData,//userId를 보내준다
        url: 'http://54.180.186.62/api/diary',
        header:{'Contnet-Type':'application/json'}
    })
}

function* getDiary(action){
    try{
        const result=yield call(getDiaryAPI,action.data)
        yield put({
            type:GETDIARY_SUCCESS,
            data:result.data
        })
    }catch(e){
        console.error(e)
        yield put({
            type:GETDIARY_FAILURE,
            error:e
        })
    }
}

function* watchGetDiary(){
    yield takeEvery(GETDIARY_REQUEST,getDiary)
}

function getDiaryDetailAPI(detailData){
    return axios({
        method:'get',
        params:detailData,
        url: 'http://54.180.186.62/api/diary/detail',
        header:{'Contnet-Type':'application/json'}
    })
}

function* getDiaryDetail(action){
    try{
        const result=yield call(getDiaryDetailAPI,action.data);
        yield put({
            type:GETDIARYDETAIL_SUCCESS,
            data:result.data
        })
    }catch(e){
        console.error(e)
       yield put({
            type:GETDIARY_FAILURE,
            error:e
        })
    }
}

function * watchgetDiayDetail(){
    yield takeLatest (GETDIARYDETAIL_REQUEST,getDiaryDetail)
}

export default function* postSaga(){
    yield all([
        fork(watchPostDiary),
        fork(watchPostWishList),
        fork(watchGetDiary)
        ])
}