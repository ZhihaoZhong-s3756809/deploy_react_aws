import axios from 'axios';
import { ERROR } from '../types/Common';
import { SUCCESS } from '../types/Surveys';

const BASE_ROUTE = 'http://localhost:5000/api/';

async function sendPost(route, msg) {
    route = BASE_ROUTE + route;
    try{
        return await axios.post(route, msg);
    }catch(error){
        console.log(ERROR);
        return null;
    }
}

export const getSurveyQuestion = (uniName, courseName, qNbr) => async dispatch =>{
    const surveyQuestion = {
        uniName: uniName,
        courseName: courseName,
        qNbr: qNbr
    }

    sendPost('surveys/getq', surveyQuestion).then(res => {
        if(res.data.success === true)
            dispatch({
                type: SUCCESS,
                content: res.data.questionBody
            })
        else
            dispatch({
                type: ERROR,
                content: ''
            })
    })
}

export const submitSurveyAnswer = (username, uniName, courseName, surveyAnswers) => async dispatch => {
    const surveyAnswer = {
        username: username,
        uniName: uniName,
        courseName: courseName,
        surveyAnswers: surveyAnswers
    }

    sendPost('completions/fillq', surveyAnswer).then(res => {
        if(res.data.success === true)
            dispatch({
                type: SUCCESS
            })
        else
            dispatch({
                type: ERROR
            })
    })
}