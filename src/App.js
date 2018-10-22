import React, { Component } from 'react';

import CardList from './Components/CardList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Ryan's Card List </h1>
        <CardList/>
      </div>
    );
  }
}

export default App;
