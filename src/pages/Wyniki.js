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
import tabela from '../img/tabela.png'
import krakusLogo from '../img/krakusLogo.png'




function Wyniki() {

  

  const wyniki = [
    { 
      mecz : <img src={greLogo} alt='gre' className='herb'></img>  ,
      mecz2 : <img src={craLogo} alt='hut' className='herb'></img> ,
      data : '14.04.2025   godz. 18:00'  ,
      wynik: '5:4' ,
      statystyki : 'strzelcy :    ',
      opis : <Link to={'/opis/opisCra'}><p>Opis meczu</p></Link>
    } ,
    
    { 
      mecz : <img src={greLogo} alt='gre' className='herb'></img>  ,
      mecz2 : <img src={dabLogo} alt='hut' className='herb'></img> ,
      data : '' ,
      wynik: '3:0 walkower' ,
      statystyki : '   ' ,
      opis : <Link to={'/opis/opisDabski'}><p>Opis meczu</p></Link>
    } , 

    { 
      mecz : <img src={borLogo} alt='gre' className='herb'></img>  ,
      mecz2 : <img src={greLogo} alt='hut' className='herb'></img> ,
      data : ''  ,
      wynik: '2:1' ,
      statystyki : 'strzelcy :     ' ,
      opis : <Link to={'/opis/opisBorek'}><p>Opis meczu</p></Link>
    } , 


    { 
      mecz : <img src={greLogo} alt='gre' className='herb'></img>  ,
      mecz2 : <img src={wisLogo} alt='hut' className='herb'></img> ,
      data : ''  ,
      wynik: '2:1' ,
      statystyki : '  ' ,
      opis : <Link to={'/opis/opisWisla'}><p>Opis meczu</p></Link>
      
    } , 

     { 
      mecz : <img src={opatLogo} alt='gre' className='herb'></img>  ,
      mecz2 : <img src={greLogo} alt='hut' className='herb'></img> ,
      data : ''  ,
      wynik: '0:0' ,
      statystyki : '  ' ,
      opis : <Link to={'/opis/opisOpat'}><p>Opis meczu</p></Link>
    } , 

   

    { 
      mecz : <img src={greLogo} alt='gre' className='herb'></img>  ,
      mecz2 : <img src={krakusLogo} alt='hut' className='herb'></img> ,
      data : ''  ,
      wynik: '' ,
      statystyki : '  ' ,
      opis : <Link to={'/opis/opisKrakus'}><p>Opis meczu</p></Link>
    } , 

    { 
      mecz : <img src={greLogo} alt='gre' className='herb'></img>  ,
      mecz2 : <img src={garLogo} alt='hut' className='herb'></img> ,
      data : ''  ,
      wynik: '2:1' ,
      statystyki : 'strzelcy : Cecuga , Strojek  ' ,
      opis : <Link to={'/opis/opisWieczysta'}><p>Opis meczu</p></Link>
    } , 

    { 
      mecz : <img src={greLogo} alt='gre' className='herb'></img>  ,
      mecz2 : <img src={hutLogo} alt='hut' className='herb'></img> ,
      data : ''  ,
      wynik: '' ,
      statystyki : 'strzelcy :  ' ,
      opis : <Link to={'/opis/opisHutnik'}><p>Opis meczu</p></Link>
    } , 

    { 
      mecz : <img src={greLogo} alt='gre' className='herb'></img>  ,
      mecz2 : 'Victoria Kraków',
      data : ''  ,
      wynik: '' ,
      statystyki : ' ' ,
      opis : <Link to={'/opis/opisVictoria'}><p>Opis meczu</p></Link>
    } , 

   

  

   
]

  return (
    <div className='mecze-container'>

            <h2>AKTUALNA  <a href='https://futmal.pl/league/i-liga-oldbojow-krakow'> TABELA</a> </h2>
            <img src={tabela} alt='tabela'></img>

            <h2>WYNIKI :</h2>
      <div className='wyniki-container'>
         {wyniki.map( (item , index) => {
        return(
          <div className='wynik' key={index}>
            
            <div className='herbs'>
              {item.mecz} vs {item.mecz2}
              </div>
            
            {/* <p>{item.data}</p> */}
            <h3>{item.wynik}</h3>
            {/* <h5>{item.statystyki}</h5> */}
            {/* {item.opis} */}
            </div>
        )
      })} 

      </div>


        
      

    </div>
    
  )
}

export default Wyniki