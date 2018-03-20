import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      breeds: [
        "Australian Shepherd",
        "Border Collie",
        "Coolie",
        "English Shepherd"
      ]
    }
  }
  
  render() {
    let breedsToDisplay = this.state.breeds.map( (element, index) => {
      return (
        <h2 key={ index }>{ element }</h2>
      )
    })
    return (
      <div className="App">
        {breedsToDisplay}
      </div>
    );
  }
}

export default App;
