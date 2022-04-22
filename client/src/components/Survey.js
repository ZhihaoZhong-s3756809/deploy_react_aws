import '../styles/main.css'
import { useNavigate } from "react-router-dom";
import cookie from 'react-cookies';
import { SUCCESS } from '../types/Surveys';
import { getSurveyQuestion, submitSurveyAnswer } from '../actions/SurveysActions'

const Survey = () => {

    const history = useNavigate();
    const username = cookie.load('username');
    const uniname = cookie.load('uniName');
    const coursename = cookie.load('courseName');

    const q1 = cookie.load('q1');
    const q2 = cookie.load('q2');
    const q3 = cookie.load('q3');
    const q4 = cookie.load('q4');
    const q5 = cookie.load('q5');

    // getSurveyQuestion(uniname, coursename, 'q' + 1)(dispatch => {
    //     if(dispatch.type === SUCCESS){
    //         q1 = dispatch.content;
    //     }
    // });

    const submitHandler0 = (event) => {
        event.preventDefault();
        history('/rmit', {state: ''});
        cookie.remove('courseName');
    }

    const submitHandler1 = (event) => {
        event.preventDefault();

        const surveyAnswers = {
            a1: event.target.a1.value,
            a2: event.target.a2.value,
            a3: event.target.a3.value,
            a4: event.target.a4.value,
            a5: event.target.a5.value
        }

        submitSurveyAnswer(username, uniname, coursename, surveyAnswers)(dispatch => {
            if(dispatch.type === SUCCESS){
                history('/rmit', {state: ''});
                cookie.remove('courseName');
            }
        })

    }

    return (
        <div>
            <h2>Survey towards the course {coursename} of {uniname}</h2>
            <h4>Hi, {username}</h4>
            <form onSubmit={ submitHandler0 }><button className='logoutBtn' type='submit'>Back</button></form>
            <form onSubmit={ submitHandler1 }>
                <div className='qCard'>
                    <label>1. {q1}</label>
                    <input type='text' name='a1' required/><br/>
                </div>
                <div className='qCard'>
                    <label>2. {q2}</label>
                    <input type='text' name='a2' required/><br/>
                </div>
                <div className='qCard'>
                    <label>3. {q3}</label>
                    <input type='text' name='a3' required/><br/>
                </div>
                <div className='qCard'>
                    <label>4. {q4}</label>
                    <input type='text' name='a4' required/><br/>
                </div>
                <div className='qCard'>
                    <label>5. {q5}</label>
                    <input type='text' name='a5' required/><br/>
                </div>
                <button className='btn' type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default Survey;