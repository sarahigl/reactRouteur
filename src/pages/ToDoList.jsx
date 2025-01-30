import { useState } from 'react';
import './ToDoList.css'

const TODOS = [
  { tache: "Faire les courses", date: "2025/08/22", checked: false, heure: 6, categorie: "productivite"},
  { tache: "Sortir le chien", date: "2025/08/22", checked: true, heure: 4, categorie: "loisir"},
  { tache: "Faire le ménage", date: "2025/08/22", checked: false, heure: 2, categorie: "productivite"}
];


  function Todo({todo, heure, heureRestante}) {
    const [heures, setHeures] = useState(heureRestante)

    function handleClickMinus(){
      if (heures > 0) {
        setHeures(heures - 1)
      }
      console.log('temps insuffisant')
    };
    function handleClickPlus(){
      setHeures(heures + 1)
    };

    function handleClick(){
      // alert({todo});
    }
 
    if(todo.checked){
      return <>
      <li className='green' onClick={handleClick}>
        <input type="checkbox" defaultChecked={todo.checked}/>
        {todo.tache} - {todo.date} 
      </li>
    </>
    }else{
      return <>
      <li className='orange' onClick={handleClick}>
        {todo.tache} - {todo.date}
          <button onClick={handleClickMinus}>-</button>
          <button onClick={handleClickPlus}>+</button>
        {heures}
      </li>
      </>
    }
  }
  function Form({onSubmit}){
    function handleChange(event){
      console.log(event.target.value);
    }

    return(
      <form onSubmit={onSubmit}>
        <input type="text" placeholder='La Todo' onChange={((event)=>handleChange(event))} />
        <input type="text" placeholder='La Date' onChange={((event)=>handleChange(event))}/>
        <input type="submit" onChange={((event)=>handleChange(event))}/>
      </form>
    )
  }
// function ToDoTernaire({todo}){
//   console.log(todo)
 
//   return <>
//     <li className= {todo.checked ? "green" : "orange"}>
//       <input type="checkbox" defaultChecked={todo.checked}/>
//       {todo.tache} - {todo.date}
//     </li>
//   </>
// }

  // function List(){
  //   return (
  //     <>
  //       <ul>
  //         {TODOLIST.map((todo, index, heureRestante) => (
  //           <Todo key={index} todo={todo} heureRestante={todo.heure} />
  //         ))}
  //       </ul>
  //     </>
  //   );
  // }

  export default function ToDoList() {
  const DATE = new Date();
  const [productivite, setProductivite] = useState( true )
  const [loisir, setLoisir] = useState( true )

  const TODOLIST = TODOS.filter(element => { 
    if( element.categorie == 'productivite' && !productivite == true ){
       return false 
    }else if (element.categorie == 'loisir' && !loisir == true){
      return false
    }
    return true
  })

  function handleOnSubmit(event){
    event.preventDefault()

    const inputs= document.querySelectorAll('input[type="text"]')
    inputs.forEach(inputs=>{
      console.log(inputs.value)
    })
  }
  return (
    <>
      <article className='todolist'>
        <h1>Ma todo :</h1>
        <h2>{DATE.toLocaleString()}
        </h2>
        <ul>
          {TODOLIST.map((todo, index, heureRestante) => (
            <Todo key={index} todo={todo} heureRestante={todo.heure} />
          ))}
        </ul>
      </article>
      <section>
        {/* <input type="checkbox" name="productivite" id="" checked={productivite} onChange={()=>setProductivite(!productivite)}/><label>Productivité</label> */}
          <input type="checkbox" name="productivite" id="" value="productivite" checked={productivite} onChange={()=>setProductivite(!productivite)} /><label>Productivité</label>
          <input type="checkbox" name="loisir" id="" value="loisir" checked={loisir} onChange={()=>setLoisir(!loisir)}/><label>Loisir</label>

      </section>
      <Form onSubmit={((event)=>handleOnSubmit(event))}/>
    </>
  )
}


