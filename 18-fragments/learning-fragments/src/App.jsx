import Players from './components/Players';
import ErrorMsg from './components/ErrorMsg';
import PlayerInput from './components/PlayerInput';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';

function App() {
  //  let players = [];
//    let players = ['Mo Salah', 'Ekitike', 'Van Dyk', 'Gakpo', 'Szobozlai', 'McAlister'];

// let [textCurrentValue, setStateMethod] = useState();
  let [players, setPlayers] =  useState([]);

  
 
//    let textToShow = "food item entered by the user";

   const handleKeyDown = (dets) => {
            if(dets.key === 'Enter') {
               let newPlayer = dets.target.value;
               dets.target.value = "";
             let newPlayers = [...players, newPlayer];
             setPlayers(newPlayers);
            }
       }

     
  return (
    
       <div className="container custom-container">
           <div className="row">
               <div className="col-lg-12 col-md-12">
                    <center >
                         <h2>Liverpool Players</h2>
                    </center>

                  

               </div>
           </div>
             

             <PlayerInput handleKeyDown={handleKeyDown}></PlayerInput>
             <ErrorMsg items={players}></ErrorMsg>
             
             <Players items={players}></Players>

       </div>
       
    
  )
}

export default App;
