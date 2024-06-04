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
      mecz : 'Garbarnia - Grębałowianka' ,
      data : '20.05.2024   godz. 19:30'  ,
      wynik: '2:2' ,
      statystyki : 'strzelcy : Cecuga , Strojek R.  ' ,
      opis : <Link to={'/opis/opisGarbarnia'}><p>Opis meczu</p></Link>
    } , 

    { 
      mecz : 'Grębałowianka- Wieczysta ' ,
      data : '20.05.2024   godz. 18:00'  ,
      wynik: '0:5' ,
      statystyki : 'strzelcy :  ' ,
      opis : <Link to={'/opis/opisWieczysta'}><p>Opis meczu</p></Link>
    } , 

    { 
      mecz : 'Grębałowianka- Hutnik ' ,
      data : '03.06.2024   godz. 17:30'  ,
      wynik: '0:4' ,
      statystyki : 'strzelcy :  ' ,
      opis : <Link to={'/opis/opisHutnik'}><p>Opis meczu</p></Link>
    } , 

  

   
]

  return (
    <div className='wyniki-container'>
      <h1>Wyniki</h1>

      <h2>Aktualna <a href='https://futmal.pl/league/i-liga-oldbojow-krakow'>tabela</a> </h2>
        
         {wyniki.map( (item , index) => {
        return(
          <div className='wynik' key={index}>
            
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