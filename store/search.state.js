import {produce} from 'immer'

const initialState={
    diarySearchLoading:false,
    diarySearchError:'',
    diarySearch:{},
    movieSearchLoading:false,
    movieSearchError:'',
    movieSearch:{},
    movieDetail:{}
}

export const DIARYSEARCH_REQUEST = 'front/DIARYSEARCH_REQUEST'
export const DIARYSEARCH_SUCCESS = 'front/DIARYSEARCH_SUCCESS'
export const DIARYSEARCH_FAILURE ='front/DIARYSEARCH_FAILURE'

export const MOVIESEARCH_REQUEST = 'front/MOVIESEARCH_REQUEST'
export const MOVIESEARCH_SUCCESS = 'front/MOVIESEARCH_SUCCESS'
export const MOVIESEARCH_FAILURE = 'front/MOVIESEARCH_FAILURE'

export const MOVIE_DETAIL='front/MOVIE_DETAIL'

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case DIARYSEARCH_REQUEST:{
            return produce(state,draft=>{
                draft.diarySearchLoading=true
                draft.diarySearchError=''
                draft.diarySearch=null
            })
        }
        case DIARYSEARCH_SUCCESS: {
            return produce(state,draft=>{
                draft.diarySearchLoading=false
                draft.diarySearch=action.data//나중에 action.data로 변경할것
            })
        }
        case DIARYSEARCH_FAILURE: {
             return produce(state,draft=>{
                draft.diarySearchLoading=false
                draft.diarySearchError='다이어리 불러오기 실패'//나중에 action.error로 변경할것
            })
        }
        case MOVIESEARCH_REQUEST: {
             return produce(state,draft=>{
                draft.movieSearchLoading=true
                draft.movieSearchError=''
            })
        }
        case MOVIESEARCH_SUCCESS: {
            return produce(state,draft=>{
                draft.movieSearchLoading=false
                draft.movieSearch=action.data//나중에 action.data로 변경할것
            })
        }
        case MOVIESEARCH_FAILURE: {
             return produce(state,draft=>{
                draft.movieSearchLoading=false
                draft.movieSearchError='무비 불러오기 실패'//나중에 action.error로 변경할것
            })
        }
        case MOVIE_DETAIL:{
            return produce(state,draft=>{
                draft.movieDetail=null;
                draft.movieDetail=action.data;
            })
        }
        default :{
            return state;
        }
    }
}

export default reducer;