import { useContext } from 'react';
import {BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import PrivateRoutes from './utilities/PrivateRoutes';
import Home from './components/Home'
import Signin from './components/Signin';
import Signup from './components/Signup';
import Test from './components/test';

import ErrorPage from './error-page';


function App() {
  

  return (
    
    <>
    <Router>
      <Routes >
        <Route element={<PrivateRoutes />} >
          <Route element={<Test />} path="/test" exact />
          
        </Route>
        <Route element={<Home />} path="/" />
        <Route element={<Signup />} path="/signup" />
        <Route element={<Signin />} path="/signin" />
      </Routes>
    </Router>
    </>
      
    
  )
}

export default App
