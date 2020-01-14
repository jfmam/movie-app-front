import user from './user.state'
import post from './post.state'
import image from './image.state'
import search from './search.state'
import {all,call} from 'redux-saga'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:4000/api';

export default function* rootsaga(){
    yield all([
        call(user),
        call(post),
        call(image),
        call(search)
    ])
}