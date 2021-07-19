import styled, { keyframes } from "styled-components";

const moveBackground = keyframes`
0%{background-position:0% 50%} 
50%{background-position:100% 50%} 
100%{background-position:0% 50%}
`;

const tada = keyframes`
  0% {
    transform: scale3d(1, 1, 1)
  }
  10%,
  20% {
    transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg)
  }
  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)
  }
  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)
  }
  100% {
    transform: scale3d(1, 1, 1)
  }

`;

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    45deg,
    rgba(255, 245, 125, 1) 0%,
    rgba(255, 192, 253, 1) 100%
  );
  background-size: 200%;
  animation: ${moveBackground} 5s ease infinite;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  box-sizing: border-box;
  padding-bottom: 2rem;
`;

export const BoxContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const LoginSection = styled.section`
  width: 50rem;
  background-color: #ffffff88;
  border-radius: 20px;
  border: 3px solid #000;

  box-sizing: border-box;
  padding: 3rem;
  margin-top: 3rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  text-align: center;
  font-family: "Bold";
  font-size: 2.5rem;
  width: 100%;
  height: 5rem;
  border: 3px solid #000;
  border-radius: 20px;
  outline: none;
  box-sizing: border-box;
  padding: 0 1rem;
  margin: 0 0 1rem 0;
`;

export const Button = styled.button`
  font-family: "Bold";
  font-size: 1.5rem;
  margin-top: 1rem;
  width: 10rem;
  height: 3rem;
  border-radius: 20px;

  outline: none;
  border: 3px solid #000;
  border-radius: 20px;
  background-color: #000;
  color: #fff;

  &:focus {
    animation: ${tada} 1s 0s;
    animation-fill-mode: both;
  }
`;
