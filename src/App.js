//import logo from './logo.svg';
// import birdLogo from './bird.svg';
import aImage from './A-Alphabet.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={aImage} className="App-logo" alt="logo" />
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
          Muhammad Awais Shafi
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Challenge
        </a>
      </header>
    </div>
  );
}

export default App;
