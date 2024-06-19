
import './App.css';
import Header from './components/Header';
import Main from './components/Main'
import Footer from './components/Footer';
import Navabar from './components/Navabar';

import Historia from './pages/Historia'
import Kadra from './pages/Kadra'
import Wyniki from './pages/Wyniki'
import Wydarzenia from './pages/Wydarzenia';
import Kontakt from './pages/Kontakt'
// import opisDabski from './pages/opis/opisDabski';
import Opis from './pages/opis/opisDabski'
import OpisCra from './pages/opis/opisCra'
import OpisWisla from './pages/opis/opisWisla'
import OpisGarbarnia from './pages/opis/opisGarbarnia'
import OpisWieczysta from './pages/opis/opisWieczysta'
import OpisHutnik from './pages/opis/opisHutnik'
import OpisOrzel from './pages/opis/opisOrzel'
import OpisBorek from './pages/opis/opisBorek'
import OpisOpatkowianka from './pages/opis/opisOpat'
import OpisCharytatywny from './pages/opis/opisCharytatywny'

import { Route, Router, Routes , Link } from 'react-router-dom';


function App() {
  return (


    <div className="app-container">

      <Routes>
        <Route path='*' exact element={
          <>
            <Header></Header>
            <Navabar></Navabar>
            <Main></Main>
            <Footer></Footer>
          </>
        }>

        </Route>

        <Route path='/historia' element={<Historia></Historia>}></Route>
        <Route path='/kadra' element={<Kadra></Kadra>}></Route>
        <Route path='/Wyniki' element={<Wyniki></Wyniki>}></Route>
        <Route path='/Wydarzenia' element={<Wydarzenia></Wydarzenia>}></Route>
        <Route path='/Kontakt' element={<Kontakt></Kontakt>}></Route>
        
        <Route path='/opis/opisDabski' element={<Opis></Opis>}> </Route>
        <Route path='/opis/opisCra' element={<OpisCra></OpisCra>}> </Route>
        <Route path='/opis/opisWisla' element={<OpisWisla></OpisWisla>}> </Route>
        <Route path='/opis/opisGarbarnia' element={<OpisGarbarnia></OpisGarbarnia>}> </Route>
        <Route path='/opis/opisWieczysta' element={<OpisWieczysta></OpisWieczysta>}></Route>
        <Route path='/opis/opisHutnik' element={<OpisHutnik></OpisHutnik>}></Route>
        <Route path='/opis/opisOrzel' element={<OpisOrzel></OpisOrzel>}></Route> 
        <Route path='/opis/opisBorek' element={<OpisBorek></OpisBorek>}></Route> 
        <Route path='/opis/opisOpat' element={<OpisOpatkowianka></OpisOpatkowianka>}></Route>
        <Route path='/opis/opisCharytatywny' element={<OpisCharytatywny></OpisCharytatywny>}></Route>

      </Routes>
      
      
      
      
    </div>
  );
}

export default App;
