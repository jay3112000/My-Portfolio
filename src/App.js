import './App.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

import About from './components/About';
import Services from './components/Services';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contacts from './components/Contacts';
import Footer from './components/Footer';



function App() {
  return (
    <>
    <Navbar/>
     <About/>
     <Services/>
     <Experience/>
     <Portfolio/>
     <Testimonials/>
     <Contacts/>
     <Footer/>
    </>
  );
}

export default App;
