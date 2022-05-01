import React, { useState, useContext } from 'react';
import styled from 'styled-components';

import Modal from '@mui/material/Modal';
import Divider from '@mui/material/Divider';
import CloseIcon from '@mui/icons-material/Close';
import ToggleButton from './ToggleButton';
import { ThemeContext } from '../Contexts/ThemeContext';

const ModalContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 300px;
    width: 300px;
    background-color: ${({ theme }) => theme === 'light' ? `#E9DFCD` : `#2f3842`};
    border-radius: 10px;
    transition: all 0.50s linear;
`;

const CloseButton = styled.button`
    background-color: transparent;
    border: none;
    float: right;
    cursor: pointer;
    padding: 0px;
`;

const TopContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
`

const Title = styled.span`
    // margin: 5px;
    font-family: 'Varela Round';
    font-size: 20px;
    // color: #505050;
`

const OptionsContainer = styled.div`

`;

const SettingsModal = ({ open, setOpen, toggleDarkMode }) => {
    const { currentTheme } = useContext(ThemeContext);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return(
        <Modal
          open={open}
          onClose={handleClose}
        >
            <ModalContainer theme={currentTheme}>
                <TopContainer>
                    <Title>SETTINGS</Title>

                    <CloseButton onClick={handleClose}>
                        <CloseIcon 
                            sx={{ 
                                color: currentTheme === 'light' ? '#6b6b6b' : '#dbdbdb', 
                                transition: 'all 0.5s linear',
                                '&:hover': {
                                    color: currentTheme === 'light' ? '#505050' : 'white',
                                }
                            }}
                        />
                    </CloseButton>
                </TopContainer>

                <Divider/>

                <OptionsContainer>
                    <ToggleButton
                        label='Dark Mode'
                        onChange={toggleDarkMode}
                    />
                </OptionsContainer>
                
            </ModalContainer>
        </Modal>
    );
};

export default SettingsModal;