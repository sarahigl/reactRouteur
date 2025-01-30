import { NavLink, Outlet} from 'react-router-dom'
export default function Portfolio(){
    return(
       
        <>
        <header>
            <h1>Portfolio</h1>
            <nav>
                <NavLink to={"/portfolio/carduser"}>CardUSer</NavLink>
                <br />
                <NavLink to={"/portfolio/calendar"}>Calendar</NavLink>
                <br />
                <NavLink to={"/portfolio/todolist"}>ToDolist</NavLink>
            </nav>
        </header>
        <main>
            <Outlet/>
        </main>
        </>
    )
}