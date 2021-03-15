import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//Partikeln importieren

import Particles from 'react-particles-js';
//Hier importiert man seine Komponenten
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Experiences from "./components/Experiences";
import Skills from './components/Abilities';
import Blog from './components/Blog';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

//Ist die Main Methode
function App() {
  return (
    <>
      {/*Parrticles bzw. die Umgebung wird aufgerufen. Man kann hier gewisse einstellungen vornehmen. Siehe Internet*/}
      <Particles 
      className="particles-canvas"
      params={{
        particles: {
          number: {
            value: 35,
            density: {
              enable: true,
              value_area: 800
            }
          },
          shape: {
            type: "circle",
            stroke: {
              width: 6,
              color: "#f9ab00"
            }
          }
        }
      }}
      />
      {/*Navbar wird aufgerufen*/}
      <Navbar />
      <Header />
      <AboutMe />
      <Services />
      <Experiences />
      <Skills />
      <Blog />
      <Testimonials />
      <Contact />
    </>
  );
}

export default App;
