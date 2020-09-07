import React from 'react';
import './App.css';
import Navbar from "./components/navbar/Navbar";
import Main from "./pages/main/Main";
import Projects from "./pages/projects/Projects";

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="Main">
        <Main />
      </div>
      <div className="Project">
        <Projects />

      </div>
    </div>
  );
}

export default App;
