//useState is first hook we will use
import React, { useState } from "react";

export function CounterHook() {
  //our first Hook! useState => setState - 0 bc the counter will start with 0
  //setCounter will be the method to update the counter
  //useState starts w one parameter, it's 0 bc its how the counter will start
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <p>This is our first Hook</p>
      <p>You clicked the counter {counter} times.</p>
      <button onClick={() => setCounter(prevCounter => prevCounter +1)}> Click me!</button>
    </div>
  );
}


