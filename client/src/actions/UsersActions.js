import axios from 'axios';
import { ERROR } from '../types/Common';
import { LOGIN, REGISTER } from '../types/Users';

const BASE_ROUTE = 'http://localhost:5000/api/';

async function sendPost(route, msg) {
    route = BASE_ROUTE + route;
    try{
        return await axios.post(route, msg);
    }catch(error){
        return {data: ERROR}
    }
}

export const login = (username, password) => async dispatch => {
    const user = {
        username: username,
        password: password
    }
    sendPost('users/login', user).then(res => {
        if(res.data.validate === true)
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
        password: password
    }
    if(password === confirmPassword){
        sendPost('users/register', user).then(res => {
            if(res.data.validate === true)
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