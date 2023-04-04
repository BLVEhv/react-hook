import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState, useEffect } from 'react';
import Todo from './views/Todo';
import Covid from './views/Covid';
import Countdown from './views/Countdown';
import Blog from './views/Blog';
import BlogDetail from './views/BlogDetail';
import AddNewBlog from './views/AddBlog';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
const App = () => {




  // useEffect(() => {
  //   console.log('run use effect');
  // }, [nameAddress]);

  // useEffect(() => {
  //   console.log('run use effect todos');
  // }, [todos]);



  // const handleClickMe = (event) => {
  //   let todo = { id: Math.floor(Math.random() * 100000) + 1, title: nameAddress };
  //   setTodos([...todos, todo]);
  //   setNameAddress('');
  // };

  // const handeOnChange = (event) => {
  //   setNameAddress(event.target.value);
  // };
  // const deleteDataTodo = (id) => {
  //   let currentTodo = todos;
  //   currentTodo = currentTodo.filter(item => item.id !== id);
  //   setTodos(currentTodo);
  // };

  const alertTimeUp = () => {
    alert(`Time's up`);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />



          <Routes>
            <Route path="/" exact element={<Covid />} />
            <Route path="/todos" exact element={<Todo />} />
            <Route path="/countdown" exact element={<Countdown alertTimeUp={alertTimeUp} />} />
            <Route path="/blog" exact element={<Blog />} />
            <Route path="/blog/:id" exact element={<BlogDetail />} />
            <Route path="/add-new-blog" exact element={<AddNewBlog />} />
          </Routes>

        </header >
      </div >
    </Router>
  );
};

export default App;
