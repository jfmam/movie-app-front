import {fork,call,takeEvery,takeLatest,put} from 'redux-saga/effects'
import { WRITEDIARY_REQUEST, WRITEDIARY_SUCCESS, WRITEDIARY_FAILURE } from '../store/post.state'
import axios from 'axios'

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
    yield all([fork(watchPostDiary)])
}