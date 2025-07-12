import { StrictMode } from 'react'


import Home from './component/home/home.jsx'
import './App.css'
import About from './component/about/about.jsx'
import Layout from './layout.jsx'
import { createRoot } from 'react-dom/client'
import './index.css'
import Contact from './component/contact/contact.jsx'
import Git from './component/git/git.jsx'


import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router=createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {path: '',
        element: <Home/>
      },

      {

path: 'about',
        element: <About/>


  },
   {path: 'contact',
        element: <Contact/>
      },
      {
        path:'git',
        element:<Git/>
      }


]
}]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>

  </StrictMode>
)
