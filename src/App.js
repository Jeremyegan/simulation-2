import React, { Component } from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom';
import routes from './routes';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <HashRouter>
      <div className="App">
        <Header />
          { routes }
      </div>
      </HashRouter>
    );
  }
}

export default App;
