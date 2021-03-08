import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from "react-particles-js";
//Hier importiert man seine Komponenten
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";

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
            value: 30,
            density: {
              enable: true,
              value_area: 900
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
    </>
  );
}

export default App;
