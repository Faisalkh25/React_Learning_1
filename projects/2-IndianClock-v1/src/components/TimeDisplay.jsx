
function TimeDisplay() {
       

      let time = new Date();

     return (

         <>
            <div className="row">
                  <div className="col-lg-12 col-md-12">
                       <center>
                         <h4>This is the current time : {time.toLocaleDateString()} - {time.toLocaleTimeString()}</h4>
                       </center>
                  </div>
            </div>
         </>
     )
}

export default TimeDisplay;