
function AppItem({todoName, todoDate, handleDeleteItem}) {

     return (

        <div className="row mt-3">
    <div className="col-5">{todoName}</div>
    <div className="col-4">{todoDate}</div>
    <div className="col-3">
      <button className="btn btn-danger custom-btn" onClick={() => handleDeleteItem(todoName)}>Delete</button>
      </div>
  </div>

     );
}

export default AppItem;