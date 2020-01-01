import {combineReducers} from 'redux'
import user from './user.state'
import image from './image.state'

const rootReducer=combineReducers({
    user
})

export default rootReducer