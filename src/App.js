import React, { Component } from 'react';
import Textarea from './components/TextArea/Textarea';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Textarea max-rows={5}></Textarea>
      </div>
    );
  }
}

export default App;
