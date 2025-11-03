import styles from './DisplayInput.module.css';


let DisplayInput = ({displayCalVal}) => {
      
      return (
          <>
            <input type="text" className={styles.displayInput} value={displayCalVal} readOnly/>
          </>
      );
}

export default DisplayInput;