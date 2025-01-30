import { useState } from 'react';
import './Calendar.css'

const DAY = ['Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi','Dimanche'];
const MONTH = ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre'];
const DAY_LETTER = DAY.map((day)=>(day.charAt(0)))

function Day({ jour, className, onClick }){
  return(
    <div className={className} onClick={onClick}>
      <div>{jour}</div>
    </div>
  )
}

function handleClick(event){
  const element = document.getElementsByClassName('selected');
  if(element.length>0){
    console.log('element full')
    Array.from(element).forEach(selection=>{
      selection.classList.remove('selected');
    });
  }
  event.target.classList.add('selected')
}
export default function Calendar() {
  
  const ROW = [];
  
  for(let i=1; i<=31;i++){
    ROW.push(<Day key={i} jour={i} className={'backgroundOrange'} onClick={handleClick}/>)
  }
  const [evenement, setEvenement]=useState('')
  const [horaire, setHoraire]=useState('')
  const [lieu, setLieu]=useState('')
  
  function handleSubmit(event){
    event.preventDefault()

  if(!FormCalendar.isEmpty){
    console.log(evenement)
    console.log(horaire)
    console.log(lieu)
  }
}
function  FormCalendar({ onSubmit }){
  return(
      <form onSubmit={event => handleSubmit(event)}>
          <h2>Nouvel Evénement :</h2>

          <label htmlFor="event">Evenement</label>
          <input type="text" placeholder='evenement'name='event' value={evenement} onChange={(event)=>setEvenement(event.target.value)} />

          <label htmlFor="event">Horaire</label>
          <input type="number" placeholder='horaire' name='horaire'value={horaire} onChange={(event)=>setHoraire(event.target.value)} />

          <label htmlFor="lieu">Lieu</label>
          <input type="text" placeholder='Lieu' name='lieu'value={lieu} onChange={(event)=>setLieu(event.target.value)} />

          <input type="submit"/>
      </form>
  )
}
  return (
    <>
    <FormCalendar onSubmit={handleSubmit}/>
    <article className='card1'>
      <Day jour={MONTH[9]} className="month"/>
      <section className='grid-7'>
        {DAY_LETTER.map((letter, index) => (
            <Day key={index} jour={letter} className="day-letter" />
          ))}
      </section>
      <section className="grid-7 days">
        {ROW}
      </section>
    </article>
    </>
  )
}


