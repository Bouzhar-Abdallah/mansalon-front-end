import { useContext } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Signin from './components/Signin';
import Signup from './components/Signup';
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
  ]);

  return (
    
    <div className="App">
      
      <RouterProvider router={router} /> 
    </div>
  )
}

export default App
