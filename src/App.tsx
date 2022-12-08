import React from 'react';
import {Navbar} from './components/Nav'
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Home } from './pages/Home';
import { Admin } from './pages/Admin';
import { BloodBank } from './pages/BloodBank';

function App() {
  return (
<>
  <Navbar/>
  <Container className='mb-4'>
    <Routes>
    <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Admin />}/>
      <Route path="/bloodbank" element={<BloodBank />}/>
    </Routes>
  </Container>
</>
  )
}

export default App;
