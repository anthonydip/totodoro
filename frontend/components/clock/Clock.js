import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Import clock components
import Options from './Options';
import Timer from './Timer';

// Clock container styles
const Container = styled.div`
    // background-color: blue;
    background-color: #E9DFCD;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding-top: 15px;
    padding-bottom: 15px;
    min-width: 300px;
    width: calc(100% - 100px);
    max-width: 500px;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
`;

const TimerControls = styled.div`
    // background-color: blue;
    display: flex;
    justify-content: center;
`;

const TimerButton = styled.button`
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background-color: #EFE8DC;
    color: #505050;
    font-family: 'Varela Round';
    font-size: 32px;
    border-radius: 5px;
    border: none;
    width: 161px;
    height: 63px;
    margin-top: 30px;
    margin-bottom: 10px;
    cursor: pointer;

    &:active {
        transform: translateY(2px);
    }
`;

const Clock = () => {
    const [option, setOption] = useState('pomodoro');
    const [timerState, setTimerState] = useState(false);
    const [time, setTime] = useState("5:00");

    let timer = null;

    // Timer function toggler
    useEffect(() => {
        if(timerState){
            console.log("timer on")



            // var duration = 60 * 5;
            // var timer = duration, minutes, seconds;
            // setInterval(function () {
            //     minutes = parseInt(timer / 60, 10);
            //     seconds = parseInt(timer % 60, 10);

            //     seconds = seconds < 10 ? "0" + seconds : seconds;

            //     setTime(minutes + ":" + seconds);

            //     if (--timer < 0) {
            //         timer = duration;
            //     }
            // }, 1000);
        }
        else{
            console.log("timer off")
        }
    }, [timerState]);

    // Toggle start/stop state of timer
    const toggleTimer = () => {
        setTimerState(!timerState);

        
    }

    return(
        <Container>
            <Options option={option} setOption={setOption}/>
            <Timer />
            {time}
            <TimerControls>
                <TimerButton onClick={toggleTimer}>
                    {timerState ? <span>STOP</span> : <span>START</span>}
                </TimerButton>
            </TimerControls>
            
        </Container>
    );
};

export default Clock;