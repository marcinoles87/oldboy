import React from 'react'
import '../App.css'

import opisDabski from './opis/opisDabski'
import { Link } from 'react-router-dom'




function Wyniki() {

  

  const wyniki = [
    { 
      mecz : 'Cracovia - Grębałowianka  ' ,
      data : '8.04.2024   godz. 19:00'  ,
      wynik: '5:1' ,
      statystyki : 'strzelcy : Poplatek   ',
      opis : <Link to={'/opis/opisCra'}><p>Opis meczu</p></Link>
    } ,
    
    { 
      mecz : 'Grębałowianka - Dąbski' ,
      data : '15.04.2024   godz. 17:30'  ,
      wynik: '5:1' ,
      statystyki : 'strzelcy : Cecuga x 2 , Lampart , Franaszek , Strojek R.,    ' ,
      opis : <Link to={'/opis/opisDabski'}><p>Opis meczu</p></Link>
    } , 

    { 
      mecz : 'Borek - Grębałowianka ' ,
      data : '29.04.2024   godz. 21:00'  ,
      wynik: '1:0' ,
      statystyki : 'strzelcy :     '
    } , 


    { 
      mecz : 'Grębałowianka - Wisła' ,
      data : '29.04.2024   godz. 17:30'  ,
      wynik: '2:2' ,
      statystyki : 'strzelcy : Cecuga , Karaś.D  ' ,
      opis : <Link to={'/opis/opisWisla'}><p>Opis meczu</p></Link>
      
    } , 

   

    { 
      mecz : 'Opatkowianka - Grębałowianka' ,
      data : '13.05.2024   godz. 18:00'  ,
      wynik: '0:0' ,
      statystyki : 'strzelcy :   '
    } , 

    { 
      mecz : 'Wieczysta - Grębałowianka' ,
      data : '20.05.2024   godz. 18:00'  ,
      wynik: '0:0' ,
      statystyki : 'strzelcy :  '
    } , 

    { 
      mecz : 'Grębałowianka - Opatkowianka' ,
      wynik: '0:0' ,
      statystyki : 'strzelcy :'
    } , 

    { 
      mecz : 'Grębałowianka - Garbarnia' ,
      data : '27.05.2024   godz. 17:30'  ,
      wynik: '0:0' ,
      statystyki : 'strzelcy :   '
    } , 

    { 
      mecz : 'Grębałowianka - Hutnik' ,
      data : '3.06.2024   godz. 17:30'  ,
      wynik: '0:0' ,
      statystyki : 'strzelcy :  ',
      
    } , 

    { 
      mecz : 'Orzeł - Grębałowianka' ,
      data : '10.06.2024   godz. 18:30'  ,
      wynik: '0:0' ,
      statystyki : 'strzelcy :    '
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
            <h5>{item.statystyki}</h5>
            {item.opis}
            </div>
        )
      })} 
        
      

    </div>
    
  )
}

export default Wyniki