import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';

// Import clock components
import Options from './Options';
import { ThemeContext } from '../Contexts/ThemeContext';

// Import icons
import RestartIcon from '@mui/icons-material/RestartAlt';
import SkipIcon from '@mui/icons-material/SkipNext';

// Clock container styles
const Container = styled.div`
    // background-color: blue;
    background-color: ${({ theme }) => theme === 'light' ? `#E9DFCD` : `#2f3842`};
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
    transition: all 0.50s linear;
`;

// Timer control container styles
const TimerControls = styled.div`
    // background-color: blue;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

// Timer button styles
const TimerButton = styled.button`
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background-color: ${({ theme }) => theme === 'light' ? `#EFE8DC` : `#485665`};
    color: ${({ theme }) => theme === 'light' ? `#505050` : `white`};
    font-family: 'Varela Round';
    font-size: 32px;
    border-radius: 5px;
    border: none;
    width: 161px;
    height: 63px;
    margin-top: 30px;
    margin-bottom: 10px;
    cursor: pointer;
    transition: all 0.50s linear;

    &:active {
        transform: translateY(2px);
    }
`;

// Button styles for restart and skip timer
// Restart and Skip timer have opposite "running" states
const ControlButton = styled.button`
    background-color: transparent;
    border: none;
    margin-top: 25px;
    transition: opacity 0.5s ease;
    ${({running}) => running ? 
        `
            cursor: default;
            opacity: 0;
        ` : 
        `
            cursor: pointer;
            opacity: 1;
        `}
`;

// Time text styles
const StyledTime = styled.span`
    font-family: 'Varela Round';
    font-size: 100px;
    display: table;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
    transition: color 0.50s linear;
`;

// Variable to hold timer interval
let timerInterval = null;

const Clock = () => {
    const { currentTheme } = useContext(ThemeContext);
    const [option, setOption] = useState('pomodoro');
    const [timerState, setTimerState] = useState(false);
    const [time, setTime] = useState("25:00");
    const [pomodoros, setPomodoros] = useState(0);

    // useEffect to handle toggle functionality of timer
    useEffect(() => {
        // Timer is started
        if(timerState){
            let duration = 0;

            // Starting new timer, use new duration
            if(time == "25:00" || time == "05:00" || time == "15:00"){
                if(option == 'pomodoro') duration = 60 * 25;
                if(option == 'short') duration = 60 * 5;
                if(option == 'long') duration = 60 * 15;
            }
            // Continuing from stopped timer, use remaining duration
            else{
                // Parse minutes
                duration += (parseInt(time.substring(0,2)) * 60);

                // Parse seconds
                duration += parseInt(time.substring(3,5));
            }
            
            // Declare timer variables
            let timer = duration, minutes, seconds;

            // Start timer interval, immediately executing the first interval
            timerInterval = setInterval(function startTimer() {
                minutes = parseInt(timer / 60, 10);
                seconds = parseInt(timer % 60, 10);

                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;

                setTime(minutes + ":" + seconds);

                // Duration has finished, call skip function
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

    // Function to restart timer
    const restartTimer = () => {
        if(option == 'pomodoro') setTime("25:00");
        if(option == 'short') setTime("05:00");
        if(option == 'long') setTime("15:00");
    }

    // Function to skip timer
    const skipTimer = () => {
        // Clear the current time interval
        clearInterval(timerInterval);
        timerInterval = null;

        // If current option is pomodoro
        if(option == 'pomodoro'){
            // Increment pomodoros finished
            setPomodoros(++pomodoros);

            // Long break after every 4 pomodoros
            if(pomodoros % 4 == 0){
                setOption('long');
            }
            // Short break after every pomodoro
            else{
                setOption('short');
            }
        }

        // If current option is a break
        else{
            setOption('pomodoro');
        }
        
    }

    return(
        <Container theme={currentTheme}>
            <Options option={option} setOption={setOption} setTime={setTime} setTimerState={setTimerState} timerInterval={timerInterval}/>
            <StyledTime>{time}</StyledTime>
            <TimerControls>

                <ControlButton running={timerState} disabled={timerState} onClick={restartTimer}>
                    <RestartIcon 
                        sx={{ 
                            color: currentTheme === 'light' ? '#505050' : 'white', 
                            fontSize: 30,
                            transition: 'color 0.50s linear'
                        }}
                    />
                </ControlButton>

                <TimerButton theme={currentTheme} onClick={toggleTimer}>
                    {timerState ? <span>STOP</span> : <span>START</span>}
                </TimerButton>

                <ControlButton running={!timerState} disabled={!timerState} onClick={skipTimer}>
                    <SkipIcon
                        sx={{ 
                            color: currentTheme === 'light' ? '#505050' : 'white', 
                            fontSize: 30,
                            transition: 'color 0.50s linear'
                        }}
                    />
                </ControlButton>
            </TimerControls>
            
        </Container>
    );
};

export default Clock;