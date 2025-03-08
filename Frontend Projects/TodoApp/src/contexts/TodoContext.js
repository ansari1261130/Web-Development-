import { createContext, useContext } from 'react'

const TodoContext = createContext({
    Todos: [{
        id : 1,
        todo : " Todo msg",
        completed : false,
    }],

    addTodo: (todo) => {},
    updateTodo: (todo,id) => {},
    deleteTodo: (id) => {},
    toggleCompleted: (id) => {}
})

export default TodoContext

export const useTodo=()=> {
    return useContext(TodoContext)
}


export const TodoProvider = TodoContext.Provider
