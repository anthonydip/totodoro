import styled from 'styled-components';

// Import components
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

// Import icons
import SettingsIcon from '@mui/icons-material/SettingsOutlined';
import AccountIcon from '@mui/icons-material/AccountCircleOutlined';

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
    background-color: #ECE3D4;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

// Totodoro title styles
const Title = styled.span`
    color: #505050;
    font-size: 30px;
    margin-left: auto;
    margin-right: 142px;
`;

// Button container styles
const BtnContainer = styled.div`
    display: flex;
    gap: 10px;
`;

const NavBar = () => {
    return(
        <Container>

            <Title>Totodoro</Title>

            <BtnContainer>
                <IconButton 
                    disableTouchRipple
                    sx={{
                        backgroundColor: '#E2D6C0',
                        borderRadius: '5px',
                        width: '36px',
                        height: '36px',
                        color: '#505050',
                        '&:hover': {
                            backgroundColor: '#dccdb2'
                        }
                    }}
                >
                    <SettingsIcon/>
                </IconButton>

                <IconButton 
                    disableTouchRipple
                    sx={{
                        backgroundColor: '#E2D6C0',
                        borderRadius: '5px',
                        width: '36px',
                        height: '36px',
                        color: '#505050',
                        '&:hover': {
                            backgroundColor: '#dccdb2'
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