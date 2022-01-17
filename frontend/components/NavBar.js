import styled from 'styled-components';
import Image from 'next/image';

// Import components
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

// Import icons
import SettingsIcon from '@mui/icons-material/Settings';
import AccountIcon from '@mui/icons-material/AccountCircle';

const Container = styled.div`
    display: flex;
    padding: 1rem;
    flex-direction: row;
    align-items: center;
    background-color: #84705a;
    border-radius: 10px;
    border-style: solid;
    border-width: 1px;
    border-color: #5a483b;
`;

const Title = styled.span`
    color: white;
    font-size: 24px;
    font-weight: 700;
`;

const BtnContainer = styled.div`
    display: flex;
    gap: 10px;
    margin-left: auto;
`;

const Logo = styled(Image)`
    
`;

const NavBar = () => {
    return(
        <Container>

            <Logo src='/totoro.png' alt="Totodoro Pixel" width={32} height={32}/>
            <Title>Totodoro</Title>

            <BtnContainer>
                <IconButton 
                    
                    sx={{
                        backgroundColor: '#ab9889',
                        borderRadius: 1,
                        color: 'white',
                        '&:hover': {
                            backgroundColor: '#b7a79a'
                        }
                    }}
                >
                    <SettingsIcon/>
                </IconButton>

                <IconButton 
                    
                    sx={{
                        backgroundColor: '#ab9889',
                        borderRadius: 1,
                        color: 'white',
                        '&:hover': {
                            backgroundColor: '#b7a79a'
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