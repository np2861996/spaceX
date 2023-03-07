
import './App.css';
import Home from './components/Home';
import { Routes ,Route, Navigate  } from 'react-router-dom';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Header from "./components/Header";
import Footer from './components/Footer';

function App() {
  return (
   <>
    <Header />
    <Routes >
      <Route exect  path='/' element={<Home/>} />
      <Route exect path='/about' element={<About />} />
      <Route exect path='/services' element={<Services/>} />
      <Route exect path='/contact' element={<Contact/>} />
      <Route path="/" element={<Navigate replace to="/" />} />
   </Routes>
   <Footer />
   </>
  );
}

export default App;
