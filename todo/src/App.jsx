import { useState } from 'react'

import Todo from "./components/todo"
import "./App.css"
import TodoForm from './components/TodoForm'

function App() { 
  // uso de UseState se usa pq variaveis não redenrizam depois mudança de valor
  const [todos, setTodos] = useState([
    {
      id:1,
      text: "criar funcionalidade x no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id:2,
      text: "Ir pra academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id:3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    }
  ]) 

  const addTodo = (text, category) => {
    const NewTodos =[
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false,
      },
    ];
    setTodos(NewTodos)
  };

  return (
    <div className='app'>
      <h1>Lista de tarefas:</h1>
        <div className="todo-list">
          {todos.map((todo)=>(
           <Todo key={todo.id} todo={todo}/>
          ))}
        </div>
        <TodoForm addTodo={addTodo}/>
    </div>
  )
}

export default App
