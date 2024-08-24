// NewTodoForm.jsx

import React from 'react'

const NewTodoForm = () => { 
    return (
        <>
        <h3>Add New Todo</h3>
        <form action="" className="new-item-form">
            <div className="form-row">
                <label htmlFor="item">New Todo</label>
                <input type="text" name="item" id="item" className="" />
            </div>
            <button className="btn">Add</button>
        </form>
        </>
    )
 }

 export default NewTodoForm