import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter,  RouterProvider, Route, createRoutesFromElements} from 'react-router-dom';
import Root from './Root.jsx';
import Home from "./components/Home/Home.jsx"
import About from "./components/About/About.jsx"
import Contact from "./components/Contact/Contact.jsx"
import User from "./components/User/User.jsx"
import Github from './components/Github/Github.jsx';
import GithubInfoLoader from "./components/Github/GithubInfoLoader.jsx"


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root/>,
//     children: [{
//       path: "home",
//       element: <Home/>
//     }, {
//       path: "about",
//       element: <About/>
//     }, {
//       path: "contact",
//       element: <Contact/>
//     },
//     {
//       path: "userid",
//       element: <User/>
//      },
//     {
//       path: "user/:github",
//       element: <Github/>,
//       loader: githubInfoLoader 
      
//     }
//   ]
// }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root/>}>
      <Route path='home' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user' element={<User/>}/>
      <Route loader={GithubInfoLoader} path='github' element={<Github/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
