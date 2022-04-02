import React, { useState } from 'react';
import Head from 'next/head'
import styled from 'styled-components';

// Import components
import NavBar from '../components/NavBar/NavBar';
import Clock from '../components/clock/Clock';

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
  const [pageColour, setPageColour] = useState('#ece3d4');

  return (
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
          background-image: url("../light-background.jpg");
          background-size: cover;
          background-position: center center;
          background-attachment: fixed;
        }
      `}</style>

      <Container>

        <NavBar/>

        <Clock/>

      </Container>
    </div>
  )
}

export default HomePage;