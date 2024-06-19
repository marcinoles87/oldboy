import React from 'react'
import '../App.css'

import opisDabski from './opis/opisDabski'
import { Link } from 'react-router-dom'

import greLogo from '../img/logo.png'
import hutLogo from '../img/hutnikLogo2.png'
import craLogo from '../img/craLogo.png'
import dabLogo from '../img/dabLogo.png'
import borLogo from '../img/borekLogo.png'
import wisLogo from '../img/wislaLogo.png'
import wieLogo from '../img/wieczLogo.png'
import garLogo from '../img/garbLogo.png'
import orzelLogo from '../img/orzelLogo.png'
import opatLogo from '../img/opatkowiankaLogo.png'




function Wyniki() {

  

  const wyniki = [
    { 
      mecz : <img src={craLogo} alt='gre' className='herb'></img>  ,
      mecz2 : <img src={greLogo} alt='hut' className='herb'></img> ,
      data : '8.04.2024   godz. 19:00'  ,
      wynik: '5:1' ,
      statystyki : 'strzelcy : Poplatek   ',
      opis : <Link to={'/opis/opisCra'}><p>Opis meczu</p></Link>
    } ,
    
    { 
      mecz : <img src={greLogo} alt='gre' className='herb'></img>  ,
      mecz2 : <img src={dabLogo} alt='hut' className='herb'></img> ,
      data : '15.04.2024   godz. 17:30'  ,
      wynik: '5:1' ,
      statystyki : 'strzelcy : Cecuga x 2 , Lampart , Franaszek , Strojek R.,    ' ,
      opis : <Link to={'/opis/opisDabski'}><p>Opis meczu</p></Link>
    } , 

    { 
      mecz : <img src={borLogo} alt='gre' className='herb'></img>  ,
      mecz2 : <img src={greLogo} alt='hut' className='herb'></img> ,
      data : '29.04.2024   godz. 21:00'  ,
      wynik: '1:0' ,
      statystyki : 'strzelcy :     ' ,
      opis : <Link to={'/opis/opisBorek'}><p>Opis meczu</p></Link>
    } , 


    { 
      mecz : <img src={greLogo} alt='gre' className='herb'></img>  ,
      mecz2 : <img src={wisLogo} alt='hut' className='herb'></img> ,
      data : '29.04.2024   godz. 17:30'  ,
      wynik: '2:2' ,
      statystyki : 'strzelcy : Cecuga , Karaś.D  ' ,
      opis : <Link to={'/opis/opisWisla'}><p>Opis meczu</p></Link>
      
    } , 

   

    { 
      mecz : <img src={wieLogo} alt='gre' className='herb'></img>  ,
      mecz2 : <img src={greLogo} alt='hut' className='herb'></img> ,
      data : '20.05.2024   godz. 19:30'  ,
      wynik: '2:2' ,
      statystyki : 'strzelcy : Cecuga , Strojek R.  ' ,
      opis : <Link to={'/opis/opisGarbarnia'}><p>Opis meczu</p></Link>
    } , 

    { 
      mecz : <img src={greLogo} alt='gre' className='herb'></img>  ,
      mecz2 : <img src={garLogo} alt='hut' className='herb'></img> ,
      data : '20.05.2024   godz. 18:00'  ,
      wynik: '0:5' ,
      statystyki : 'strzelcy :  ' ,
      opis : <Link to={'/opis/opisWieczysta'}><p>Opis meczu</p></Link>
    } , 

    { 
      mecz : <img src={greLogo} alt='gre' className='herb'></img>  ,
      mecz2 : <img src={hutLogo} alt='hut' className='herb'></img> ,
      data : '03.06.2024   godz. 17:30'  ,
      wynik: '0:4' ,
      statystyki : 'strzelcy :  ' ,
      opis : <Link to={'/opis/opisHutnik'}><p>Opis meczu</p></Link>
    } , 

    { 
      mecz : <img src={greLogo} alt='gre' className='herb'></img>  ,
      mecz2 : <img src={orzelLogo} alt='hut' className='herb'></img> ,
      data : '11.06.2024   godz. 17:30'  ,
      wynik: '1:0' ,
      statystyki : 'strzelcy : Lampart ' ,
      opis : <Link to={'/opis/opisOrzel'}><p>Opis meczu</p></Link>
    } , 

    { 
      mecz : <img src={greLogo} alt='gre' className='herb'></img>  ,
      mecz2 : <img src={opatLogo} alt='hut' className='herb'></img> ,
      data : '11.06.2024   godz. 17:30'  ,
      wynik: '2:2' ,
      statystyki : 'strzelcy : Strojek R. , Oleś  ' ,
      opis : <Link to={'/opis/opisOpat'}><p>Opis meczu</p></Link>
    } , 

  

   
]

  return (
    <div className='wyniki-container'>
     

      {/* <h2>Aktualna <a href='https://futmal.pl/league/i-liga-oldbojow-krakow'>tabela</a> </h2> */}
        
         {wyniki.map( (item , index) => {
        return(
          <div className='wynik' key={index}>
            
            <div className='herbs'>
              {item.mecz} vs {item.mecz2}
              </div>
            
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