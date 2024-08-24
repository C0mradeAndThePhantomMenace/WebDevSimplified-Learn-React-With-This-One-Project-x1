import {
    itemsFakeData,
    AddNewItemForm,
    ItemsList
} from '../items'

import './MainContent.css'

const MainContent = () => {
    // console.log("itemsFakeData: ", itemsFakeData)
    return (
        <main>
            <h2>** Main Content **</h2>
            <hr />
            <AddNewItemForm/>
            <hr />
            <ItemsList  ItemsArr={itemsFakeData}/>
            <hr />
        </main>
    )
}
export default MainContent