import Navbar from "./components/navbar/Navbar";
// import "./App.css";
import "./App.css";
import Intro from "./components/intro/Intro";
import Services from "./components/Services/Services";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import Teastimonial from "./components/Testimonials/Teastimonial";
import Contacts from "./components/Contact/Contacts";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { themeContext } from "./Context";
import { useContext } from "react";
import About from "./components/About/About"
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "white",
        color: darkMode ? "white" : "black",
      }}
    >
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Works />
      <Portfolio />
      {/* <About/> */}
      <Teastimonial />
      <Contact />
      {/* <Contacts/> */}
      <Footer />
    </div>
  );
}

export default App;
