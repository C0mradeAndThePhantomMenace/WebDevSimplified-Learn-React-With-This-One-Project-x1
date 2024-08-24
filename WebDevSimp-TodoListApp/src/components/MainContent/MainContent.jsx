import React, {
    useState
} from 'react'

import {
    NewItemForm,
    ItemsList,
    itemsFakeData
} from '../Todos'

const MainContent = () => {
    console.log("MainContent: ", itemsFakeData)
    const [itemsListArr, setItemsListArr] = useState([...itemsFakeData])

    return (
        <>
            <h2>MainContent</h2>
            <NewItemForm />
            <hr />
            <ItemsList itemsListArr={itemsListArr} />
        </>
    )
}

export default MainContent