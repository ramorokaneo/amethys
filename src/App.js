import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
        <button>save</button>
        <label>Amethyst</label>
        <form>
          <label>Onyx</label>
          <input type='text' />
          <button>Edit</button>
        </form>
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
