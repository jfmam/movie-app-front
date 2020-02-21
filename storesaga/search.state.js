import {fork,call,takeEvery,put,all,takeLatest} from 'redux-saga/effects'
import { MOVIESEARCH_REQUEST, MOVIESEARCH_SUCCESS, MOVIESEARCH_FAILURE,DIARYSEARCH_REQUEST, DIARYSEARCH_FAILURE, DIARYSEARCH_SUCCESS } from '../store/search.state'
import axios from 'axios';

function diarySearhAPI(title){//title은 action.data
    return axios ({
      method: 'get',
      url: '/movie/searchbar',
      params: title,
      headers: {
          'Content-Type':'application/json'
      }
  })
}

function* diarySearch(action){
    try{       
        const result=yield call(diarySearhAPI,action.data)
        console.log(result.data)
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
function* watchdiarySearch() {
    yield takeLatest(DIARYSEARCH_REQUEST, diarySearch)
}

function movieSearhAPI(title){//title은 action.data
    console.log(title)
    return axios ({
      method: 'get',
      url: '/movie/detail',
      params: title,
      headers: {
          'Content-Type': 'application/json'
      }
  })
}

function* movieSearch(action){
    try{       
        const result=yield call(movieSearhAPI,action.data)
        console.log(result.data)
        yield put({
            type:MOVIESEARCH_SUCCESS,
            data:result.data
        })
    }catch(e){
        console.error(e);
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