import { createGlobalStyle } from 'styled-components';
import { colors } from 'styles/colors';

export const GlobalStyles = createGlobalStyle`

    :root {
        --green: ${colors.green};
        --purple: ${colors.purple};
        --pink: ${colors.pink};
        --greenProgress : ${colors.greenProgress};
        --blue : ${colors.blue};
        --black: ${colors.black};
        --graphite: ${colors.graphite};
        --white: ${colors.white};
        --light-gray: ${colors.lightGray};
        --gray: ${colors.gray};
        --dark-gray: ${colors.darkGray};
        --orange: ${colors.orange};
        --light-blue: ${colors.lightBlue};
        --midle-blue: ${colors.midleBlue};
    }

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        color: var(--purple);
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        -webkit-font-smoothing: antialised;
    }

    body, input, textarea, button {
      font-family: 'Saira Condensed', sans-serif;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 700;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;
