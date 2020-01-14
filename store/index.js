import {combineReducers} from 'redux'
import user from './user.state'
import image from './image.state'
import post from './post.state'
import search from './search.state'

const rootReducer=combineReducers({
    user,
    image,
    post,
    search
})

export default rootReducer