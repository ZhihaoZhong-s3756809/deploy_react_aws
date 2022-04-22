import '../styles/main.css'
import { useNavigate } from "react-router-dom";
import cookie from 'react-cookies';
import cs from '../imgs/cs.png'
import { getSurveyQuestion } from '../actions/SurveysActions'
import { SUCCESS } from '../types/Surveys';

const Rmit = () => {

    const history = useNavigate();
    const username = cookie.load('username');
    const uniname = cookie.load('uniName');
    cookie.save('courseName', 'Bachelor of Computer Science', {path:'/'});

    var q1 = '';
    var q2 = '';
    var q3 = '';
    var q4 = '';
    var q5 = '';

    getSurveyQuestion(uniname, 'Bachelor of Computer Science', 'q1')(dispatch => {
        if(dispatch.type === SUCCESS){
            q1 = dispatch.content;
            cookie.save('q1', q1);
        }
    });
    getSurveyQuestion(uniname, 'Bachelor of Computer Science', 'q2')(dispatch => {
        if(dispatch.type === SUCCESS){
            q2 = dispatch.content;
            cookie.save('q2', q2);
        }
    });
    getSurveyQuestion(uniname, 'Bachelor of Computer Science', 'q3')(dispatch => {
        if(dispatch.type === SUCCESS){
            q3 = dispatch.content;
            cookie.save('q3', q3);
        }
    });
    getSurveyQuestion(uniname, 'Bachelor of Computer Science', 'q4')(dispatch => {
        if(dispatch.type === SUCCESS){
            q4 = dispatch.content;
            cookie.save('q4', q4);
        }
    });
    getSurveyQuestion(uniname, 'Bachelor of Computer Science', 'q5')(dispatch => {
        if(dispatch.type === SUCCESS){
            q5 = dispatch.content;
            cookie.save('q5', q5);
        }
    });

    const submitHandler = (event) => {
        history('/home', {state: ''});
        cookie.remove('uniName');
    }

    return (
        <div>
            <h1>Courses of {uniname}</h1>
            <h4>Hi, {username}</h4>
            <form onSubmit={ submitHandler }><button className='logoutBtn' type='submit'>Back</button></form>
            <a href='survey'><div className='card'>
                <img src={cs} alt ='' className='cardImg'/>
                <label className='cardTxt'>Bachelor of Computer Science</label>
            </div></a>
        </div>
    );
}

export default Rmit;