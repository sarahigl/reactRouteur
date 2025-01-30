import { createBrowserRouter, NavLink, Outlet, RouterProvider } from 'react-router-dom'
import Accueil from './pages/Accueil'
import Calendar from './pages/Calendar'
import CardUser from './pages/CardUser'
import Contact from './pages/Contact'
import PageError from './pages/PageError'
import Portfolio from './pages/Portfolio'
import ToDoList from './pages/ToDoList'
import './App.css'

function Root(){
  return(
    <>
    <header>
      <h1>React project with router</h1>
      <nav>
        <NavLink to={"/"}>Accueil</NavLink>
        <br />
        <NavLink to={"/portfolio"}>portfolio</NavLink>
        <br />
        <NavLink to={"/contact"}>contact</NavLink>
      </nav>
      </header>
    <main>
      <Outlet/>
    </main>
    <footer></footer>
    </>
  )
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement:<PageError/>,
    children:[
      {
        path: "",
        element: <Accueil/>
      }
    ]
  }, 
  {
    path: "/portfolio",
    element: <Portfolio/>,
    children: [
      {
        path: "/portfolio/carduser",
        element: <CardUser/>
      },
      {
        path: "/portfolio/calendar",
        element: <Calendar/>
      },
      {
        path: "/portfolio/todolist",
        element: <ToDoList/>
      }]
  },
  {
    path: "/contact",
    element: <Contact/>
  }
])

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
