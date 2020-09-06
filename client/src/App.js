import React from 'react';
import './App.css';
import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <Main />
      </div>
    </div>
  );
}

export default App;
