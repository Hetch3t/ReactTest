import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Jacob', age: 40 },
      { name: 'Peter', age: 30 }
    ]
  }

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: 'Test1', age: 28 },
        { name: 'Denees', age: 40 },
        { name: 'Vasua', age: 30 }
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>
          React app test!
        </h1>
        <button onClick={this.switchNameHandler}>PRESS</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} children='test' />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}> Whoa </Person>
      </div>
    );
  }
}

export default App;
