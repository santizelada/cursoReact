import React from 'react';
import Navbar from './Components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Catalogo from './Components/Catalogo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Catalogo categoryId="all" />} />
          <Route path="/category/:categoryId" element={<Catalogo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;





