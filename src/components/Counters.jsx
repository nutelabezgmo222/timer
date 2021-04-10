import React from 'react';
import CounterControl from './CounterControl';
import Counter from './Counter';
import {Link} from 'react-router-dom';

const Counters = ({timer = 0, onResetClick=f=>f}) => {
  const [currentTimer, setCurrentTimer] = React.useState(0);
  const [isCountActive, setCountActive] = React.useState(false);
  const [isCountDone, setCountDone] = React.useState(false);
  React.useEffect(() => {
    setCountActive(false);
    setCurrentTimer(timer);
  }, [timer])

  React.useEffect(() => {
    if(isCountActive) {
      const interval = setInterval(() => {
        setCurrentTimer(curTimer => {
          if(curTimer > 1) {
            return curTimer - 1;
          }else {
            setCountActive(false);
            setCountDone(true);
            return 0;
          }
        })
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isCountActive, timer])

  const handleStartClick = () => {
    setCountActive(true);
  }
  const handlePauseClick = () => {
    setCountActive(false);
  }

  const minutes = Math.floor(currentTimer / 60) < 10 ? '0' + Math.floor(currentTimer / 60) : Math.floor(currentTimer / 60);
  const seconds = (currentTimer % 60) < 10 ? '0' + (currentTimer % 60) : (currentTimer % 60);
  const difference = ((timer-1) - (currentTimer-1)) / (timer-1);

  return (
    <div className="counter">
      {
        !isCountDone ? (
        <div style={{display: 'flex', flexDirection:'column'}}>
          <div className="counter__timers">
            <Counter 
                difference={difference} 
                counterValue={minutes} 
                additionalClasses="counter__minutes"/>
            <Counter 
                difference={difference} 
                counterValue={seconds} 
                additionalClasses="counter__seconds"/>
          </div>
          <div className="counter__control">
            <CounterControl
                onResetClick={onResetClick}
                isCountActive={isCountActive}
                onStartClick={handleStartClick} 
                onPauseCick={handlePauseClick}/>
          </div>
        </div>
        ):
        <div style={{display: 'flex', flexDirection:"column", alignItems:"center"}}>
          <p style={{marginBottom: "30px"}}>Timer done! </p>
          <Link to="/">Try again</Link>
        </div>
      }
    </div>
  )
}


export default Counters
