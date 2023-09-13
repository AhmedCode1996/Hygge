import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*:after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

:root {
    --button-border-radius: 10px;
    --auth-border-stroke: rgba(235, 234, 237, 1);
    --auth-font-color: rgba(46, 44, 52, 1);
    --border-stroke: rgba(245, 245, 247, 1);
    --input-inactive-color: rgba(223, 223, 223, 1);


    --primary-green-color: #00CC96;
    --primary-light-green-color: #E6faf5;
    --seconday-blue-color: #2975FF;
    --secondary-light-green-color: #EAF2FF;
    --tertiary-yellow-color: #FFC123;
    --tertiary-light-yellow-color: #FFF9EA;
    --tertiary-pink-color: #FF66A0;
    --tertiary-light-pink-color: #FFF0F6;
    --accent-gray-color: #F6F7FB;
    --accent-red-color: #FF0000;

    --white-color: #FFFFFF;
    --black-color: #000000;

    --text-dark100-color: #1A202C;
    --text-dark64-color: #6D7078;
    --text-dark40-color: #A3A6AB;
    --text-dark24-color: #C8CACD;

    --text-light100-color: #F7FAFC;
    --text-light64-color: #FAFCFD;
    --text-light40-color: #FCFDFE;
    --text-light24-color: #FDFEFE;

    --global-inline-padding: 96px;
    --global-block-padding: 48px;

}
html {
    font-family: 'Montserrat', sans-serif;
}

body {
    line-height: 1.5;
}

html, body {
    height: 100%;
}

img, svg {
    display: block;
    max-width: 100%;
}

input, button, select {
    font: inherit;
    outline: none;
    border: none;
    background-color: transparent;
}

ul {
    list-style: none;
}

a {
    text-decoration: none;
}
`;
