import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

html {
  box-sizing: border-box;
}
*,
*::after,
*::before {
  box-sizing: inherit;
}

body {
  font-family: 'Jost', sans-serif;
  font-weight: 400;
  line-height: normal;
}

html,
body,
h1,
h2,
h3,
h4,
h5,
h6,
p {
margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}



ol,
ul {
    padding: 0;
  margin: 0;
  list-style: none;
  text-decoration: none;
}

.list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.link {
  text-decoration: none;
  color: inherit;
}

a {
  text-decoration: none;
  font-style: normal;
  cursor: pointer;
}

p {
  margin: 0;
}

button {
  padding: 0;
  font-family: inherit;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

`;
