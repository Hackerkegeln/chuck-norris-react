import React from 'react';
import logo from './logo.jpg';
import {Result} from './Result';

const App: React.FC = () => {
  const refreshJoke = () => {
    alert('Works!');
  };

  return (
    <div className="App, container-fluid">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
      </header>
      <main>
        <Result jokeText={"Hello, World!"}/>
      </main>
      <footer>
        <button className="btn btn-primary" onClick={refreshJoke}>Refresh</button>
      </footer>
    </div>
  );
};

export default App;
