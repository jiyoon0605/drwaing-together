import styled, { keyframes } from "styled-components";

const stroke = keyframes`

  0% { 
    stroke-dashoffset: 750;   
  } 
 70%{
  fill: #fff
}
  100% { 
    stroke-dashoffset: 0;     
    fill: #fff
  } 
`;

const Container = styled.div`
  width: 500px;
  height: 180px;
`;
const Text = styled.text`
  font-family: "Bold";
  font-size: 6rem;
  stroke-width: 3px;
  stroke: #000;
  fill: transparent;

  stroke-dashoffset: 750;
  stroke-dasharray: 750;
  animation: ${stroke} 1.5s forwards;
  animation-delay: ${(props) => `${props.delay}s`};
`;
const Tilte = () => (
  <Container>
    <svg width="100%" height="100%">
      <Text x="100" y="45%" delay={1}>
        L
      </Text>
      <Text x="150" y="45%" delay={1.1}>
        E
      </Text>
      <Text x="215" y="45%" delay={1.2}>
        T
      </Text>
      <Text x="280" y="45%" delay={1.3}>
        '
      </Text>
      <Text x="290" y="45%" delay={1.4}>
        S
      </Text>
      {/**/}
      <Text x="20" y="88%" delay={2.2}>
        D
      </Text>
      <Text x="80" y="88%" delay={2.2}>
        R
      </Text>
      <Text x="140" y="88%" delay={2.2}>
        A
      </Text>
      <Text x="200" y="88%" delay={2.2}>
        W
      </Text>
      <Text x="280" y="88%" delay={2.2}>
        I
      </Text>
      <Text x="300" y="88%" delay={2.2}>
        N
      </Text>
      <Text x="370" y="88%" delay={2.2}>
        G
      </Text>
      <Text x="440" y="88%" delay={2.2}>
        !
      </Text>
    </svg>
  </Container>
);

export default Tilte;
