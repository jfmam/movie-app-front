import {all,call,fork,takeLatest,takeEvery,put } from 'redux-saga/effects'
import axios from 'axios'
import { BLOCKBUSTER_REQUEST, BLOCKBUSTER_FAILURE, BLOCKBUSTER_SUCCESS, MYDIARY_REQUEST,MYDIARY_SUCCESS, MYDIARY_FAILURE,
         GETDIARY_REQUEST, GETDIARY_SUCCESS, BOXOFFICE_REQUEST, BOXOFFICE_SUCCESS, BOXOFFICE_FAILURE, WISHLIST_REQUEST, RECOMMAND_REQUEST
       } from '../store/image.state'

       
function recommandAPI(recommandData){
  return  axios.get('',recommandData)
}

function* recommand(action){
    try{
        const result= yield call(recommandAPI,action.data)
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


function wishlistAPI(wishlistData){
  return  axios.get('',wishlistData)
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
        console.log(result.data)
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
        console.log(result.data)
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


function blockbusterAPI(blockBusterData){
  return  axios.get('',blockBusterData)
}

function* blockBuster(action){
    try{
        const result= yield call(blockbusterAPI,action.data)
        yield put({
            type:BLOCKBUSTER_SUCCESS,
            data:result.data
        })
    }catch(e){
        console.error(e)

        yield put({
            type:BLOCKBUSTER_FAILURE,
            error:e
    })
    }
}

function* watchBlockbuster(){
    yield takeEvery(BLOCKBUSTER_REQUEST,blockBuster)
}

export default function* imageSaga(){
    yield all([
        fork(watchBlockbuster),
        fork(watchDiary),
        fork(watchDiaryDetail),
        fork(watchBoxOffice),
        fork(watchWishlist),
        fork(watchRecommand),
    ])
}
