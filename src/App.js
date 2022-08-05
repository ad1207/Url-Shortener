import logo from './logo.svg';
import './App.css';
import Login from './Login';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Signup from './Signup';
import Url from './Url';
import Dashboard from './Dashboard';

function App() {
  let s = document.cookie.toString().slice(6)
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/:code' element={<Url/>}/>
        <Route path='/user/login' element={s?<Navigate to='/user/dashboard'/>:<Login/>}/>
        <Route path='/user/dashboard' element={<Dashboard/>}/>
        <Route path='/user/signup' element={s?<Navigate to='/user/dashboard'/>:<Signup/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
