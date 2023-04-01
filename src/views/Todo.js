

const Todo = (props) => {
    const { todos, title, deleteDataTodo } = props;
    const handleDeleteTodo = (id) => {
        deleteDataTodo(id);
    };
    return (
        <div>
            <div>
                {title}
            </div>
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