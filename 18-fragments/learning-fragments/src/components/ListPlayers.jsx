import styles from './ListPlayers.module.css';

let ListPlayers = ({playerName, handleBuy}) => {
     
      // const handleBuy = (dets) => {
      //     console.log(`clicked on ${playerName}`);
      // }

      return (
         <li  className="list-group-item">{playerName}
          <button className={`${styles.button} btn btn-success`}
           onClick={handleBuy}
          >Buy</button>
         </li>
      );
}

export default ListPlayers;