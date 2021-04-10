import React from 'react'
import {Link} from 'react-router-dom';

function TimerControl({onStartClick=f=>f, onPauseCick=f=>f, onResetClick=f=>f, isCountActive = false}) {
  return (
    <div className="counter-control">
      <button 
          onClick={onStartClick} 
          className={isCountActive? "btn hidden counter-control__button":
                  "btn counter-control__button"}>Start</button>
      <button 
          onClick={onPauseCick} 
          className={isCountActive? "btn counter-control__button":
                  "btn hidden counter-control__button"}>Pause</button>
      <Link to="/">
        <button onClick={onResetClick} className="btn btn--warn counter-control__button--reset">Reset</button>
      </Link>
    </div>
  )
}

export default TimerControl
