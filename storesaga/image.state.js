import {all,call,fork,takeLatest,takeEvery,put } from 'redux-saga/effects'
import axios from 'axios'
import { MYDIARY_REQUEST,MYDIARY_SUCCESS, MYDIARY_FAILURE,
         GETDIARY_REQUEST, GETDIARY_SUCCESS, BOXOFFICE_REQUEST, BOXOFFICE_SUCCESS, BOXOFFICE_FAILURE, RECOMMAND_REQUEST
       } from '../store/image.state'

       
function recommandAPI(){
  return axios({
      method: 'get',
      url: '/recommand',
      body:{},
      headers: {
              'Content-Type': 'application/json'
          },
      
  })
}

function* recommand(action){
    try{
        const result= yield call(recommandAPI)
        yield put({
            type:RECOMMAND_SUCCESS,
            data:result.data
        })
    }catch(e){
        console.error(e)

        yield put({
            type:RECOMMAND_FAILURE,
            error:e
    })
    }
}

function* watchRecommand(){
    yield takeEvery(RECOMMAND_REQUEST,recommand)
}



function boxOfficeAPI(boxOfficeData){
  return  axios({
    method:'get',  
    url: '/boxoffice',
    params:boxOfficeData,
    headers:{
        headers: {'Content-Type': 'application/json'},
    }
  })
}

function* boxOffice(action){
    try{
        const result= yield call(boxOfficeAPI,action.data)
        yield put({
            type:BOXOFFICE_SUCCESS,
            data:result.data
        })
    }catch(e){
        yield put({
            type:BOXOFFICE_FAILURE,
            error:e
    })
    }
}

function* watchBoxOffice(){
    yield takeEvery(BOXOFFICE_REQUEST,boxOffice)
}


function diaryDetailAPI(diaryDetailData){
  return  axios({
      method:'get',
      url:'/diary/detail',
      params:diaryDetailData,
      headers:{
          'Content-Type':'application/json'
      }
  })
}

function* diaryDetail(action){
    try{
        const result= yield call(diaryDetailAPI,action.data)
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

function* watchDiaryDetail(){
    yield takeLatest(GETDIARY_REQUEST,diaryDetail)
}


function diaryAPI(diaryData){
  return  axios({
      method:'get',
      params:diaryData,
      url: '/diary',
      headers:{'Content-Type':'application/json'}
  })
}

function* diary(action){
    try{
        const result= yield call(diaryAPI,action.data)
        yield put({
            type:MYDIARY_SUCCESS,
            data:result.data
        })
    }catch(e){
        console.error(e)

        yield put({
            type:MYDIARY_FAILURE,
            error:e
    })
    }
}

function* watchDiary(){
    yield takeEvery(MYDIARY_REQUEST,diary)
}



export default function* imageSaga(){
    yield all([
        fork(watchDiary),
        fork(watchDiaryDetail),
        fork(watchBoxOffice),
        fork(watchRecommand),
    ])
}
