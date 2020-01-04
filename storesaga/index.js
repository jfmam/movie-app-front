import user from './user.state'
import post from './post.state'
import image from './image.state'
import {all} from 'redux-saga'

export default function* rootsaga(){
    yield all([
        call(user),
        call(post),
        call(image)
    ])
}