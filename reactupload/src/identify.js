import React, { useEffect, useState, useRef } from "react";

export default function Identify() {
  const [counter, setCounter] = useState(0);
  const buttonEl = useRef(null);
  useEffect(() => {
    console.log(counter);
  }, [counter]);

  useEffect(() => {
    const alertFunc = function () {
      alert("-----");
    }
    const buttonRef = buttonEl.current;
    buttonRef.addEventListener(
      "click",
      alertFunc,
      false
    ); 
    // Specify how to clean up after this effect:
    return function cleanup() {
      buttonRef.removeEventListener("click", alertFunc, false)
    };
  })
  return (
    <div className="Identify">
      <button className="btn" ref={buttonEl}>Identify</button>
    </div>
  );
}