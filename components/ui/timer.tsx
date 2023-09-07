import React, { useState, useEffect } from 'react';

function Timer() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // Function to start the timer
  const startTimer = () => {
    setIsRunning(true);
  };

  // Function to stop the timer
  const stopTimer = () => {
    setIsRunning(false);
  };

  // Reset the timer to 0
  const resetTimer = () => {
    setMinutes(0);
    setSeconds(0);
    stopTimer();
  };

  // Use useEffect to update the timer every second when it's running
  useEffect(() => {
    let timerInterval:any;

    if (isRunning) {
      timerInterval = setInterval(() => {
        if (seconds === 59) {
          setMinutes((prevMinutes) => prevMinutes + 1);
          setSeconds(0);
        } else {
          setSeconds((prevSeconds) => prevSeconds + 1);
        }
      }, 1000);
    } else {
      clearInterval(timerInterval);
    }

    return () => {
      clearInterval(timerInterval);
    };
  }, [isRunning, seconds]);

  return (
    <div>
        <div className='flex justify-between p-2'>
              <button className='bg-blue-500 text-white px-4 py-2  rounded-md ml-5 hover:opacity-75'onClick={startTimer} disabled={isRunning}>START</button>
              <h1>Timer:<span className='font-bold text-l text-[#FF0000]'>{minutes < 10 ? '0' + minutes : minutes}:{seconds < 10 ? '0' + seconds : seconds}</span></h1>
              <button className='bg-blue-500 text-white px-4 py-2  rounded-md ml-5 hover:opacity-75' onClick={stopTimer}>STOP</button>
        </div>
    </div>
  );
}

export default Timer;
