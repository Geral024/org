import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src="/img/header.png" alt='Org'/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola mundo con React
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprendo React
        </a>
      </header>
    </div>
  );
}

export default App;
