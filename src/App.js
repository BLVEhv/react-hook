import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState } from 'react';
import Todo from './views/Todo';
const App = () => {

  let [name, setName] = useState('BLUE');
  let [nameAddress, setNameAddress] = useState('');
  let [todos, setTodos] = useState([
    { id: '1', title: "Doing homework", author: 'Hieu' },
    { id: '2', title: "Working", author: 'Hieu' },
    { id: '3', title: "Playing game", author: 'BLUE' },
    { id: '4', title: "Coding", author: 'BLUE' }
  ]);

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
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
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
        <Todo
          todos={todos}
          title={'All title'}
          deleteDataTodo={deleteDataTodo}
        />
        <Todo
          todos={todos.filter(item => item.author === 'BLUE')}
          title={'BLUE title'}
          deleteDataTodo={deleteDataTodo}

        />


      </header >
    </div >
  );
};

export default App;
