import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState, useEffect } from 'react';
import Todo from './views/Todo';
import Covid from './views/Covid';
import Countdown from './views/Countdown';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
const App = () => {

  let [name, setName] = useState('BLUE');
  let [nameAddress, setNameAddress] = useState('');
  let [todos, setTodos] = useState([
    { id: '1', title: "Doing homework", author: 'Hieu' },
    { id: '2', title: "Working", author: 'Hieu' },
    { id: '3', title: "Playing game", author: 'BLUE' },
    { id: '4', title: "Coding", author: 'BLUE' }
  ]);

  useEffect(() => {
    console.log('run use effect');
  }, [nameAddress]);

  useEffect(() => {
    console.log('run use effect todos');
  }, [todos]);



  const handleClickMe = (event) => {
    let todo = { id: Math.floor(Math.random() * 100000) + 1, title: nameAddress };
    setTodos([...todos, todo]);
    setNameAddress('');
  };

  const handeOnChange = (event) => {
    setNameAddress(event.target.value);
  };
  const deleteDataTodo = (id) => {
    let currentTodo = todos;
    currentTodo = currentTodo.filter(item => item.id !== id);
    setTodos(currentTodo);
  };

  const alertTimeUp = () => {
    alert(`Time's up`);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          <Countdown alertTimeUp={alertTimeUp} />
          <h1>
            Hello world from {name}
          </h1>
          <h2>
            COVID tracking in VietNam
          </h2>

          <Routes>
            <Route path="/" exact element={<Covid />} />
            {/* <Route
              path="/todos"
              element={<Todo />} >
              <input type='text' value={nameAddress} onChange={(event) => handeOnChange(event)}></input>
              <button type='button' onClick={(event) => handleClickMe(event)}>Click me</button>
            </Route> */}


            <Route path="/">
              {/* <Home /> */}
            </Route>
          </Routes>

        </header >
      </div >
    </Router>
  );
};

export default App;
