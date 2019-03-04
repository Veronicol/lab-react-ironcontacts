import React, { Component } from 'react';
import './App.css';
import NavBar from './components/misc/NavBar';
import ContactList from './components/ContactList';

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar />
      <div className="container">
        <div className="section">
          <ContactList />
        </div>
      </div>
      </div>
    );
  }
}

export default App;
