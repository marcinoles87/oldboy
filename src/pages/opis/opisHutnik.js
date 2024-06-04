import React from 'react'

import img1 from './img/dabski1.jpg'
import img2 from './img/dabski1.jpg'
import img3 from './img/dabski1.jpg'

function opisWisla() {
  return (
    <div className='opis-container'>
      <div className='opis-header'>
        
        <h1>Grębałowianka - Hutnik</h1> 
        
       
      </div>

      <div className='opis-info'>
          <p>
         8 kolejka I liga oldboyów Kraków  <br></br>

Grębałowianka Kraków -Hutnik Kraków 0:4 (0:0) <br></br>

Skład Grębałowianki: Nowak - Korcala, Wierzbinski, Rutka, Dominik, Strojek G, Karaś, Oleś, Franaszek, Mucharski, Strojek R, Kawula, Zięba, Grzywa, Talaga, Sendor  <br></br>

Trener Bernard Łach <br></br>
Kapitan Piotr Kokosza <br></br>
Catering Marcin Stolarski 
                 Sebastian Towarek <br></br>

Pierwsza połowa meczu bardzo udana dla gospodarzy. Wynik 0:0 odzwierciedlał przebieg spotkania z bardzo silnym rywalem.. Mądra gra w obronie i możliwe kontrataki.Niestety 2 połowa to dominacja zespołu z Nowej Huty. Szybkie bramki ustawiły przebieg meczu. Gręba próbowała atakować przy niekorzystnym wyniku swoje sytuacje bramkowe mieli Strojek R, Mucharski, Korcala, Grzywa. Wynik nie uległ zmianie. 
Brawa dla całej drużyny za walkę i determinację do końca.
Za tydzień mecz u siebie z Orłem Piaski.<br></br>

Pozdrawiam Piotr Grzywa 😉👌⚽
         
          
          </p>

        <img src={img1} alt='gre-dab'></img>
        <img src={img2} alt='gre-dab'></img>
        <img src={img3} alt='gre-dab'></img>
        
       
      </div>
        
        </div>
  )
}

export default opisWisla