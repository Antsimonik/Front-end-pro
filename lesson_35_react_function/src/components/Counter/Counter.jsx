import React, { useState, Fragment, useEffect } from "react";
import "./style.scss";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const [adress, setAdress] = useState({
    country: `Ukraine`,
    city: `Kyiv`,
    zip: 99999,
  });

  const [x, setX] = useState(1);

  const decCounter = () => {
    setCounter((prevState) => prevState - 1);
  };

  const incrCounter = () => {
    setCounter((prevState) => prevState + 1);
  };

  useEffect(() => {
    console.log(`componentDidMount`);

    return () => {
      console.log(`Coounter will unmount`); // отловить удаление через 3 сек в app.js
    };
  });

  useEffect(() => {
    console.log(`in useEffect for counter`);
  }, [counter]);

  useEffect(() => {
    console.log(`in useEffect for x`);
  }, [x]);

  // setInterval(() => {
  //   setCounter((prevState) => prevState + 1);
  // }, 1000);

  // setTimeout(() => {
  //   setAdress((prevState) => ({ ...prevState, city: `Brest` }));
  // }, 1500);
  // setTimeout(() => {
  //   setAdress((prevState) => ({ ...prevState, zip: 1234556 }));
  // }, 1500);
  // setTimeout(() => {
  //   setAdress((prevState) => ({ ...prevState, number: 956 }));
  // }, 1500);

  return (
    <Fragment>
      <div className="counter">
        <button onClick={decCounter}>-</button>
        <span>{counter}</span>
        <button onClick={incrCounter}>+</button>
      </div>
      <hr></hr>
      <ul>
        {Object.keys(adress).map((key, index) => (
          <li key={index}>
            {key}: {adress[key]}
          </li>
        ))}
      </ul>
      <hr />
      <p>
        {x}{" "}
        <button onClick={() => setX((prevState) => prevState + 1)}>Next</button>
      </p>
    </Fragment>
  );
}
