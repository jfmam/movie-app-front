import {fork,call,takeEvery,put,all,takeLatest} from 'redux-saga/effects'
import {} from '../store'
import { MOVIESEARCH_REQUEST, MOVIESEARCH_SUCCESS, MOVIESEARCH_FAILURE, DIARYSEARCH_FAILURE, DIARYSEARCH_SUCCESS } from '../store/search.state'
import axios from 'axios';

function* diarySearch(action){
    try{
        const result=yield call(diarySearhAPI,action.data)
        yield put({
            type:DIARYSEARCH_SUCCESS,
            data:result.data
        })
    }catch(e){
        console.error(e);
        yield put({
            type:DIARYSEARCH_FAILURE,
            error:e
        })
    }
}

function* watchdiarySearch(){
    yield call(DIARYSEARCH_REQUEST,diarySearch)
}

function movieSearchAPI(title){
    axios.get('',title)
}

function* movieSearch(action){
    try{
    const result=yield call(movieSearchAPI,action.data);//action.data에 title을보내준다
    yield put({
        type:MOVIESEARCH_SUCCESS,
        data:result.data
     })
    }catch(e){
        console.error(e)
        yield put({
            type:MOVIESEARCH_FAILURE,
            error:e
        })
    }
}

function* watchmovieSearch(){
    yield takeLatest(MOVIESEARCH_REQUEST,movieSearch)
}

export default function* searchSaga(){
    yield all([
        fork(watchmovieSearch),
        fork(watchdiarySearch)
    ])
}