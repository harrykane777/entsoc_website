import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import EventsPage from './components/EventsPage';
import AboutPage from './components/AboutPage';
import JoinPage from './components/JoinPage';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <div className="content">
        <Routes>
          <Route path="/" element={<LandingPage />}/>
          <Route path="/events" element={<EventsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/join" element={<JoinPage />} />
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
