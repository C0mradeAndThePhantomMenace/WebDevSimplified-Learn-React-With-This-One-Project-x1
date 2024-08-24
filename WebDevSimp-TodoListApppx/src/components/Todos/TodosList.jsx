// TodosList

import React from 'react'

const TodoItem = ({ item }) => (
    <li>
        <label htmlFor="">
            <input type="checkbox" name="" id="" />
            {item}
        </label>
    </li>
)

const TodoListGen = ({ todosItemsData }) => {
    // console.log("x1x1", todosItemsData)
    // console.log("x1x1", (todosItemsData.forEach(e => <TodoItem item={"xxx"} />)))
    return todosItemsData.map(e => (<TodoItem item={e} />))
}

const TodosList = ({ todosItemsData }) => {
    console.log("xxxxxxxxxxxxx")
    console.log("x1x:", todosItemsData)
    // console.log("x2x:", TodoListGen(todosItemsData))
    return (
        <>
            <h2 className="header">Todos List</h2>
            <ul className="list">
                <TodoItem item={todosItemsData[0]} />
                <hr />
                <TodoListGen todosItemsData={todosItemsData} />
            </ul>
        </>
    )
}

export default TodosList