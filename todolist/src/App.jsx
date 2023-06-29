// import './App.css'
import { useEffect, useState } from "react"

import NewTodoForm from "./parts/NewTodoForm"
import TodoList from "./parts/TodoList"
import "./styles.css"

function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")

    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function AddTodo(task) {
    setTodos(todos => {
      return [
        ...todos,
        { id: crypto.randomUUID(), task, completed: false }
      ]
    })
  }

  function toggleTodo(id, completed) {
    setTodos(todos => {
      return todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }

        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(todos => {
      return todos.filter(todo => todo.id !== id )
    })
  }

  return (
    <>
      <h1 className="text-center">Todo List App</h1>
      
      <NewTodoForm onSubmit={AddTodo} />

      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  )
}

export default App
