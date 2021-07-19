import Routing from "./container";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
  margin:0;
  padding:0;

  
}
@font-face {
    font-family: 'Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/ONE-Mobile-POP.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Routing />
    </>
  );
}

export default App;
