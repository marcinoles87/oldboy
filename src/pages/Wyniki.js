import React from 'react'
import '../App.css'



function Wyniki() {

  const wyniki = [
    { 
      mecz : 'Cracovia - Grębałowianka  ' ,
      data : '8.04.2024   godz. 19:00'  ,
      wynik: '0:0' ,
      statystyki : 'strzelcy :    asysty : '
    } ,
    
    { 
      mecz : 'Grębałowianka - Dąbski' ,
      data : '15.04.2024   godz. 17:30'  ,
      wynik: '0:0' ,
      statystyki : 'strzelcy :    asysty : '
    } , 

    { 
      mecz : 'Borek - Grębałowianka ' ,
      data : '29.04.2024   godz. 21:00'  ,
      wynik: '0:0' ,
      statystyki : 'strzelcy :    asysty : '
    } , 

    { 
      mecz : 'Opatkowianka - Grębałowianka' ,
      data : '13.05.2024   godz. 18:00'  ,
      wynik: '0:0' ,
      statystyki : 'strzelcy :    asysty : '
    } , 

    { 
      mecz : 'Wieczysta - Grębałowianka' ,
      data : '20.05.2024   godz. 18:00'  ,
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
      data : '27.05.2024   godz. 17:30'  ,
      wynik: '0:0' ,
      statystyki : 'strzelcy :    asysty : '
    } , 

    { 
      mecz : 'Grębałowianka - Hutnik' ,
      data : '3.06.2024   godz. 17:30'  ,
      wynik: '0:0' ,
      statystyki : 'strzelcy :    asysty : '
    } , 

    { 
      mecz : 'Orzeł - Grębałowianka' ,
      data : '10.06.2024   godz. 18:30'  ,
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
            <p>{item.data}</p>
            <h3>{item.wynik}</h3>
            {/* <h4>{item.statystyki}</h4> */}
            </div>
        )
      })} 
        
      

    </div>
    
  )
}

export default Wyniki