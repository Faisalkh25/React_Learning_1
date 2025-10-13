import AppItem from "./AppItem";


function ToDoItems({todoItems}) {

    return (

         <div className="container">
            {todoItems.map(item => <AppItem todoName={item.itemName} todoDate={item.dueDate}></AppItem>)}
                
         </div>

    );
}

export default ToDoItems;