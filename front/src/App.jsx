import { useContext } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Signin from './components/Signin';
import Signup from './components/Signup';
import Test from './components/test';

import ErrorPage from './error-page';


function App() {
  
  //const auth = useContext(authentified)
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
      
    },
    {
      path: "/signup",
      element: <Signup />,
      errorElement: <ErrorPage />,
      
    },
    {
      path: "/signin",
      element: <Signin />,
      errorElement: <ErrorPage />,
      
    },
    {
      path: "/test",
      element: <Test />,
      errorElement: <ErrorPage />,
      
    },
  ]);

  return (
    
    
      
      <RouterProvider router={router} /> 
    
  )
}

export default App
