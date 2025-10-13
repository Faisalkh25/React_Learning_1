import ListPlayers from "./ListPlayers";


let LivPlayers = ({items}) => {
      
      return (


         <div className="row">
               <div className="col-lg-12 col-md-12 col-sm-12">
                    <ul className="list-group">
                      {items.map(player => 
                        <ListPlayers key={player} playerName={player}
                        handleBuy={() => console.log(`${player} bought`)}
                        ></ListPlayers>
                      
                      )}
     
   </ul>
               </div>
           </div>
      )
         
     
}

export default LivPlayers;