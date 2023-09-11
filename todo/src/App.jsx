import { useState } from 'react'

import Todo from "./components/todo"
import "./App.css"
import TodoForm from './components/TodoForm'
import Search from './components/search'
import Filter from './components/Filter'

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

  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState("All")
  const [sort, setSort] = useState("Asc")

  // função para add uma nova tarefa
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
// função para excluir uma tarefa
  const removeTodo = (id) =>{
    const NewTodos =[...todos]
    const filteredTodos = NewTodos.filter((todo) => 
      todo.id !== id? todo : null
      );
      setTodos(filteredTodos);
  }

  //função para completar uma tarefa 
  const completeTodo = (id) =>{
    const newTodos=[...todos]
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo
    );
    setTodos(newTodos)
  }
  return (
    <div className='app'>
      <h1>Lista de tarefas:</h1>
      <Search  search={search} setSearch={setSearch}/>
      <Filter filter={filter} setFilter={setFilter} setSort={setSort}/>
        <div className="todo-list">
          {todos
          .filter((todo) => filter === "All" ? true : filter === "Completed" ?todo.isCompleted : !todo.isCompleted )
          .filter((todo) =>
           todo.text.toLowerCase().includes(search.toLowerCase())
          )
          .sort((a , b) => 
          sort === "Asc"
          ? a.text.localeCompare(b.text)
          : b.text.localeCompare(a.text)
          )
          .map((todo)=>(
           <Todo key={todo.id} 
            todo={todo} removeTodo={removeTodo}
            completeTodo={completeTodo}/>
          ))}
        </div>
        <TodoForm addTodo={addTodo}/>
    </div>
  ) 
}

export default App
