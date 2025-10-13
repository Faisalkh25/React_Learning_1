
let ErrorMsg = ({items}) => {
      
      return (
        <>
         {items.length === 0 ? <h3>No players available</h3> : null}
        </>

          
      );
}

export default ErrorMsg;