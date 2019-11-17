import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Jacob", age: 40 },
      { name: "Peter", age: 30 }
    ],
    personsSwitcher: false
  };

  switchNameHandler = () => {
    this.setState({
      personsSwitcher: !this.state.personsSwitcher
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointers"
    };

    return (
      <div className="App">
        <h1>React app test!</h1>
        <button style={style} onClick={this.switchNameHandler}>
          PRESS
        </button>
        {this.state.personsSwitcher ? (
          <div>
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[0].age}
              click={this.switchNameHandler}
            />
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click={this.switchNameHandler}
              children="test"
            />
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}
              click={this.switchNameHandler}
            >
              Whoa
            </Person>
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
