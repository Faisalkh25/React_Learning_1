import ClockHeading from "./components/ClockHeading";
import AboutClock from "./components/AboutClock";
import TimeDisplay from "./components/TimeDisplay";
// import './App.css'

function App() {


  return (
    <>
        <div className="container">
             <ClockHeading></ClockHeading>
             <AboutClock></AboutClock>
             <TimeDisplay></TimeDisplay>
        </div>
    </>
  )
}

export default App
