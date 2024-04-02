import React from 'react'
import '../App.css'



function Wyniki() {

  const wyniki = [
    { 
      mecz : 'Grębałowianka - Cracovia  ' ,
      wynik: '0:0' ,
      statystyki : 'strzelcy :    asysty : '
    } ,
    
    { 
      mecz : 'Grębałowianka - Hutnik' ,
      wynik: '0:0' ,
      statystyki : 'strzelcy :    asysty : '
    } , 

    { 
      mecz : 'Grębałowianka - Wisła' ,
      wynik: '0:0' ,
      statystyki : 'strzelcy :    asysty : '
    } , 

    { 
      mecz : 'Grębałowianka - Borek' ,
      wynik: '0:0' ,
      statystyki : 'strzelcy :    asysty : '
    } , 

    { 
      mecz : 'Grębałowianka - Dąbski' ,
      wynik: '0:0' ,
      statystyki : 'strzelcy :    asysty : '
    } , 

    { 
      mecz : 'Grębałowianka - Opatkowianka' ,
      wynik: '0:0' ,
      statystyki : 'strzelcy :    asysty : '
    } , 

    { 
      mecz : 'Grębałowianka - Garbarnia' ,
      wynik: '0:0' ,
      statystyki : 'strzelcy :    asysty : '
    } , 

    { 
      mecz : 'Grębałowianka - Cracovia' ,
      wynik: '0:0' ,
      statystyki : 'strzelcy :    asysty : '
    } , 

    { 
      mecz : 'Grębałowianka - Cracovia' ,
      wynik: '0:0' ,
      statystyki : 'strzelcy :    asysty : '
    } , 


    { 
      mecz : 'Grębałowianka - Cracovia' ,
      wynik: '0:0' ,
      statystyki : 'strzelcy :    asysty : '
    } , 

]

  return (
    <div className='wyniki-container'>
      <h1>Wyniki</h1>
        
         {wyniki.map( (item) => {
        return(
          <div className='wynik'>
            <h2>{item.mecz}</h2>
            <h3>{item.wynik}</h3>
            <h4>{item.statystyki}</h4>
            </div>
        )
      })} 
        
      

    </div>
    
  )
}

export default Wyniki