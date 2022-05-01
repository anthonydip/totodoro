import React from 'react';
import styled from 'styled-components';

import Switch from '@mui/material/Switch';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 5px;
`;

const ToggleButton = ({ checked, onChange, label }) => {
    return(
        <Container>
            {label}
            <Switch
                checked={checked}
                onChange={onChange}
            />
        </Container>
    );
};

export default ToggleButton;