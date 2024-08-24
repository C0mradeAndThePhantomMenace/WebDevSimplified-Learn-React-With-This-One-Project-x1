// MainContent.jsx

import React from 'react'

import {
    NewTodoForm,
    TodosList,
    todosItemsData
} from '../index'

const MainContent = () => {
    console.log('asdf', todosItemsData)
    return (
        <>
            <main>
                <h2>Main Content</h2>
                <NewTodoForm />
                <hr />
                <TodosList todosItemsData={todosItemsData} />
            </main>
        </>
    )
}

export default MainContent