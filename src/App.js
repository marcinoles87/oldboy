
import './App.css';
import Header from './components/Header';
import Main from './components/Main'
import Footer from './components/Footer';
import Navabar from './components/Navabar';

import Historia from './pages/Historia'
import Kadra from './pages/Kadra'
import Wyniki from './pages/Wyniki'
import Kontakt from './pages/Kontakt'

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
        <Route path='/Kontakt' element={<Kontakt></Kontakt>}></Route>
      </Routes>
      
      
      
      
    </div>
  );
}

export default App;
