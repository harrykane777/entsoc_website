import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import NavBar from './components/NavBar';
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
