import React from 'react';
import Logo from 'components/logo';
import 'sass/App.scss';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a  className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer" >
          <span>Learn React</span>
        </a>
      </header>
    </div>
  );
}

export default App;
