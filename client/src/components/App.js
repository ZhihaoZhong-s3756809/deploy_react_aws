import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './Landing';
import Register from './Register';
import Home from './Home';
import Rmit from './RMIT';
import Survey from './Survey';

export default function App() {
    <Router/>;     
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Landing /> } />

                <Route path='/register' element={<Register /> } />

                <Route path='/home' element={<Home />} />

                <Route path='rmit' element={<Rmit />} />

                <Route path='survey' element={<Survey />} />
            </Routes>
        </BrowserRouter>
    );
}