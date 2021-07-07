import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scrollbar-width: thin;
    scrollbar-color: rgba(155, 155, 155, 0.7) transparent;
    font-family: 'Space Grotesk', sans-serif;

    }
    
    *::-webkit-scrollbar {
    width: 5px;
    }
    *::-webkit-scrollbar-track {
    background: transparent;
    }
    *::-webkit-scrollbar-thumb {
    background-color: rgba(155, 155, 155, 0.7);
    border-radius: 20px;
    border: transparent;
    }
`;

export default GlobalStyle;
