
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AdminHome from './Components/adminHome';
import AdminLogin from './Components/adminLogin';
import LandingPage from './Components/landingPage';
import UserLogin from './Components/userLogin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/admin-login' element={<AdminLogin/>}/>
        <Route path='/user-login' element={<UserLogin/>}/>
        <Route path='/admin/*' element={<AdminHome/>}/>
      </Routes>
      </BrowserRouter>
       
    </div>
  );
}

export default App;
