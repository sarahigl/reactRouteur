import { useState } from 'react'
import './CardUser.css'
import Card from './Card'


const USERS = [
  {image : "https://picsum.photos/200", pseudo : 'John Doe', email : 'j.doe@anonymous.com', description : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus enim, ab veniam temporibus cumque dolorem omnis in consectetur architecto animi error, dignissimos ea magnam blanditiis eius officiis, necessitatibus quis maxime?', genre : 'non-binaire'},
  {image : "https://picsum.photos/200", pseudo : 'Han Solo', email : 'h.solo@millenium.fal', description : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus enim, ab veniam temporibus cumque dolorem omnis in consectetur architecto animi error, dignissimos ea magnam blanditiis eius officiis, necessitatibus quis maxime?', genre : 'homme'},
  {image : "https://picsum.photos/200", pseudo : 'Kim Possible', email : 'kimpossible@nickelodeon.tv', description : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus enim, ab veniam temporibus cumque dolorem omnis in consectetur architecto animi error, dignissimos ea magnam blanditiis eius officiis, necessitatibus quis maxime?', genre : 'femme'}
]



export default function CardUser() {
  
  const [search, setSearch] = useState("")
  const USERS_LIST = USERS.filter(user=>{
    if(!user.pseudo.includes(search)){
      return false
    }
    return true
  })
  return (
    <>
    <h1>CardUser Project</h1>
      <h1>Liste des Utilisateurs</h1>
      <input className="searchBar" type="text" onChange={(event)=>setSearch(event.target.value)} />
      <section>

        {USERS_LIST.map((user, index) => (<Card key={index} pseudo={user.pseudo} image={user.image} email={user.email} genre={user.genre} description={user.description}/>))}
      </section>
      {USERS.length > 0 && <p>il y a {USERS.length} utilisateurs inscrits !</p>}
    
    </>
  )
}