import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Root.jsx';
import Home from "./components/Home/Home.jsx"
import About from "./components/About/About.jsx"
import Contact from "./components/Contact/Contact.jsx"


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    children: [{
      path: "home",
      element: <Home/>
    }, {
      path: 'about',
      element: <About/>
    }, {
      Path: "/contact",
      element: <Contact/>
    }]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
