import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router ,RouterProvider, createBrowserRouter} from 'react-router-dom';
import Layout from './components/Layout.jsx';
import About from './components/About.jsx';
import Home from './components/Home.jsx';
import Contact from './components/Contact.jsx';
import NotFound from './components/NotFound.jsx';

const router=createBrowserRouter([
  {
    path: '/',
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<Home/>

      },
      {
        path:"about",
        element:<About/>

        
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path:"*",
        element:<NotFound/>
      }
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <RouterProvider router={router}/>
  </React.StrictMode>,
)
