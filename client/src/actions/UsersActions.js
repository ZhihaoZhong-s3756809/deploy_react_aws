import axios from 'axios';
import { ERROR } from '../types/Common';
import { LOGIN, REGISTER } from '../types/Users';

const BASE_ROUTE = 'https://rhe5u2o28i.execute-api.us-east-1.amazonaws.com/dev/users';

async function sendPost(route, msg) {
    route = BASE_ROUTE;
    try{
        alert("doing post to the set route...");
        return await axios.post(route, msg);
    }catch(error){
        return {data: ERROR}
    }
}

async function sendGet(route, msg) {
    route = BASE_ROUTE;
    try{
        return await axios.get(route, msg);
    }catch(error){
        return {data: ERROR}
    }
}

export const login = (username, password) => async dispatch => {
    const user = {
        username: username,
        action: "GET"
    }
    alert("login function called!");

    sendPost('users/login', user).then(res => {
        if(res.body.username === username && res.body.password === password)
            dispatch({
                type: LOGIN
            })
        else
            dispatch({
                type: ERROR
            })
    })
}

export const register = (username, password, confirmPassword) => async dispatch => {
    const user = {
        username: username,
        password: password,
        action: "POST"
    }
    if(password === confirmPassword){
        sendPost('users/register', user).then(res => {
            if(res.body.username === username)
                dispatch({
                    type: REGISTER
                })
            else
                dispatch({
                    type: ERROR
                })
        })
    }else{
        dispatch({
            type: ERROR
        })
    }
}