const ItemListGen = ({ Items }) => Items.map(item => <li key={item.id}>
    <p>ID: {item.id}</p>
    <p>Title: {item.title}</p>
    <p>Completed: {item.completed}</p>
</li>)

const ItemsList = ({ ItemsArr }) => {

    console.log("ItemsArr: ", ItemsArr)

    return (
        <ul>
            <li>xxx</li>
            <li>xxx</li>
            <li>xxx</li>
            <li>xxx</li>
            <ItemListGen Items={ItemsArr} />
        </ul>
    )
}
export default ItemsList