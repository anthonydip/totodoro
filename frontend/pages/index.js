import React, { useState } from 'react';
import Head from 'next/head'
import styled, { ThemeProvider } from 'styled-components';

// Import components
import NavBar from '../components/NavBar/NavBar';
import Clock from '../components/Clock/Clock';
import SettingsModal from '../components/Settings/SettingsModal';

// Import themes
import { GlobalStyles } from '../components/Theme/GlobalStyles';
import { lightTheme, darkTheme } from '../components/Theme/Themes';
import { ThemeContext } from '../components/Contexts/ThemeContext';

// Container
const Container = styled.div`
  margin: 1rem;
  // background-color: blue;
  min-width: 400px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const HomePage = () => {
  const [currentTheme, setCurrentTheme] = useState('light');
  const [pageColour, setPageColour] = useState('#ece3d4');
  const [openSettings, setOpenSettings] = useState(false);

  // Dark mode theme toggler
  const toggleDarkMode = () => {
    console.log("dark mode");
    currentTheme === 'light' ? setCurrentTheme('dark') : setCurrentTheme('light');
  }

  return (
    <ThemeProvider theme={currentTheme === 'light' ? lightTheme : darkTheme}>
      <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
        <GlobalStyles />
        <div>
          {/* Add elements and styles to the head of the page */}
          <Head>
            <title>Totodoro | Pomodoro Timer</title>
            <meta name="description" content="A Pomodoro Timer with a touch of My Neighbor Totoro, available for desktop & mobile browsers." />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <style jsx global>{`
            body {
              // background-color: ${pageColour};
              background-repeat: no-repeat;
              background-image: ${currentTheme === 'light' ? 'url("../light-background.jpg")' : 'url("../dark-background.jpg")'};
              background-size: cover;
              background-position: center center;
              background-attachment: fixed;
              transition: background-image 0.5s linear;
            }
          `}</style>

          <Container>

            <NavBar setOpenSettings={setOpenSettings}/>

            <Clock/>

            <SettingsModal open={openSettings} setOpen={setOpenSettings} toggleDarkMode={toggleDarkMode}/>

          </Container>
        </div>
      </ThemeContext.Provider>
    </ThemeProvider>
    
  )
}

export default HomePage;