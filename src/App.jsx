import logo from "./logo.svg";
import "./App.css";
import Nav from "./Components/Nav.jsx";
import Home from "./Components/Home.jsx";
import Portfolio from "./Components/Portfolio";
import About from "./Components/About";
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
        console.log("here");
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
