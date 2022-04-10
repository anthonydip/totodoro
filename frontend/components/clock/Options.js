import React, { useState } from 'react';
import styled from 'styled-components';

// Import components
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';

const Container = styled.div`

`;

const OptionButton = styled.button`
    // background-color: #8f8277;
    color: #505050;
    font-family: 'Varela Round';
    font-size: 14px;
    border-radius: 5px;
    border-width: 0px;
    width: 77;
    height: 23px;
    cursor: pointer;
    background-color: ${({ activated }) => activated ? '#DDCCB1' : '#E9DFCD'};
    font-weight: ${({ activated }) => activated ? 'bold' : 'none'};
`;

const Options = ({ setOption, setTime, setTimerState, timerInterval }) => {
    const [first, setFirst] = useState(true);
    const [second, setSecond] = useState(false);
    const [third, setThird] = useState(false);

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
                <OptionButton activated={first} onClick={() => toggleOption('pomodoro')}>
                    Pomodoro
                </OptionButton>

                <OptionButton activated={second} onClick={() => toggleOption('short')}>
                    Short Break
                </OptionButton>

                <OptionButton activated={third} onClick={() => toggleOption('long')}>
                    Long Break
                </OptionButton>
            </Stack>
        </Container>
    );
};

export default Options;