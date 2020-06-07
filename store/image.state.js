import {produce} from 'immer'



export const MYDIARY_REQUEST='fornt/MYDIARY_REQUEST'//bomttomnavigation의 다이어리 페이지부분
export const MYDIARY_SUCCESS='fornt/MYDIARY_SUCCESS'
export const MYDIARY_FAILURE='fornt/MYDIARY_FAILURE'

export const GETDIARY_REQUEST = 'fornt/GETDIARY_REQUEST'//다이어리 detail 부분
export const GETDIARY_SUCCESS = 'fornt/GETDIARY_SUCCESS'
export const GETDIARY_FAILURE = 'fornt/GETDIARY_FAILURE'

export const BOXOFFICE_REQUEST = 'fornt/BOXOFFICE_REQUEST'//박스오피스
export const BOXOFFICE_SUCCESS = 'fornt/BOXOFFICE_SUCCESS'
export const BOXOFFICE_FAILURE = 'fornt/BOXOFFICE_FAILURE'

export const RECOMMAND_REQUEST = 'fornt/RECOMMAND_REQUEST'//추천
export const RECOMMAND_SUCCESS = 'fornt/RECOMMAND_SUCCESS'
export const RECOMMAND_FAILURE = 'fornt/RECOMMAND_FAILURE'


 const initialState={
    diaryLoading:false,
    myDiaryImage:{},//다이어리 목록 사진 MYDIARY
    writeDiaryImage:{},//다이어리 쓸때 stickyheader에 붙는 이미지부분
    getDiaryData:{},//이부분은 다이어리 정보 GETDIARY
    boxOfficeImage:{},//BOXOFFICE
    recommandImage:{},//RECOMMAN
    myDiaryError:'',
    writeDiaryError:'',
    getDiaryError:'',
    boxOfficeError:'',
    recommandError:'',
}
 

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case MYDIARY_REQUEST:{
            return produce(state,draft=>{
                draft.diaryLoading=true
                draft.myDiaryError=''
                draft.myDiaryImage={}
            })
        }
        case MYDIARY_SUCCESS:{
            return produce(state,draft=>{
                draft.diaryLoading=false;
                draft.myDiaryImage=action.data
            })
        }
        case MYDIARY_FAILURE:{
            return produce(state,draft=>{
           
                draft.myDiaryError=action.error
            })
        }
        case GETDIARY_REQUEST:{
            return produce(state,draft=>{
              
                draft.getDiaryError=''
            })
        }
        case GETDIARY_SUCCESS:{
            return produce(state,draft=>{
          
                draft.getDiaryData=action.data
            })
        }
        case GETDIARY_FAILURE:{
            return produce(state,draft=>{
            
                draft.getDiaryError=action.error//error로 바꿀수있을까?
            })
        }
        case BOXOFFICE_REQUEST:{
            return produce(state=initialState,draft=>{
                draft.boxOfficeImage={},
                 draft.boxOfficeError=''
            })
        }
        case BOXOFFICE_SUCCESS:{
            return produce(state,draft=>{        
                draft.boxOfficeImage=action.data
            })
        }
        case BOXOFFICE_FAILURE:{
            return produce(state,draft=>{
                draft.boxOfficeError=action.error//error로 바꿀수있을까?
            })
        }
        case RECOMMAND_REQUEST:{
            return produce(state,draft=>{
              draft.recommandImage={};
              draft.recommandError='';
            })
        }
        case RECOMMAND_SUCCESS:{
            return produce(state,draft=>{         
                draft.recommandImage=action.data
            })
        }
        case RECOMMAND_FAILURE:{
            return produce(state,draft=>{
                draft.recommandError=action.error//error로 바꿀수있을까?
            })
        }
      
        default:{
            return state;
        }
    
    
    }
 }
    



export default reducer;