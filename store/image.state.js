import {produce} from 'immer'

const dummyImage={
       myDiaryImage:{image1:'image1'},//다이어리 목록 사진
    writeDiaryImage:{image1:'image1'},//다이어리 쓸때 stickyheader에 붙는 이미지부분
    getDiaryData:{
        movieId:1,
        poster:'poster1'
    },//이부분은 다이어리 정보
    boxOfficeImage:{image1:'image1'},
    wishListImage:{image1:'image1'},
    recommandImage:{image1:'image1'}
}

export const BLOCKBUSTER_REQUEST = 'fornt/BLOCKBUSTER_REQUEST' //흥행예상작
export const BLOCKBUSTER_SUCCESS = 'fornt/BLOCKBUSTER_SUCCESS'
export const BLOCKBUSTER_FAILURE = 'fornt/BLOCKBUSTER_FAILURE'

export const MYDIARY_REQUEST='fornt/MYDIARY_REQUEST'//bomttomnavigation의 다이어리 페이지부분
export const MYDIARY_SUCCESS='fornt/MYDIARY_SUCCESS'
export const MYDIARY_FAILURE='fornt/MYDIARY_FAILURE'

export const GETDIARY_REQUEST = 'fornt/GETDIARY_REQUEST'//다이어리 detail 부분
export const GETDIARY_SUCCESS = 'fornt/GETDIARY_SUCCESS'
export const GETDIARY_FAILURE = 'fornt/GETDIARY_FAILURE'

export const BOXOFFICE_REQUEST = 'fornt/BOXOFFICE_REQUEST'//박스오피스
export const BOXOFFICE_SUCCESS = 'fornt/BOXOFFICE_SUCCESS'
export const BOXOFFICE_FAILURE = 'fornt/BOXOFFICE_FAILURE'

export const WISHLIST_REQUEST = 'fornt/WISHLIST_REQUEST'//위시리스트
export const WISHLIST_SUCCESS = 'fornt/WISHLIST_SUCCESS'
export const WISHLIST_FAILURE = 'fornt/WISHLIST_FAILURE'

export const RECOMMAND_REQUEST = 'fornt/RECOMMAND_REQUEST'//추천
export const RECOMMAND_SUCCESS = 'fornt/RECOMMAND_SUCCESS'
export const RECOMMAND_FAILURE = 'fornt/RECOMMAND_FAILURE'

export const IMAGEPROPS='fornt/IMAGEPROPS'

const initialState={
    blockbusterImage:{},
    myDiaryImage:{},//다이어리 목록 사진 MYDIARY
    writeDiaryImage:{},//다이어리 쓸때 stickyheader에 붙는 이미지부분
    getDiaryData:{},//이부분은 다이어리 정보 GETDIARY
    boxOfficeImage:{},//BOXOFFICE
    wishListImage:{},//WISHLIST
    recommandImage:{},//RECOMMAND
    loadingImage:false,
    blockbusterError:'',
    myDiaryError:'',
    writeDiaryError:'',
    getDiaryError:'',
    boxOfficeError:'',
    wishListError:'',
    recommandError:'',
}
 

const reducer=(state=initialState,action)=>{
    switch(action.type){

        case BLOCKBUSTER_REQUEST:{
            return produce(state=initialState,draft=>{
                draft.loadingImage=true
                draft.blockbusterError=''
            })
        }
        case BLOCKBUSTER_SUCCESS:{
            return produce(state=initialState,draft=>{
                draft.loadingImage=false
                draft.blockbusterImage=dummyImage.myDiaryImage
            })
        }
        case BLOCKBUSTER_FAILURE:{
            return produce(state=initialState,draft=>{
                draft.loadingImage=false
                draft.blockbusterError=action.error//saga에서 error객체 생성
            })
        }

        case MYDIARY_REQUEST:{
            return produce(state=initialState,draft=>{
                draft.loadingImage=true
                draft.myDiaryError=''
            })
        }
        case MYDIARY_SUCCESS:{
            return produce(state=initialState,draft=>{
                draft.loadingImage=false
                draft.myDiaryImage=action.data
            })
        }
        case MYDIARY_FAILURE:{
            return produce(state=initialState,draft=>{
                draft.loadingImage=false
                draft.myDiaryError=action.error//error로 바꿀수있을까?
            })
        }
        case GETDIARY_REQUEST:{
            return produce(state=initialState,draft=>{
                draft.loadingImage=true
                draft.getDiaryError=''
            })
        }
        case GETDIARY_SUCCESS:{
            return produce(state=initialState,draft=>{
                draft.loadingImage=false
                draft.getDiaryData=action.data
            })
        }
        case GETDIARY_FAILURE:{
            return produce(state=initialState,draft=>{
                draft.loadingImage=false
                draft.getDiaryError=action.error//error로 바꿀수있을까?
            })
        }
        case BOXOFFICE_REQUEST:{
            return produce(state=initialState,draft=>{
                draft.loadingImage=true
            })
        }
        case BOXOFFICE_SUCCESS:{
            return produce(state=initialState,draft=>{
                draft.loadingImage=false
                draft.boxOfficeImage=action.data
            })
        }
        case BOXOFFICE_FAILURE:{
            return produce(state=initialState,draft=>{
                draft.loadingImage=false
                draft.boxOfficeError=action.error//error로 바꿀수있을까?
            })
        }
        case WISHLIST_REQUEST:{
            return produce(state=initialState,draft=>{
                draft.loadingImage=true
            })
        }
        case WISHLIST_SUCCESS:{
            return produce(state=initialState,draft=>{
                draft.loadingImage=false
                draft.wishListImage=action.data
            })
        }
        case WISHLIST_FAILURE:{
            return produce(state=initialState,draft=>{
                draft.loadingImage=false
                draft.wishListError=action.error//error로 바꿀수있을까?
            })
        }
        case RECOMMAND_REQUEST:{
            return produce(state=initialState,draft=>{
                draft.loadingImage=true
            })
        }
        case RECOMMAND_SUCCESS:{
            return produce(state=initialState,draft=>{
                draft.loadingImage=false
                draft.recommandImage=action.data
            })
        }
        case RECOMMAND_FAILURE:{
            return produce(state=initialState,draft=>{
                draft.loadingImage=false
                draft.recommandError=action.error//error로 바꿀수있을까?
            })
        }
      
        default:{
            return state;
        }
    
    
    }
 }
    



export default reducer;