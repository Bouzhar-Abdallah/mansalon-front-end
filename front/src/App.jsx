import { useContext, useEffect, useState } from 'react';
import {BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import PrivateRoutes from './utilities/PrivateRoutes';
import Home from './components/Home'
import Signin from './components/Signin';
import Signup from './components/Signup';
import Reservations from './components/reservations';

import ErrorPage from './error-page';
import { UserContext } from './utilities/UserContext';
import Test from './components/test';
import Navbar from './components/navbar';


function App() {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });
  
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);
  return (
    
    <>
    <Router>
      <UserContext.Provider value={{user, setUser}}> 
      
      <Routes >
        <Route element={<PrivateRoutes />} >
          <Route element={<Reservations />} path="/reservations" exact />
        </Route>
        <Route element={<Home />} path="/" />
        <Route element={<Signup />} path="/signup" />
        <Route element={<Signin />} path="/signin" />
        <Route element={<Test />} path="/test" />
      </Routes>
      </UserContext.Provider>
    </Router>
    </>
      
    
  )
}

export default App
