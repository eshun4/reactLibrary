import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

// let timer;

export default function TimerChallenge({ title, targetTime }) {
    const timer = useRef();
    const dialog = useRef();

    const [timeRemaining, setRemainingTime] = useState(targetTime * 1000);

    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

    if (timeRemaining <= 0) {
        clearInterval(timer.current);
        dialog.current.open();
    }

    const handleReset = () => {
        setRemainingTime(targetTime * 1000);
    }

    const handleStart = () => {
        timer.current = setInterval(() => {
            setRemainingTime(prevTimeRemaining => prevTimeRemaining - 10)
        }, 10);
        
        // setTimerStarted(true);
    }

    const handleStop = () => {
        clearInterval(timer.current);
    }

    return (
        <>
            <ResultModal ref={dialog} targetTime={targetTime} remainingTime={timeRemaining } onReset={handleReset} />
             <section className="challenge">
            <h2>
                {title}
            </h2>
            {timerIsActive && <p> You Lost!</p>}
            <p className={"challenge-time"}>
                {targetTime} second{targetTime > 1 ? 's': ""}
            </p>
            <p>
                <button onClick={timerIsActive ? handleStop: handleStart}>
                    {timerIsActive ? "Stop": "Start" } Challenge
                </button>
            </p>
            <p className={timerIsActive ?'active':undefined}>
                {timerIsActive ? "Time is running...": "Timer inactive" }  
            </p>
        </section>
        </>
       
    );
}