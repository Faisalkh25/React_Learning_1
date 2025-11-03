import DisplayInput from './components/DisplayInput';
import ButtonContainer from './components/ButtonContainer';
import { useState } from 'react';



function App() {

    const [calVal, setCalVal] = useState("");

    const onButtonClick = (item) => {
        //  console.log(dets.target.innerText);
        

        if(item === 'C') {
           setCalVal("");
        } 
        else if(item === '=') {
           const result = eval(calVal);
           setCalVal(result);
        }
        else {
         const newVal = item;
        setCalVal(calVal + newVal);
        }
    }
  
  return (
       
           <div className="outerContainer">
 
                 <DisplayInput displayCalVal={calVal}></DisplayInput>

                  <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
             
           </div> 

  )
}

export default App
