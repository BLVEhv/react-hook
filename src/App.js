import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';

const App = () => {
  return (
    <div className="App">
      <Nav />
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world from BLUE
        </p>

      </header>
    </div>
  );
};

export default App;
