import React from 'react'
import '../App.css'



function Wyniki() {

  const wyniki = [
    { mecz : 'Grębałowianka - Cracovia  wynik :'} , 
    { mecz : 'Grębałowianka - Cracovia  wynik :'} , 
    { mecz : 'Grębałowianka - Cracovia  wynik :'} , 
    { mecz : 'Grębałowianka - Cracovia  wynik :'} , 
    { mecz : 'Grębałowianka - Cracovia  wynik :'} , 
    { mecz : 'Grębałowianka - Cracovia  wynik :'} , 
    { mecz : 'Grębałowianka - Cracovia  wynik :'} , 
    { mecz : 'Grębałowianka - Cracovia  wynik :'} , 
    { mecz : 'Grębałowianka - Cracovia  wynik :'} , 
    { mecz : 'Grębałowianka - Cracovia  wynik :'} , 
    { mecz : 'Grębałowianka - Cracovia  wynik :'} , 
  ]
  return (
    <div>
      <h1>Wyniki</h1>
        <ul>
         {wyniki.map( (item) => {
        return(
          <li className='wynik'>{item.wynik}</li>
        )
      })} 
        </ul>
      

    </div>
    
  )
}

export default Wyniki