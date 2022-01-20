import React, { useState } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Image from 'next/image';

// Import components
import Options from './Options';

const Container = styled.div`
    // background-color: blue;
    background-color: #b3a295;
    padding-top: 15px;
    padding-bottom: 15px;
    max-width: 500px;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
`;

const Clock = () => {
    const [option, setOption] = useState('pomodoro');

    return(
        <Container>
            <Options option={option} setOption={setOption}/>
        </Container>
    );
};

export default Clock;