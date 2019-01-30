import React, { Component } from 'react';
import './App.css';
import Dropdown from './components/Dropdown/Dropdown';

class App extends Component {
  state = {
    text: ["1. Make this dropdown a React component.", "2. Demo the component in Framer X.", "3. Don't use any libraries.", "4. Final Deliverable should be a Framer X file.", "Bonus: Add changable props in the Framer X interface."],
    placeholder: 'Create a React Component'
  }
  render() {
    let { text, placeholder } = this.state;
    return (
      <Dropdown placeholder={placeholder} text={text}/>
    );
  }
}

export default App;
