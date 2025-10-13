import Players from './components/Players';
import ErrorMsg from './components/ErrorMsg';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  //  let players = [];
   let players = ['Mo Salah', 'Ekitike', 'Van Dyk', 'Gakpo', 'Szobozlai', 'McAlister'];

    //conditional rendering
    //display content based on conditions

    // if(players.length === 0) {
    //      return <h3>No players available</h3>
    // }
  
  //  let playerMesg = (players.length === 0 ? <h3>No players available</h3> : null)

  return (
    
       <div className="container">
           <div className="row">
               <div className="col-lg-12 col-md-12">
                    <center>
                         <h2>Liverpool Players</h2>
                    </center>

                  

               </div>
           </div>
             <ErrorMsg items={players}></ErrorMsg>

             <Players items={players}></Players>

       </div>
       
    
  )
}

export default App;
