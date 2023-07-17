import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'; 
import Contact from './pages/Contact';
import Information from './pages/Information';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (<>
    <Routes>
      <Route index element={<Home />} /> path="/" はindexでも可 
      <Route path="/information" element={<Information />} /> 
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </> );
}

export default App;
