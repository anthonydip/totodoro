import { createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    color: ${({ theme }) => theme.text};
    font-family: 'Varela Round', sans-serif;
    transition: all 0.50s linear;
  }
`;