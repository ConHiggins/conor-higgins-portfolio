import logo from "./logo.svg";
import "./App.css";
import Nav from "./Components/Nav.jsx";
import Home from "./Components/Home/Home";
import Portfolio from "./Components/Portfolio/Portfolio";
import About from "./Components/About/About";
import { useEffect, useState } from "react";

const App = () => {
    const components = [<Home id="home" />, <Portfolio />, <About />];
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeComponent, setActiveComponent] = useState(
        components[activeIndex]
    );

    const handleChangeComponent = (i) => {
        setActiveIndex(i);
    };

    useEffect(() => {
        setActiveComponent(components[activeIndex]);
    }, [activeIndex]);

    return (
        <div className="App">
            <Nav handleChangeComponent={handleChangeComponent} />
            {activeComponent}
        </div>
    );
};

export default App;
