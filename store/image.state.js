import {produce} from 'immer'

export const MYDIARY_REQUEST='fornt/MYDIARY_REQUEST'
export const MYDIARY_SUCCESS='fornt/MYDIARY_SUCCESS'
export const MYDIARY_FAILURE='fornt/MYDIARY_FAILURE'

export const GETDIARY_REQUEST = 'fornt/GETDIARY_REQUEST'
export const GETDIARY_SUCCESS = 'fornt/GETDIARY_SUCCESS'
export const GETDIARY_FAILURE = 'fornt/GETDIARY_FAILURE'

export const BOXOFFICE_REQUEST = 'fornt/BOXOFFICE_REQUEST'
export const BOXOFFICE_SUCCESS = 'fornt/BOXOFFICE_SUCCESS'
export const BOXOFFICE_FAILURE = 'fornt/BOXOFFICE_FAILURE'

export const WISHLIST_REQUEST = 'fornt/WISHLIST_REQUEST'
export const WISHLIST_SUCCESS = 'fornt/WISHLIST_SUCCESS'
export const WISHLIST_FAILURE = 'fornt/WISHLIST_FAILURE'

export const RECOMMAND_REQUEST = 'fornt/RECOMMAND_REQUEST'
export const RECOMMAND_SUCCESS = 'fornt/RECOMMAND_SUCCESS'
export const RECOMMAND_FAILURE = 'fornt/RECOMMAND_FAILURE'

const initialState={
    myDiaryImage:[],//다이어리 목록 사진
    writeDiaryImage:[],//다이어리 쓸때 stickyheader에 붙는 이미지부분
    getDiaryData:{
        rating:0,
        diaryImage:[],
        date:'',
        memo:''
    },//이부분은 다이어리 정보
    boxOfficeImage:[],
    wishListImage:[],
    recommandImage:[],
    loadingDiary:false,
    myDiaryError:'',
    writeDiaryError:'',
    getDiaryError:'',
    boxOfficeError:'',
    wishListError:'',
    recommandError:''
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case MYDIARY_REQUEST:{
            return produce(state=initialState,draft=>{
                draft.loadingDiary=true
                draft.myDiaryError=''
            })
        }
        case MYDIARY_SUCCESS:{
            return produce(state=initialState,draft=>{
                draft.loadingDiary=false
                draft.myDiaryImage=action.data
            })
        }
        case MYDIARY_FAILURE:{
            return produce(state=initialState,draft=>{
                draft.loadingDiary=false
                draft.myDiaryError=action.error//error로 바꿀수있을까?
            })
        }
        case GETDIARY_REQUEST:{
            return produce(state=initialState,draft=>{
                draft.loadingDiary=true
            })
        }
        case GETDIARY_SUCCESS:{
            return produce(state=initialState,draft=>{
                draft.loadingDiary=false
                draft.getDiaryData.rating=action.data.rating
                draft.getDiaryData.diaryImage=action.data.diaryImage
                draft.getDiaryData.date=action.data.date
                draft.getDiaryData.memo=action.data.memo
            })
        }
        case GETDIARY_FAILURE:{
            return produce(state=initialState,draft=>{
                draft.loadingDiary=false
                draft.getDiaryError=action.error//error로 바꿀수있을까?
            })
        }
        case BOXOFFICE_REQUEST:{
            return produce(state=initialState,draft=>{
                draft.loadingDiary=true
            })
        }
        case BOXOFFICE_SUCCESS:{
            return produce(state=initialState,draft=>{
                draft.loadingDiary=false
                draft.boxOfficeImage=action.data
            })
        }
        case BOXOFFICE_FAILURE:{
            return produce(state=initialState,draft=>{
                draft.loadingDiary=false
                draft.boxOfficeError=action.error//error로 바꿀수있을까?
            })
        }
        case WISHLIST_REQUEST:{
            return produce(state=initialState,draft=>{
                draft.loadingDiary=true
            })
        }
        case WISHLIST_SUCCESS:{
            return produce(state=initialState,draft=>{
                draft.loadingDiary=false
                draft.wishListImage=action.data
            })
        }
        case WISHLIST_FAILURE:{
            return produce(state=initialState,draft=>{
                draft.loadingDiary=false
                draft.wishListError=action.error//error로 바꿀수있을까?
            })
        }
        case RECOMMAND_REQUEST:{
            return produce(state=initialState,draft=>{
                draft.loadingDiary=true
            })
        }
        case RECOMMAND_SUCCESS:{
            return produce(state=initialState,draft=>{
                draft.loadingDiary=false
                draft.recommandImage=action.data
            })
        }
        case RECOMMAND_FAILURE:{
            return produce(state=initialState,draft=>{
                draft.loadingDiary=false
                draft.recommandError=action.error//error로 바꿀수있을까?
            })
        }
        default:{
            return state;
        }
    
    
    }
    }
    



export default reducer;