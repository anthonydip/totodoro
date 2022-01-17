import React, { useState } from 'react';
import Head from 'next/head'
import styled from 'styled-components';

// Import components
import NavBar from '../components/NavBar';

// import Image from 'next/image'

const Container = styled.div`
  padding: 1rem;
`;

const NavContainer = styled.div`
  
`;

const HomePage = () => {
  const [pageColour, setPageColour] = useState('#ece3d4');

  return (
    <Container>
      <Head>
        <title>Totodoro | Pomodoro Timer</title>
        <meta name="description" content="A Pomodoro Timer with a touch of My Neighbor Totoro, available for desktop & mobile browsers." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <style jsx global>{`
        body {
          background-color: ${pageColour};
        }
      `}</style>

      <NavContainer>
        <NavBar/>
      </NavContainer>

    </Container>
  )
}

export default HomePage;