
import styles from './ButtonContainer.module.css';

let ButtonContainer = ({onButtonClick}) => {
      
 let values = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.'];

     return (
         
        <div className={styles.buttonContainer}>

            {values.map(item => <button key={item} className={styles.myButton} 
                    onClick={() => onButtonClick(item)}>{item}</button> )}

                  
                 </div>
     
     );
}

export default ButtonContainer;