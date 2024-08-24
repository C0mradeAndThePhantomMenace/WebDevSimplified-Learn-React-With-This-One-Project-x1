const AddNewItemForm = () => (
    <form action="" className="new-item-form">
        <div className="form-row">
            <label htmlFor="item">New Item</label>
            <input type="text" id="item" />
        </div>
        <button className="btn">Add Todo</button>
    </form>
)
export default AddNewItemForm