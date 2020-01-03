import {combineReducers} from 'redux'
import user from './user.state'
import image from './image.state'
import post from './post.state'

const rootReducer=combineReducers({
    user,
    image,
    post
})

export default rootReducer