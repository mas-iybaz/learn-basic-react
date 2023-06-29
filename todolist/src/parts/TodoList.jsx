/* eslint-disable react/prop-types */

import List from "../elements/TodoItem"

function TodoList({ todos, toggleTodo, deleteTodo }) {
    return (
        <>
            <h2 className="header">Task List</h2>
            <ul className="list">
                { todos.length == 0 && "Nothing to do" }
                { todos.map(todo => {
                    return (
                        <List key={todo.id} {...todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
                    )
                }) }
            </ul>
        </>
    )
}

export default TodoList