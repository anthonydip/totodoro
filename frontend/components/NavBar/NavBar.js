import React, { useContext } from 'react';
import styled from 'styled-components';

// Import components
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { ThemeContext } from '../Contexts/ThemeContext';

// Import icons
import SettingsIcon from '@mui/icons-material/SettingsOutlined';
import AccountIcon from '@mui/icons-material/AccountCircleOutlined';
import VolumeIcon from '@mui/icons-material/VolumeUp';

// NavBar container styles
const Container = styled.div`
    display: flex;
    padding: 1rem;
    flex-direction: row;
    align-items: center;
    min-width: 400px;
    max-width: 600px;
    max-height: 58px;
    margin-left: auto;
    margin-right: auto;
    background-color: ${({ theme }) => theme === 'light' ? `#ECE3D4` : `#38434f`};
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transition: all 0.50s linear;
`;

// Totodoro title styles
const Title = styled.span`
    font-family: 'Varela Round';
    // color: #505050;
    font-size: 30px;
    margin-left: auto;
    margin-right: 142px;
    transition: color 0.50s linear;
`;

// Button container styles
const BtnContainer = styled.div`
    display: flex;
    gap: 10px;
`;

const NavBar = ({ setOpenSettings, videoEvent }) => {
    const { currentTheme } = useContext(ThemeContext);

    const toggleMusic = () => {
        if(!videoEvent){
            console.log("here");
        }
        else{
            console.log("test");
        }
    };

    return(
        <Container theme={currentTheme}>
            <IconButton 
                    onClick={toggleMusic}
                disableTouchRipple
                sx={{
                    backgroundColor: currentTheme === 'light' ? '#E2D6C0' : '#2f3842',
                    borderRadius: '5px',
                    width: '36px',
                    height: '36px',
                    color: currentTheme === 'light' ? '#505050' : 'white',
                    transition: 'all 0.50s linear',
                    '&:hover': {
                        backgroundColor: currentTheme === 'light' ? '#dccdb2' : '#252c34',
                    }
                }}
            >
                <VolumeIcon/>
            </IconButton>

            <Title>Totodoro</Title>

            <BtnContainer>
                <IconButton 
                     onClick={() => setOpenSettings(true)}
                    disableTouchRipple
                    sx={{
                        backgroundColor: currentTheme === 'light' ? '#E2D6C0' : '#2f3842',
                        borderRadius: '5px',
                        width: '36px',
                        height: '36px',
                        color: currentTheme === 'light' ? '#505050' : 'white',
                        transition: 'all 0.50s linear',
                        '&:hover': {
                            backgroundColor: currentTheme === 'light' ? '#dccdb2' : '#252c34',
                        }
                    }}
                >
                    <SettingsIcon/>
                </IconButton>

                <IconButton 
                    disableTouchRipple
                    sx={{
                        backgroundColor: currentTheme === 'light' ? '#E2D6C0' : '#2f3842',
                        borderRadius: '5px',
                        width: '36px',
                        height: '36px',
                        color: currentTheme === 'light' ? '#505050' : 'white',
                        transition: 'all 0.50s linear',
                        '&:hover': {
                            backgroundColor: currentTheme === 'light' ? '#dccdb2' : '#252c34',
                        }
                    }}
                >
                    <AccountIcon/>
                </IconButton>

            </BtnContainer>

            
        </Container>
    );
};

export default NavBar;