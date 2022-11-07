import './App.css';
import Home from './componenets/home'
import About from './componenets/about'
import Gallery from './componenets/gallery'
import { Link, Route, Routes, Navigate} from 'react-router-dom';
import { useState } from 'react';
import Login from './componenets/login';
import Signup from './componenets/signUp';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0l6yfikUJPrynpP248mGk1aS6VFl6-Qw",
  authDomain: "fir-auth-26bc0.firebaseapp.com",
  projectId: "fir-auth-26bc0",
  storageBucket: "fir-auth-26bc0.appspot.com",
  messagingSenderId: "847004981213",
  appId: "1:847004981213:web:7391daf2a0542da803c834"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {

  

  const [isLogin , setIsLogin] = useState(false)

  return (
    <div >

    <button onClick={()=>{
      setIsLogin(!isLogin)
    }}>Toggle Login test</button>




  {  
  (isLogin) ?
  <ul>
    <li>
      <Link to={'/'}>Home</Link>
    </li>
    <li>
    <Link to={'/about'}>About</Link>
    </li>
    <li>
    <Link to={'/gallery'}>Gallery</Link>
    </li>
  </ul>
  : 
  <ul>
  <li>
    <Link to={'/'}>Login</Link>
  </li>
  <li>
  <Link to={'/signup'}>Sign Up</Link>
  </li>
  </ul>
  }


{
  (isLogin) ?
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/gallery' element={<Gallery/>}></Route>
        <Route path='*' element={
          <div><h1>404 Error</h1></div>
        } />
      </Routes>
      :
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='*' element={<Navigate to="/" replace={true} />} />
      </Routes>
      }

      
    </div>
  );
}

export default App;
