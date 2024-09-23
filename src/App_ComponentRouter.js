
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/_templates/HomePage';
import AboutPage from './pages/_templates/AboutPage';
import ContactPage from './pages/_templates/ContactPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">


      <BrowserRouter>

        {/* This is our custom Navbar */}
        <Navbar />

        <Routes>
          < Route path='/' element={<HomePage />} />
          < Route path='/about' element={<AboutPage />} />
          < Route path='/contact' element={<ContactPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
