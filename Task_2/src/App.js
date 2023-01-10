import "./styles/main.css";


import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Skills from "./pages/Skills";

function App() {
  return (
    <div className="App">
        <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
          <Route path="/skills" element={<Skills/>}/>
        </Routes>
        <Footer/>
        </Router>
        
    </div>
  );
}

export default App;
