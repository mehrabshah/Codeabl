import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Aboutus from './components/Aboutus';
import Steps from './components/Steps';
import Services from './components/Services';
import Technology from './components/Technology';
import Contact from './components/Contact';
import Porfolio from './components/Porfolio';
import Footer from './components/Footer';

function App() {
  return (
    <div className="/ overflow-x-hidden m-0 p-0 box-border">
           <Navbar/>
           <Hero/>
           <Aboutus/>
          <Services/>
          <Steps/>
          <Porfolio/> 
          <Contact/>
          <Footer/>
          

    </div>
  );
}

export default App;
