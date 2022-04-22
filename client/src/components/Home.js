import '../styles/main.css'
import { useNavigate } from "react-router-dom";
import cookie from 'react-cookies';
import rmit from '../imgs/RMIT.logo.png'

const Home = () => {

    const history = useNavigate();
    const username = cookie.load('username');
    cookie.save('uniName', 'RMIT University', {path:'/'});

    const submitHandler = (event) => {
        history('/', {state: ''});
        cookie.remove('username');
    }

    return (
        <div>
            <h1>Welcome to Courses of Universities Satisfaction Surveys System</h1>
            <h4>Hi, {username}</h4>
            <form onSubmit={ submitHandler }><button className='logoutBtn' type='submit'>Log out</button></form>
            <a href='/rmit'><div className='card'>
                <img src={rmit} alt ='' className='cardImg'/>
                <label className='cardTxt'>Courses of Royal Melbourne Institute of Technology University Surveys</label>
            </div></a>
        </div>
    );
}

export default Home;