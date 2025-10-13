import AppName from "./components/AppName";
import AppTodo from "./components/AppTodo";
import AppItem1 from "./components/AppItem1";
import AppItem2 from "./components/AppItem2";

function App() {
 

  return(
         
       <div className="container">
              <AppName></AppName>
               <AppTodo></AppTodo>
               <AppItem1></AppItem1>
               <AppItem2></AppItem2>
       </div>

  ) 
}

export default App;
