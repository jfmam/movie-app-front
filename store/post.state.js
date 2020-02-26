import {produce} from 'immer'


export const WRITEDIARY_REQUEST='front/WRITEDIARY_REQUEST'
export const WRITEDIARY_SUCCESS = 'front/WRITEDIARY_SUCCESS'
export const WRITEDIARY_FAILURE = 'front/WRITEDIARY_FAILURE'

export const WRITEDIARYIMAGE_REQUEST = 'front/WRITEDIARYIMAGE_REQUEST'
export const WRITEDIARYIMAGE_SUCCESS = 'front/WRITEDIARYIMAGE_SUCCESS'
export const WRITEDIARYIMAGE_FAILURE = 'front/WRITEDIARYIMAGE_FAILURE'

export const WISHLISTPOST_REQUEST = 'front/WISHLISTPOST_REQUEST'
export const WISHLISTPOST_SUCCESS = 'front/WISHLISTPOST_SUCCESS'
export const WISHLISTPOST_FAILURE = 'front/WISHLISTPOST_FAILURE'

export const WISHLISTDELETE_REQUEST = 'front/WISHLISTDELETE_REQUEST'
export const WISHLISTDELETE_SUCCESS = 'front/WISHLISTDELETE_SUCCESS'
export const WISHLISTDELETE_FAILURE = 'front/WISHLISTDELETE_FAILURE'

initialState={
    diaryInfo:{},//다이어리인포는 검색시...
    address:{},
    wishListPost:false,
    updateLoading:false,
    writeDiaryError:'',
    wishListError:'',
    writeDiaryImageError:''
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
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
        case WISHLISTPOST_REQUEST:{
            return produce(state,draft=>{
                draft.updateLoading=true
                draft.wishListError=''
            })
        }
        case WISHLISTPOST_SUCCESS:{
            return produce(state,draft=>{
                draft.updateLoading=false
            })
        }
        case WISHLISTPOST_FAILURE:{
            return produce(state,draft=>{
                draft.updateLoading=false
                draft.wishListError=action.error
            })
        }
        case WISHLISTDELETE_REQUEST:{
            return produce(state,draft=>{
                draft.updateLoading=true
                draft.wishListError=''
            })
        }
        case WISHLISTDELETE_SUCCESS:{
            return produce(state,draft=>{
                draft.updateLoading=false
            })
        }
        case WISHLISTDELETE_FAILURE:{
            return produce(state,draft=>{
                draft.updateLoading=false
                draft.wishListError=action.error
            })
        }
        default:{
            return state;
        }
    }
}

export default reducer;








