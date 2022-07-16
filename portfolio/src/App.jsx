import logo from "./logo.svg";
import "./App.css";
import Nav from "./Components/Nav.jsx";
import Home from "./Components/Home.jsx";
import Portfolio from "./Components/Portfolio";
import About from "./Components/About";

const App = () => {
    return (
        <div className="App">
           <Nav /> 
           <Home />
           <Portfolio />
           <About />
        </div>
    );
};

export default App;
