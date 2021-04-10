import React from 'react'

function Counter({difference = 0, counterValue = 0, additionalClasses=""}) {
  const diff = difference >= 1 ? 1 : difference;
  return (
    <div className={"counter__wrapper " + additionalClasses}>
        <svg className="counter-timer" >
          <circle strokeDashoffset={`calc((50% - 20px)*2*3.14159*${diff})`} 
                  strokeDasharray={"calc((50% - 20px)*2*3.14159)"} 
                  cx="50%" cy="50%" r="calc(50% - 20px)">
          </circle>
        </svg>
        <div className="counter__value-box">
          <p className="counter__time">{counterValue}</p>
        </div>
     </div>
  )
}

export default Counter
