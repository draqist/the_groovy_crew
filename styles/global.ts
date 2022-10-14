import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
      margin: 0;
      padding: 0;
      outline:0;
      box-sizing:border-box;
    }
    #root{
      height: 100%;
    }
    html{
      --brand-color: #F4F0DE;
      --text-color: #321E1E;
      --text-on-image: #F4F1E0;
      --brand-color-light: #4B491D99;
      --border: #00000020
    }
    @font-face {
      font-family: 'Baunk';
      src: local('/fonts/Baunk.woff'), local('/fonts/Baunk.woff'),
      url("/fonts/Baunk.woff") format('woff');
      font-weight: 700;
      font-style: normal;
    }
    @font-face {
      font-family: 'Mango';
      src: local('/fonts/MangoGrotesque-Bold.woff2'), local('/fonts/MangoGrotesque-Bold.woff2'),
      url("/fonts/MangoGrotesque-Bold.woff2") format('woff2');
      font-weight: 700;
      font-style: normal;
    }
    @font-face {
      font-family: 'Humane';
      src: local('/fonts/Humane-Bold.woff2'), local('/fonts/Humane-Bold.woff2'),
      url("/fonts/Humane-Bold.woff2") format('woff2');
      font-weight: 700;
      font-style: normal;
    }
    @font-face {
      font-family: 'Rockstar';
      src: local('/fonts/Rockstar-ExtraBold.otf'), local('/fonts/Rockstar-ExtraBold.otf'),
      url("/fonts/Rockstar-ExtraBold.otf") format('opentype');
      font-weight: 700;
      font-style: normal;
    }
    body{
      margin: 0;
      height: 100%;
      width: 100%;
      padding: 0;
      background-color: var(--brand-color);
      scroll-behavior: smooth;
      color: var(--text-color);
      font-family: "Baunk", "Mango", "Rockstar" ,"Humane", sans-serif;
    }
    ::-webkit-scrollbar {
      display: none;
    }
`;
