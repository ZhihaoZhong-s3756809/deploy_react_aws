import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/login.css';
import logo from '../imgs/cus3_logo.png';
import { Button } from 'react-bootstrap';
import { login } from '../actions/UsersActions';
import { LOGIN } from '../types/Users';
import { useNavigate } from "react-router-dom";
import cookie from 'react-cookies';

const Landing = () => {

    const history = useNavigate();

    const submitHandler = (event) => {
        event.preventDefault();
        const username = event.target.username.value;
        const password = event.target.password.value;

        login(username, password)(dispacth => {
            if(dispacth.type === LOGIN) {
                cookie.save('username', username, {path:'/'});
                history('/home', {state: username});
            } else {
                document.getElementById('Alert').innerHTML =
                    'Login failed! Please check the username and password and try again!'
            }
        })
    }

    return (
        <div>
            <img src={logo} class='logo' height='50px' alt =''/>
            <hr />
            <h1>Courses of Universities Satisfaction Surveys System Login</h1>
            <div className='loginform'>
                <form onSubmit={submitHandler}>
                    <label>Username</label><br/>
                    <input type='text' name='username' placeholder='Username' required/><br/>
                    <label>Password</label><br/>
                    <input type='password' name='password' placeholder='Password' required/><br/>
                    <Button variant="primary" type='submit' className='loginbtn'>Sign in</Button><br/><br/>
                    <input class='cbox' type='checkbox' name='remember' checked/><br/>Remember me
                </form><br/>
                Don't have an account?&nbsp;<a href='register'><p type='color: #0000FF'><b>Register for a new account</b></p></a>
            </div>
            <span className='alert' id='Alert'></span>
        </div>
    );
}

export default Landing;