import React from 'react'

const NewItemForm = (newItemFormHandler) => (
    <form action="" className="new-item-form">
        <div className="form-row">
            <label htmlFor="item">New Item</label>
            <input type="text" name="item" id="item" />
        </div>
        <button className="btn">Add Item</button>
    </form>
)
export default NewItemForm