import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {  RouterProvider, createBrowserRouter,Routes,Route,  createRoutesFromElements } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import About from './components/About.jsx';
import Home from './components/Home.jsx';
import Contact from './components/Contact.jsx';
import NotFound from './components/NotFound.jsx';
import Efte from './components/Efte.jsx';
import User from './components/User.jsx';
import Github from './components/Github.jsx';

// const router=createBrowserRouter([
//   {
//     path: '/',
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>

//       },
//       {
//         path:"about",
//         element:<About/>

        
//       },
//       {
//         path:"contact",
//         element:<Contact/>
//       },
//       {
//         path:"*",
//         element:<NotFound/>
//       }
//     ]

//   }
// ])
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
    <Route path='' element={<Home/>} />
    <Route path='about' element={<About/>} />
    <Route path='contact' element={<Contact/>} />
    <Route path='github' element={<Github />} />
    <Route path='efte' element={<Efte/>} />
    <Route path='user/:userid' element={<User/>} />
    <Route path='*' element={<NotFound/>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <RouterProvider router={router}/>
  </React.StrictMode>,
)
