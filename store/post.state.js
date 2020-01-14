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

initialState={
    diaryInfo:{},
    updateLoading:false,
    writeDiaryError:''

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
        default:
            return state;
    }
}

export default reducer;








