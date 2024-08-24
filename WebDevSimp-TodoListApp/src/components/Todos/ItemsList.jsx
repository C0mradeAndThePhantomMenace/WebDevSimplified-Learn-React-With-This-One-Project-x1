// ItemsListGen

import React from 'react'

const ItemsListGen = ({ itemsListArr1 }) => itemsListArr1.map(
    item => <li key={item.id}>
        <label htmlFor="">
            <input type="checkbox" name="" id={item.id} />
            {item.title}
        </label>
        <button className="btn btn-danger">Delete</button>
    </li>
)

const ItemsList = ({ itemsListArr }) => {
    const itemsListArr1 = [...itemsListArr]
    console.log("ItemsList - itemsListArr1: ", itemsListArr1)
    console.log("ItemsList - itemsListArr1: ", itemsListArr1)

    return (
        <>
            <h2>Items List</h2>
            <ul > {/** className='list' */}
                <ItemsListGen itemsListArr1={itemsListArr1} />
            </ul>
        </>
    )
}
export default ItemsList