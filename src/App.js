import React from "react";
import logo from "./logo.svg";
import "./App.css";

//components
import Greet from "./components/FunctionGreet";
import ClassGreet from "./components/ClassGreet";
import PrintPost from "./components/Post";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Greet firstName="Ricardo" lastName="Picazo" />
        <ClassGreet lastName="Picazo" />
      </header>
      <div class="container p-4 ">
        <PrintPost
          tittle="TEAM RENAULT"
          subtittle="Daniel Ricciardo"
          content="Daniel Joseph Ricciardo es un piloto australiano de ascendencia italiana de automovilismo de velocidad. Ganó la Fórmula 3 Británica en el año 2009 y desde 2011 es piloto de Fórmula 1. Entre 2014 y 2018 compitió en Red Bull, desde la temporada 2019 es titular en el equipo Renault"
        />
      </div>
    </div>
  );
}

export default App;
