import AppItem from "./AppItem";


function ToDoItems({todoItems, handleDeleteItem}) {

    return (

         <div className="container">
            {todoItems.map((item,idx) => <AppItem key={idx} todoName={item.itemName} todoDate={item.dueDate} handleDeleteItem={handleDeleteItem}></AppItem>)}
                
         </div>

    );
}

export default ToDoItems;