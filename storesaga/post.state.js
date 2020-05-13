import {fork,call,takeEvery,takeLatest,put,all} from 'redux-saga/effects'
import {
    WRITEDIARY_REQUEST,
    WRITEDIARY_SUCCESS,
    WRITEDIARY_FAILURE,
    WRITEDIARYIMAGE_REQUEST,
    WRITEDIARYIMAGE_SUCCESS,
    WRITEDIARYIMAGE_FAILURE ,
  
} from '../store/post.state'
import {  MYDIARY_REQUEST,MYDIARY_SUCCESS, MYDIARY_FAILURE} from '../store/image.state'
import axios from 'axios'


function diaryAPI(){
  return  axios({
      method:'get',
      url: '/diary',
      headers:{'Content-Type':'application/json'}
  })
}

function writePostDiaryAPI(diaryData){
    console.log(diaryData)
  return  axios({
      method:'post',
      data:diaryData,
      url: '/diary',
      headers:{'Content-Type':'application/json'}
  })
}


function* writePostDiary(action){
    try{
        const result=yield call(writePostDiaryAPI,action.data)
        yield put({
            type:WRITEDIARY_SUCCESS,
        })
      const image= yield call(diaryAPI);
           yield put({
            type:MYDIARY_SUCCESS,
            data:image.data
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
        fork(watchPostDiaryImage)
        ])
}