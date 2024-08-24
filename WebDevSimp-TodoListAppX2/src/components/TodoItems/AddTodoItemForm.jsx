import React from 'react'

import { useState } from 'react'

const AddTodoItemForm = ({ handleAddTodoItemForm }) => {
    const [newItem, setNewItem] = useState("")
    const handleSubmit = (e) => {
        console.log('Added...')
        e.preventDefault()
        handleAddTodoItemForm(newItem)
    }
    return (
        <>
            <h3>Add New Item Form</h3>
            <form onSubmit={handleSubmit} className="new-item-form">
                <div className="form-row">
                    <label htmlFor="item">New Item</label>
                    <input type="text" name="item" id="item" value={newItem} onChange={e => setNewItem(e.target.value)} />
                </div>
                <button className="btn">Add</button>
            </form>
        </>
    )
}
export default AddTodoItemForm