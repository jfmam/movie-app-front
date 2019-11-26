export const Login ='front/Login'
export const signUp='front/signUp'

export function setLogin({id,password}){
    return{type:Login,id,password}
}

export function setSignUp({id,password,nickname,name}){
    return{type:signUp,id,password,name,nickname}
}