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
    <header className="header">
        <h1>Sarah's React Hub</h1>
        <nav className="nav">
          <NavLink to={"/"} className="nav-link">Accueil</NavLink>
          <NavLink to={"/portfolio"} className="nav-link">Portfolio</NavLink>
          <NavLink to={"/contact"} className="nav-link">Contact</NavLink>
        </nav>
      </header>
    <main>
      <Outlet/>
    </main>
    <footer className="footer">
      <p>© 2023 Sarah's React Hub. Tous droits réservés.</p>
    </footer>
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
