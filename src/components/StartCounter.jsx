import React from 'react'
import {Link} from 'react-router-dom';

function StartCounter({onStartClick = f=>f}) {
  const [minutes, setMinutes] = React.useState(0);
  const [seconds, setSeconds] = React.useState(0);
  const handleChangeMinutes = (value) => {
    value = parseInt(value);
    if(value > 60) {
      setMinutes(60);
    } else if(value < 0) {
      setMinutes(0);
    } else {
      setMinutes(value);
    }
  }
  const handleChangeSeconds = (value) => {
    value = parseInt(value);
    if(value > 60) {
      setSeconds(60);
    } else if(value < 0) {
      setSeconds(0);
    } else {
      setSeconds(value);
    }
  }
  return (
    <div className="counter-start">
      <div className="counter-start__run-group">
         <span className="counter-start__run-group--title">Minutes</span>
        <div className="custom-input-box">
          <input onChange={(e) => handleChangeMinutes(e.target.value)} 
                 type="number" name="minutes" min="0" max="60"  value={minutes} />
          <svg onClick={() => handleChangeMinutes(minutes + 1)}  
               className="input-add" xmlns="http://www.w3.org/2000/svg" width="14" height="7">
            <path fill="none" stroke="#1E213F" strokeWidth="2" d="M1 6l6-4 6 4"/>
          </svg>
           <svg onClick={() => handleChangeMinutes(minutes - 1)}
                className="input-minus" xmlns="http://www.w3.org/2000/svg" width="14" height="7">
            <path fill="none" stroke="#1E213F" strokeWidth="2" d="M1 1l6 4 6-4"/>
          </svg>
        </div>
      </div>
      <div className="counter-start__run-group">
         <span className="counter-start__run-group--title">Seconds</span>
        <div className="custom-input-box">
          <input onChange={(e) => handleChangeSeconds(e.target.value)} 
                 type="number" name="seconds" min="0" max="60"  value={seconds}/>
          <svg  onClick={() => handleChangeSeconds(seconds + 1)} 
                className="input-add" xmlns="http://www.w3.org/2000/svg" width="14" height="7">
            <path fill="none" stroke="#1E213F" strokeWidth="2" d="M1 6l6-4 6 4"/>
          </svg>
           <svg onClick={() => handleChangeSeconds(seconds - 1)} 
                className="input-minus" xmlns="http://www.w3.org/2000/svg" width="14" height="7">
            <path fill="none" stroke="#1E213F" strokeWidth="2" d="M1 1l6 4 6-4"/>
          </svg>
        </div>
      </div>
      <div className="counter-start__button-box">
        <Link to="/count">
          <button onClick={() => onStartClick(minutes*60+seconds)} className="btn btn--warn counter-start__button">Start</button>
        </Link>
      </div>
    </div>
  )
}

export default StartCounter
