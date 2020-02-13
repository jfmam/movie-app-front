import {produce} from 'immer'

const dummyDiary={
    movieTitle:'영화제목',
    rating:10,
    date:'오늘의 날짜',
    photo:'image'
}

export const WRITEDIARY_REQUEST='front/WRITEDIARY_REQUEST'
export const WRITEDIARY_SUCCESS = 'front/WRITEDIARY_SUCCESS'
export const WRITEDIARY_FAILURE = 'front/WRITEDIARY_FAILURE'



export const WISHLISTPOST_REQUEST = 'front/WISHLISTPOST_REQUEST'
export const WISHLISTPOST_SUCCESS = 'front/WISHLISTPOST_SUCCESS'
export const WISHLISTPOST_FAILURE = 'front/WISHLISTPOST_FAILURE'

initialState={
    diaryInfo:{},//다이어리인포는 검색시...
    wishListPost:false,
    updateLoading:false,
    writeDiaryError:'',
    wishListError:'',
    getDiaryError:''
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case WRITEDIARY_REQUEST:
            return produce(state=initialState,draft=>{
                draft.updateLoading=true
                draft.writeDiaryError=''
            })
        case WRITEDIARY_SUCCESS:
            return produce(state=initialState,draft=>{
                draft.updateLoading=false
            })
        case WRITEDIARY_FAILURE:
            return produce(state=initialState,draft=>{
                draft.updateLoading=false
                draft.writeDiaryError=action.error
            })    
      
        case WISHLISTPOST_REQUEST:
            return produce(state=initialState,draft=>{
                draft.updateLoading=true
                draft.wishListError=''
            })
        case WISHLISTPOST_SUCCESS:
            return produce(state=initialState,draft=>{
                draft.updateLoading=false
            })
        case WISHLISTPOST_FAILURE:
            return produce(state=initialState,draft=>{
                draft.updateLoading=false
                draft.wishListError=action.error
            })
        default:
            return state;
    }
}

export default reducer;








