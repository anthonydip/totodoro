import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';

// Import components
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import { ThemeContext } from '../Contexts/ThemeContext';

const Container = styled.div`

`;

const OptionButton = styled.button`
    // background-color: #8f8277;
    color: ${({ theme }) => theme === 'light' ? `#505050` : `white`};
    font-family: 'Varela Round';
    font-size: 14px;
    border-radius: 5px;
    border-width: 0px;
    width: 77;
    height: 23px;
    cursor: pointer;
    transition: color 0.50s linear;
    font-weight: ${({ activated }) => activated ? 'bold' : 'none'};

    ${({ theme, activated }) => theme === 'light' ? `
        background-color: ${activated ? '#DDCCB1' : 'transparent'};
    ` : `
        background-color: ${activated ? '#262e36' : 'transparent'};
    `}
`;

const Options = ({ option, setOption, setTime, setTimerState, timerInterval }) => {
    const { currentTheme } = useContext(ThemeContext);
    const [first, setFirst] = useState(true);
    const [second, setSecond] = useState(false);
    const [third, setThird] = useState(false);

    // useEffect to check updated option state from a skipped/finished timer
    useEffect(() => {
        switch(option){
            // Pomodoro
            case 'pomodoro':
                // Set option state and button styles
                setFirst(true);
                setSecond(false);
                setThird(false);

                // Set time and timer state
                setTime("25:00");
                setTimerState(false);
                break;
            // Short break
            case 'short':
                // Set option state and button styles
                setFirst(false);
                setSecond(true);
                setThird(false);

                // Set time and timer state
                setTime("05:00");
                setTimerState(false);
                break;
            // Long break
            case 'long':
                // Set option state and button styles
                setFirst(false);
                setSecond(false);
                setThird(true);

                // Set time and timer state
                setTime("15:00");
                setTimerState(false);
                break;
        }
    }, [option]);

    // Toggle between pomodoro, short break and long break timer options
    const toggleOption = (selected) => {
        switch(selected){
            // Pomodoro
            case 'pomodoro':
                // Set option state and button styles
                setOption('pomodoro');
                setFirst(true);
                setSecond(false);
                setThird(false);

                // Set time and timer state
                setTime("25:00");
                setTimerState(false);

                // Clear existing timer interval
                clearInterval(timerInterval);
                timerInterval = null;
                break;
            // Short break
            case 'short':
                // Set option state and button styles
                setOption('short');
                setFirst(false);
                setSecond(true);
                setThird(false);

                // Set time and timer state
                setTime("05:00");
                setTimerState(false);

                // Clear existing timer interval
                clearInterval(timerInterval);
                timerInterval = null;
                break;
            // Long break
            case 'long':
                // Set option state and button styles
                setOption('long');
                setFirst(false);
                setSecond(false);
                setThird(true);

                // Set time and timer state
                setTime("15:00");
                setTimerState(false);

                // Clear existing timer interval
                clearInterval(timerInterval);
                timerInterval = null;
                break;
        }
    }

    return(
        <Container>
            <Stack 
                direction='row'
                divider={<Divider orientation='vertical' flexItem />}
                spacing={0.75}
                justifyContent='center'
            >
                <OptionButton theme={currentTheme} activated={first} onClick={() => toggleOption('pomodoro')}>
                    Pomodoro
                </OptionButton>

                <OptionButton theme={currentTheme} activated={second} onClick={() => toggleOption('short')}>
                    Short Break
                </OptionButton>

                <OptionButton theme={currentTheme} activated={third} onClick={() => toggleOption('long')}>
                    Long Break
                </OptionButton>
            </Stack>
        </Container>
    );
};

export default Options;