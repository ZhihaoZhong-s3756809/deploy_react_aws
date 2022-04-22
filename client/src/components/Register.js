import { register } from '../actions/UsersActions';
import '../styles/signup.css';
import { useNavigate } from "react-router-dom";
import { REGISTER } from '../types/Users';
import { Button } from 'react-bootstrap';

const Register = (props) => {

    const history = useNavigate();

    const submitHandler = (event) => {
        event.preventDefault();

        const username = event.target.username.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;
        
        const alert_e =document.getElementById('Alert');

        if(username && password && confirmPassword) {
            if(password === confirmPassword) {
                register(username, password, confirmPassword)(dispatch => {
                    if(dispatch.type === REGISTER) {
                        history('/');
                    } else
                        alert_e.innerHTML = 'This username has been registered!';
                });
            } else
                alert_e.innerHTML = 'Passwords not match!';
        } else
            alert_e.innerHTML = 'Please fill all contents!';
    }

    return(
        <div>
            <h1>Sign up for CUS3</h1>
            <div class='regform'>
                <form onSubmit={submitHandler}>
                    <label>Email (would be used as your username)</label><br/>
                    <input type='text' name='username' placeholder='email' required/><br/>
                    <label>Password</label><br/>
                    <input type='text' name='password' placeholder='password' required/><br/>
                    <label>Confirm the Password</label><br/>
                    <input type='text' name='confirmPassword' placeholder='enter the password again' required/><br></br>
                    <Button type='submit' className='regisbtn'> Register </Button><br/>
                    <a href='/'>Already have an account? Login here.</a>
                </form>
                <span className='Alert' id='Alert'></span>
            </div>
        </div>
    );
}

export default Register;