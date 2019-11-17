import React from "react";
import "./Person.css";

const Person = props => {
  return (
    <div className="person">
      <p>
        I'm a person. My name is {props.name} and my age is {props.age}
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.change} value={props.name}></input>
      <button onClick={props.click}>-</button>
    </div>
  );
};

export default Person;
