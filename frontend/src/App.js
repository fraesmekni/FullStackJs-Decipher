import { lazy,Suspense  } from 'react';
import Login from './page/Login'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Register from './page/Register/register';
import Dashboard from './page/Dashboard';
import Navbarr from './Components/Navbar/navbar';
<<<<<<< HEAD
import Loader from './Components/Loader';
const ForgetPassword =lazy(() => import('./page/ForgetPassword'));
const ResetPassword = lazy(()=>import('./page/ResetPassword'))
const Profile = lazy(()=>import('./page/Profile'))
=======
import { useContext } from "react";
>>>>>>> 16a7a304b62f6dbf93d83951d8a61ba87b5c6b88

function App() {

  return (
    <Suspense fallback={<Loader />}>
    <Router>
<<<<<<< HEAD
     <Navbarr /> 
    <Routes> 
    <Route path="/login" element={<Login/>} />
=======
    <Navbarr />

    <Routes>
    
    <Route path="/login" element={ <Login /> } />
>>>>>>> 16a7a304b62f6dbf93d83951d8a61ba87b5c6b88
    <Route path="/register" element={<Register/>} />     
    <Route path="/dashboard" element={<Dashboard/>} />
    <Route path="/forget-password" element={<ForgetPassword/>} />
    <Route path="/reset-password" element={<ResetPassword/>} />
    <Route path="/profile" element={<Profile/>} />
    </Routes>
    </Router>
    </Suspense>
  );
}

export default App;
