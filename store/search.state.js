import {produce} from 'immer'


//다이어리 검색
//영화검색

const dummySearch={
    poster:'사진',
    korTitle:'한국영화',
    genres:'판타지,드라마',
    releaseDate:'201501521',
    makingNation:'한국'
}

const initialState={
    diarySearchLoading:false,
    diarySearchError:'',
    diaryInfo:{},
    movieSearchLoading:false,
    movieSearchError:'',
    movieInfo:{}
}

export const DIARYSEARCH_REQUEST = 'front/DIARYSEARCH_REQUEST'
export const DIARYSEARCH_SUCCESS = 'front/DIARYSEARCH_SUCCESS'
export const DIARYSEARCH_FAILURE ='front/DIARYSEARCH_FAILURE'

export const MOVIESEARCH_REQUEST = 'front/DIARYSEARCH_REQUEST'
export const MOVIESEARCH_SUCCESS = 'front/DIARYSEARCH_SUCCESS'
export const MOVIESEARCH_FAILURE = 'front/DIARYSEARCH_FAILURE'

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case DIARYSEARCH_REQUEST:{
            return produce((state=initialState,draft)=>{
                draft.diarySearchLoading=true
                draft.diarySearchError=''
            })
        }
        case DIARYSEARCH_SUCCESS: {
            return produce((state=initialState,draft)=>{
                draft.diarySearchLoading=false
                draft.diaryInfo=dummySearch//나중에 action.data로 변경할것
            })
        }
        case DIARYSEARCH_FAILURE: {
             return produce((state=initialState,draft)=>{
                draft.diarySearchLoading=false
                draft.diarySearchError='다이어리 불러오기 실패'//나중에 action.error로 변경할것
            })
        }
        case MOVIESEARCH_REQUEST: {
             return produce((state=initialState,draft)=>{
                draft.movieSearchLoading=true
                draft.movieSearchError=''
            })
        }
        case MOVIESEARCH_SUCCESS: {
             return produce((state=initialState,draft)=>{
                draft.movieSearchLoading=false
                draft.movieInfo=dummySearch//변경
            })
        }
        case MOVIESEARCH_FAILURE: {
             return produce((state=initialState,draft)=>{
                draft.movieSearchLoading=false
                draft.movieSearchError='영화검색실패'//변경 action.error
            })
        }
        default :{
            return state;
        }
    }
}

export default reducer;