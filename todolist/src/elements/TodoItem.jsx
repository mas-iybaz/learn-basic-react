/* eslint-disable react/prop-types */

function TodoItem ({ id, task, completed, toggleTodo, deleteTodo }) {
    return (
        <li>
            <label>
                <input type="checkbox" checked={completed} onChange={e => toggleTodo(id, e.target.checked)} />
                <div className="label-title">
                    {task}
                </div>
                <button onClick={() => deleteTodo(id)} className="btn btn-danger ml-1">🗑</button>
            </label>
        </li>
    )
}

export default TodoItem