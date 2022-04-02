import React, { useState } from 'react';
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

const Clock = () => {
    const [option, setOption] = useState('pomodoro');

    return(
        <div style={{ flex: 1, justifyContent: 'center' }}>
            <Container>
                <Options option={option} setOption={setOption}/>
                <Timer />
            </Container>
        </div>
        
        
    );
};

export default Clock;