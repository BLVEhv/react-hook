import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';

const App = () => {

  const handleClickMe = () => {
    alert('click me');
  };
  return (
    <div className="App">
      <Nav />
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world from BLUE
        </p>
        <div>
          <button type='button' onClick={() => handleClickMe()}>Click me</button>
        </div>

      </header>
    </div>
  );
};

export default App;
