import {produce} from 'immer'


export const WRITEDIARY_REQUEST='front/WRITEDIARY_REQUEST'
export const WRITEDIARY_SUCCESS = 'front/WRITEDIARY_SUCCESS'
export const WRITEDIARY_FAILURE = 'front/WRITEDIARY_FAILURE'

export const WRITEDIARYIMAGE_REQUEST = 'front/WRITEDIARYIMAGE_REQUEST'
export const WRITEDIARYIMAGE_SUCCESS = 'front/WRITEDIARYIMAGE_SUCCESS'
export const WRITEDIARYIMAGE_FAILURE = 'front/WRITEDIARYIMAGE_FAILURE'

export const TITLE_SETTING='front/TITLE_SETTING'


 const initialState={
    diaryInfo:{},//다이어리인포는 검색시...
    address:{},
    writeDiaryError:'',
    writeDiaryImageError:'',
    title:''
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case TITLE_SETTING:{
            return produce(state,draft=>{
                draft.title='';
                draft.title=action.data;
            })
        }

        case WRITEDIARY_REQUEST:{
            return produce(state,draft=>{
                draft.updateLoading=true
                draft.writeDiaryError=''
            })
        }
        case WRITEDIARY_SUCCESS:{
        return produce(state,draft=>{
                draft.updateLoading=false
            })
        }
        case WRITEDIARY_FAILURE:{
            return produce(state,draft=>{
                draft.updateLoading=false
                draft.writeDiaryError=action.error
            })  
        }  
        case WRITEDIARYIMAGE_REQUEST:{
            return produce(state,draft=>{
                draft.updateLoading=true
                draft.writeDiaryImageError=''
            })
        }
        case WRITEDIARYIMAGE_SUCCESS:{
            return produce(state,draft=>{
                draft.address=action.data
                draft.updateLoading=false
            })
        }
        case WRITEDIARYIMAGE_FAILURE:{
            return produce(state,draft=>{
                draft.updateLoading=false
                draft.writeDiaryImageError=action.error
            })    
        }
       
        default:{
            return state;
        }
    }
}

export default reducer;








