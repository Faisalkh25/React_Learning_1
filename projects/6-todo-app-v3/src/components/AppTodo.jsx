import { useState } from "react";

function AppTodo({handleInput}) {
       
    const [todoName, setTodoName] = useState();
    const [dueDate, setDueDate] = useState();

    const handleName = (dets) => {
          setTodoName(dets.target.value);
    }

    const handleDueDate = (dets) => {
        setDueDate(dets.target.value);
    }

    const handleAddBtn = () => {
         handleInput(todoName, dueDate);
         setTodoName("");
         setDueDate("");
    }


    return (
       
  <div className="row mt-5">
    <div className="col-5"><input type="text" value={todoName} onChange={handleName} placeholder="Enter todo here" /></div>
    <div className="col-4"><input type="date" value={dueDate} onChange={handleDueDate} /></div>
    <div className="col-3"><button onClick={handleAddBtn} className="btn btn-success custom-btn">Add</button></div>
  </div>

    )

}

export default AppTodo;