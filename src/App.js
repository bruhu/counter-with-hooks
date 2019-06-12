import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CounterClass from "./components/CounterClass";
import { CounterHook } from "./components/CounterHook";
import CounterClassWithEffect from "./components/counterClassWithEffect";
import ReducerCounter from "./components/ReducerCounter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <CounterClass /> */}
        {/* <CounterHook /> */}
        {/* <CounterClassWithEffect /> */}
        <ReducerCounter></ReducerCounter>
      </header>
    </div>
  );
}

export default App;
