import { useState } from "react"

function TodoForm({addTodo}){
    const [value, setValue] = useState("")
    const [category, setCategory] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!value || !category) return
        //adiciona ao todo  
        addTodo(value, category)
        setCategory("")
        setValue("")
    };
    return(
        <div className="todo-form">
            <h2>Criar tarefa:</h2>
            <form onSubmit={handleSubmit}>
                <input
                value={value}
                 type="text"
                 placeholder="Digite o título"
                 onChange={(e)=> setValue(e.target.value)}>
                </input>
                <select value={category} onChange={(e)=> setCategory(e.target.value)}>
                    <option value="">Selecione uma categoria</option>
                    <option value="trabalho">trabalho</option>
                    <option value="estudos">estudos</option>
                    <option value="pessoal">pessoal</option>
                </select>
                <button type="Submit"> Criar Tarefa</button>
            </form>
        </div>
    )
}

export default TodoForm