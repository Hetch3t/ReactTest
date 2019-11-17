import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Jacob", age: 40 },
      { id: 2, name: "Max", age: 28 },
      { id: 3, name: "Peter", age: 30 }
    ],
    personsSwitcher: false
  };

  personsSwitcherHandler = () => {
    this.setState({ personsSwitcher: !this.state.personsSwitcher });
  };

  deletePersonHandler = index => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  };

  nameChangedHandler = (event, index) => {
    const person = { ...this.state.persons[index] };
    const persons = [...this.state.persons];

    person.name = event.target.value;
    persons[index] = person;
    this.setState({ persons: persons });
  };

  render = () => {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointers",
      borderRadius: "4px"
    };

    let persons = null;

    if (this.state.personsSwitcher) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => (
            <Person
              name={person.name}
              age={person.age}
              click={() => this.deletePersonHandler(index)}
              change={event => this.nameChangedHandler(event, index)}
              key={person.id}
            />
          ))}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>React app test!</h1>
        <button style={style} onClick={this.personsSwitcherHandler}>
          PRESS
        </button>
        {persons}
      </div>
    );
  };
}

export default App;
