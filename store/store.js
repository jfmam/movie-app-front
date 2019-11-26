import {createAction,handleActions} from 'redux-actions'
import {produce} from 'immer'

const LOADIMAGE='image/LOADIMAGE'

export const loadimage=createAction(LOADIMAGE)


const initialState={
  image : [{
      poster: {
          uri: 'https: //placeimg.com/50/50/any'
      }
  }, {
      poster: {
          uri: 'https: //placeimg.com/50/50/any'
      }
  }, {
      poster: {
          uri: 'https: //placeimg.com/50/50/any'
      }
  }, {
      poster: {
          uri: 'https: //placeimg.com/50/50/any'
      }
  }]
}
export default handleActions({
    [LOADIMAGE]:(state,action)=>
    produce(state,draft=>{
        return state;
    })
},initialState)