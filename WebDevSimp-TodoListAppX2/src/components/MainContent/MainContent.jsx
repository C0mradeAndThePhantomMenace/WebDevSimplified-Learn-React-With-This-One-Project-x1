// MainContent.jsx

import React from 'react'
import { useState } from 'react'

import {
    AddTodoItemForm,
    ListTodoItems,
    todoItemsFakeData
} from '../TodoItems'

const MainContent = () => {
    const [todos, setTodos] = useState([...todoItemsFakeData])
    const handleAddTodoItemForm = (item) => setTodos(
        currentTodos => [
            ...currentTodos,
            {
                id: crypto.randomUUID(),
                value: item
            }
        ]
    )
    console.log(todos)
    return (
        <>
            <h2>MainContent</h2>
            <AddTodoItemForm handleAddTodoItemForm={handleAddTodoItemForm} />
            <hr />
            <ListTodoItems todos={todos} />
        </>
    )
}

export default MainContent