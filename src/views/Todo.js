import { useEffect, useState } from "react";

const Todo = (props) => {
    // const { todos, title, deleteDataTodo } = props;
    let [nameAddress, setNameAddress] = useState('');
    let [todos, setTodos] = useState([
        { id: '1', title: "Doing homework", author: 'Hieu' },
        { id: '2', title: "Working", author: 'Hieu' },
        { id: '3', title: "Playing game", author: 'BLUE' },
        { id: '4', title: "Coding", author: 'BLUE' }
    ]);
    useEffect(() => {
        if (todos.author === 'BLUE') {
            return todos.map(todo => {
                <>
                    <div>
                        BLUE's todos
                    </div>
                    <div key={todo.id}>
                        <li>{todo.title}</li>
                    </div>;
                </>;
            });
        }
    }, []);
    const handleClickMe = (event) => {
        let todo = { id: Math.floor(Math.random() * 100000) + 1, title: nameAddress };
        setTodos([...todos, todo]);
        setNameAddress('');
    };

    const handeOnChange = (event) => {
        setNameAddress(event.target.value);
    };
    const handleDeleteTodo = (id) => {
        let currentTodo = todos;
        currentTodo = currentTodo.filter(item => item.id !== id);
        setTodos(currentTodo);
    };
    return (
        <div>
            <input type='text' value={nameAddress} onChange={(event) => handeOnChange(event)}></input>
            <button type='button' onClick={(event) => handleClickMe(event)}>Click me</button>
            {/* <div>
                {title}
            </div> */}
            {todos.map(todo => {
                return (
                    <div key={todo.id}>
                        <li  > {todo.title} <span onClick={() => handleDeleteTodo(todo.id)}>x</span></li>
                    </div>

                );
            })}
            <hr />

        </div>
    );
};

export default Todo;