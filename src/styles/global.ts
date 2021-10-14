import { createGlobalStyle } from "styled-components"
export const GlobalStyles = createGlobalStyle`
:root {
  --background: #1F2229;
  --background2: #2E303C;
  --background-button: #373945;
  --background-button2: #4B4D59;
  --yellow: #FAE800;
  --gray: #BEC2C6;
  --white: #FBFBFB;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
	//quando o usuário estiver com uma tela de ATÉ 1080px, diminuir a fonte para 93.75%
  @media (max-width: 1080px) {
    font-size: 93.75%; //15px
  }

	//quando o usuário estiver com uma tela de ATÉ 720px, diminuir a fonte para 87.5%
  @media (max-width: 720px) {
    font-size: 87.5%; // 14px
  }

	//1rem = font-size da nossa página.
	//sempre utilizar o font-size em %.
	//o % é calculado sobre 16px.
}

body {
  font: 16px "Poppins", Arial, sans-serif;
  color: #FBFBFB;
	background: var(--background);
  -webkit-font-smoothing: antialiased;
}
 
input, textarea, select, button {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong {
  font-weight: 600;
}

button {
  cursor: pointer;
}

[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
}

`