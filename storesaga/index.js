import user from './user.state'
import post from './post.state'
import image from './image.state'
import search from './search.state'
import {all,fork} from 'redux-saga/effects'
import axios from 'axios'



export default function* rootsaga(){
    yield all([
        fork(user),
        // fork(post),
        // fork(image),
        // fork(search)
    ])
}