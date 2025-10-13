import AppName from "./components/AppName";
import AppTodo from "./components/AppTodo";

import ToDoItems from "./components/TodoItems";

function App() {
 
  const items = [
    {
       itemName: "Buy Milk",
       dueDate: "10/10/2025"
  },
    {
       itemName: "Go to Gym",
       dueDate: "10/10/2025"
  },
  {
       itemName: "Go to club",
       dueDate: "12/10/2025"
  }
];

  return(
         
       <div className="container">
              <AppName></AppName>
               <AppTodo></AppTodo>
               <ToDoItems todoItems={items}></ToDoItems>
              
              
       </div>

  ) 
}

export default App;
