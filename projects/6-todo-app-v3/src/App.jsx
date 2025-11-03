import { useState } from "react";
import AppName from "./components/AppName";
import AppTodo from "./components/AppTodo";

import ToDoItems from "./components/TodoItems";
import Message from "./components/Message";



function App() {

   const items = [
  //   {
  //      itemName: "Buy Milk",
  //      dueDate: "10/10/2025"
  // },
  //   {
  //      itemName: "Go to Gym",
  //      dueDate: "10/10/2025"
  // },
  // {
  //      itemName: "Go to club",
  //      dueDate: "12/10/2025"
  // }
];

  const [todo, setTodo] = useState(items);

  const handleInput = (itemName, dueDate) => {
        console.log(`new item added ${itemName} date: ${dueDate}`);

        const newItems = [...todo, {
       itemName: itemName,
       dueDate: dueDate
  }];

  setTodo(newItems);

  }

   //delete funciton
   const handleDeleteItem = (deletedItem) => {
        
    const newTodoItems = todo.filter(item => item.itemName !== deletedItem);
    setTodo(newTodoItems);
   }
  
  return(
         
       <div className="container">
              <AppName></AppName>
               <AppTodo handleInput={handleInput}></AppTodo>
               {todo.length === 0 && <Message></Message>}
               <ToDoItems todoItems={todo} handleDeleteItem={handleDeleteItem}></ToDoItems>
        
              
       </div>

  ) 
}

export default App;
