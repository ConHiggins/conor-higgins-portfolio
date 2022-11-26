import paletteGif from "../Assets/paletteGen.gif";
import waveDashGif from "../Assets/waveDash_gif_1.gif";
import calculatorPNG from "../Assets/calculator_1.gif";
import mountainsGif from "../Assets/mountains_1.gif";
import punkGif from "../Assets/punkAPI_1.gif";
import ticketGif from "../Assets/ticketSystem.gif";
import hangmanPNG from "../Assets/hangman.png";
import snapPNG from "../Assets/snap.png";

export const palette = {
    image: paletteGif,
    title: "Colour Palette Generator",
    tag: "Full stack React/Java/SQL app",
    link: "#",
    repo: "https://github.com/ConHiggins/PaletteGeneratorFrontend/",
    time: "Work in progress",
    desc: "Full stack application built using Spring and React. Generates a colour palette of varying sizes using RGB averaging functions to ensure cohesiveness amongst colour values. Makes use of RGB to HSL functions to allow for Hue/Saturation/Luminosity modals for palette editing and customization. Uses basic SQL database and Spring API for permanent saving and loading of palettes. Three-way conversion between RGB/Hex/HSL, Fibonacci-based palette generation using HSL colour wheel.",
};

export const waveDash = {
    image: waveDashGif,
    title: "waveDash",
    tag: "JavaScript game",
    link: "https://conhiggins.github.io/oxnaGame/",
    repo: "https://github.com/ConHiggins/oxnaGame/",
    time: "2 week",
    desc: "Frontend vanilla JS game built using DOM manipulation. Simple scoring system, Box collision, Acceleration and velocity based movement, Mobile/touchscreen functionality and responsive display across all devices, Dynamic day/night background built in SASS.",
};

export const calculator = {
    image: calculatorPNG,
    title: "Calculator",
    tag: "JavaScript web app",
    link: "https://conhiggins.github.io/oxnaCalculator/",
    repo: "https://github.com/ConHiggins/oxnaCalculator",
    time: "2 week",
    desc: "Frontend vanilla JS calculator app. Includes all basic arithmetic operators, intuitive and accessible UI/UX, responsive display across all devices, UI red colour mode/blue colour mode.",
};

export const mountains = {
    image: mountainsGif,
    title: "Mountains at Dusk",
    tag: "Three.js environment",
    link: "#",
    repo: "#",
    time: "2 week",
    desc: "3D environment built using Three.js library. Includes terrain mesh built using alpha noise map, skybox, various other meshes, lighting and shadow maps, and camera movement using sin and cos functions.",
};

/*export const punkAPI = {
    image: punkGif,
    title: "Brewdog Punk API",
    tag: "React API app",
    link: "https://conhiggins.github.io/oxnaPunkAPI",
    repo: "https://github.com/ConHiggins/oxnaPunkAPI",
    time: "1 week",
    desc: "Frontend React app utilising Brewdog's Punk API. Renders information about each beer in a unique UI, includes search / filtering functionality.",
};*/

export const ticketSystem = {
    image: ticketGif,
    title: "Basic Ticket System",
    tag: "Practice React app",
    link: "https://conhiggins.github.io/oxnaTicketSystem",
    repo: "https://github.com/ConHiggins/oxnaTicketSystem",
    time: "1 week",
    desc: "Simple practice react app. Includes search / filtering functionality, uses State to set tickets for each employee.",
};

export const hangman = {
    image: hangmanPNG,
    title: "Hangman Terminal Game",
    tag: "Java terminal app",
    link: "#",
    repo: "#",
    time: "1 week",
    desc: "Terminal-based hangman game built in Java. Uses OOP to select random word from list, takes and checks user input against the hidden word, returns visual feedback in the terminal for the next guess.",
};

export const snap = {
    image: snapPNG,
    title: "Snap Terminal Game",
    tag: "Java terminal app",
    link: "#",
    repo: "#",
    time: "1 week",
    desc: "Terminal-based multiplayer Snap Game built in Java. Uses OOP to create deck of cards, Shuffles and prompts players to select card from top of deck. Upon reaching the end of the deck, the cards will re-shuffle. Upon encountering two matching cards players will have a 3-second window to type 'snap' to win the game else a consolation message will be displayed and the central game loop continues.",
};

export const projects = [
    palette,
    waveDash,
    calculator,
    mountains,
    //punkAPI,
    ticketSystem,
    hangman,
    snap,
];
