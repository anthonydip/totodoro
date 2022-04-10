import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Import clock components
import Options from './Options';

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

// Timer control styles
const TimerControls = styled.div`
    display: flex;
    justify-content: center;
`;

// Timer button styles
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

// Time text styles
const StyledTime = styled.span`
    color: #505050;
    font-family: 'Varela Round';
    font-size: 100px;
    display: table;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
`;

// Variable to hold timer interval
let timerInterval = null;

const Clock = () => {
    const [option, setOption] = useState('pomodoro');
    const [timerState, setTimerState] = useState(false);
    const [time, setTime] = useState("25:00");

    // useEffect to handle toggle functionality of timer
    useEffect(() => {

        // Timer is started
        if(timerState){
            let duration = 0;

            // Starting new timer, use new duration
            if(time == "25:00"){
                duration = 60 * 25;
            }
            // Continuing from stopped timer, use remaining duration
            else{
                // Parse minutes
                duration += (parseInt(time.substring(0,2)) * 60);

                // Parse seconds
                duration += parseInt(time.substring(3,5));
            }
            
            let timer = duration, minutes, seconds;

            // Start timer interval, immediately executing the first interval
            timerInterval = setInterval(function startTimer() {
                minutes = parseInt(timer / 60, 10);
                seconds = parseInt(timer % 60, 10);

                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;

                setTime(minutes + ":" + seconds);

                if (--timer < 0) {
                    timer = duration;
                }

                return startTimer;
            }(), 1000);

        }
        // Timer is stopped, reset interval
        else{
            clearInterval(timerInterval);
            timerInterval = null;
        }
    }, [timerState]);

    // Toggle start/stop state of timer
    const toggleTimer = () => {
        setTimerState(!timerState);
    }

    return(
        <Container>
            <Options option={option} setOption={setOption}/>
            <StyledTime>{time}</StyledTime>
            <TimerControls>
                <TimerButton onClick={toggleTimer}>
                    {timerState ? <span>STOP</span> : <span>START</span>}
                </TimerButton>
            </TimerControls>
            
        </Container>
    );
};

export default Clock;