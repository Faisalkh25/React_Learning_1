import styles from  './PlayerInput.module.css';

const PlayerInput = ({handleKeyDown}) => {
      
      //  const handleOnChange = (dets) => {
      //       console.log(dets.target.value);
      //  }

       return (
             <input type="text" 
             placeholder="enter player" 
             className={styles.plinput}
             onKeyDown={handleKeyDown} />
       );
}

export default PlayerInput;