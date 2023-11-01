import {BrowserRouter, Route, Routes ,Link} from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Contact from './components/Contact';
import About from './components/About';
import Home from './components/Home';
import Login from './backend/Login_auth';

function App(){
    return (
        <main >
        <BrowserRouter >
            <NavBar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/Contact' element={<Contact/>}/>
                <Route path='/About' element={<About/>}/>
                <Route path='/login' element={<Login/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
        </main>
        
        
    )
}
export default App