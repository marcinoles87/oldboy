
import './App.css';
import Header from './components/Header';
import Main from './components/Main'
import Footer from './components/Footer';
import Navabar from './components/Navabar';

import Historia from './pages/Historia'

import { Route, Router, Routes , Link } from 'react-router-dom';


function App() {
  return (


    <div className="app-container">

      <Routes>
        <Route path='*' element={
          <>
            <Header></Header>
            <Navabar></Navabar>
            <Main></Main>
            <Footer></Footer>
          </>
        }>

        </Route>

        <Route path='/historia' element={<Historia></Historia>}></Route>
        <Route path='/kadra' element={<Historia></Historia>}></Route>
        <Route path='/Wyniki' element={<Historia></Historia>}></Route>
        <Route path='/Kontakt' element={<Historia></Historia>}></Route>
      </Routes>
      
      
      
      
    </div>
  );
}

export default App;
