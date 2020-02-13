import user from './user.state'
import post from './post.state'
import image from './image.state'
import search from './search.state'
import {all,fork} from 'redux-saga/effects'
import axios from 'axios'

axios.defaults.withCredentials=true
axios.defaults.baseURL = 'http://54.180.186.62/api'

export default function* rootsaga(){
    yield all([
        fork(user),
         //fork(post),
        fork(image),
        fork(search)
    ])
}