import logo from './logo.svg';
import './App.css';
import ButtonAppBar from './ButtonAppBar';

function App() {
  return (
    <div className="App">
      <header >
        <ButtonAppBar />
      </header>
      <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Event management app
        </a>
      </div>
    </div>
  );
}

export default App;
