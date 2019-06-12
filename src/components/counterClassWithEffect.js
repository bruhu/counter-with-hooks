//import React and two hooks - useState and useEffect
import React, { useState, useEffect } from "react";

export default function CounterClassWithEffect() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${counter} times`;
  });

  return (
    <React.Fragment>
      <p>You clicked {counter}</p>
      <button
        onClick={() =>
          setCounter(prevCounter => prevCounter +1)
        }
      >
        {" "}
        Cataclick{" "}
      </button>
    </React.Fragment>
  );
}
