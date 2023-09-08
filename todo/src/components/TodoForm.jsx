import { useState } from "react"

function TodoForm(){
    return(
        <div className="todo-form">
            <h2>Criar tarefa:</h2>
            <form>
                <input type="text" placeholder="Digite o título"></input>
                <select>
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