import { useContext, useEffect, useState } from 'react';
import {BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import PrivateRoutes from './utilities/PrivateRoutes';
import Home from './components/Home'
import Signin from './components/Signin';
import Signup from './components/Signup';
import Test from './components/test';

import ErrorPage from './error-page';
import { UserContext } from './utilities/UserContext';


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
          <Route element={<Test />} path="/test" exact />
        </Route>
        <Route element={<Home />} path="/" />
        <Route element={<Signup />} path="/signup" />
        <Route element={<Signin />} path="/signin" />
      </Routes>
      </UserContext.Provider>
    </Router>
    </>
      
    
  )
}

export default App
