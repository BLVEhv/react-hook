import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState } from 'react';
const App = () => {

  let [name, setName] = useState('BLUE');
  let [nameAddress, setNameAddress] = useState('');
  let [todos, setTodos] = useState([
    { id: '1', title: "Doing homework" },
    { id: '2', title: "Working" },
    { id: '3', title: "Playing game" }
  ]);

  const handleClickMe = (event) => {
    let todo = { id: '', title: nameAddress };
    setTodos([...todos, todo]);
    setNameAddress('');
  };

  const handeOnChange = (event) => {
    setNameAddress(event.target.value);
  };
  return (
    <div className="App">
      <Nav />
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Hello world from {name}
        </h1>
        <div>
          <input type={'text'} value={nameAddress} onChange={(event) => handeOnChange(event)}></input>
        </div>
        <div>
          <button type='button' onClick={(event) => handleClickMe(event)}>Click me</button>
        </div>

        <div>
          {todos.map(todo => {
            return (
              /* A list item. */
              <li key={todo.id} > {todo.title}</li>
            );
          })}
        </div>

      </header >
    </div >
  );
};

export default App;
