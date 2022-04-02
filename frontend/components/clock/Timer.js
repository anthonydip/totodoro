import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin-top: 30px;
`;

const StyledTime = styled.span`
    color: #505050;
    font-family: 'Varela Round';
    font-size: 100px;
    display: table;
    margin-left: auto;
    margin-right: auto;
`;

const Timer = () => {
    return(
        <Container>
            <StyledTime>25:00</StyledTime>
        </Container>
    );
};

export default Timer;