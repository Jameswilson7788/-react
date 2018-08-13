import React, { Component } from 'react';
import Cart from './components/Cart/Cart'

class App extends Component {
  render() {
    return (
      <div>
        <Cart cart={ [1,2,3,4] }/>
      </div>
    );
  }
}

export default App;
