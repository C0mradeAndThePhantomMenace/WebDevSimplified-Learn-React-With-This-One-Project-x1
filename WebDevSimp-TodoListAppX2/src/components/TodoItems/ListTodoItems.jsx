import React from 'react'

const ListTodoItemsGen = ({ todos }) => todos.map(
    item => <li key={item.id}>
        <label>
            <input type="checkbox" checked={item.completed} />
            {item.title}
        </label>
        <button className="btn btn-danger" onClick={(e) => console.log("Clicked", item.title)}>Delete</button>
    </li>
)

const ListTodoItems = ({ todos }) => {

    return (
        <ul className='list'>
            <ListTodoItemsGen todos={todos} />
        </ul>
    )
}

export default ListTodoItems