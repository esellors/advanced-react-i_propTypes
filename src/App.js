import React from "react";
import "./styles.css";
import InputOutput from './InputOutput';

export default function App() {
  return (
    <div className="App">
      <h1>About Me:</h1>
      <InputOutput 
        name='Ted'
        favNum={4} 
        bool={true}
      />
    </div>
  );
}
