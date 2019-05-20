import styled from 'styled-components';

const calc = (size, value) => {
  switch (size) {
    case 'medium':
      return value;
    case 'small':
      return value / 2;
    default:
      return 0;
  }
};

const Circle = styled.div`
  position: absolute;
  border: 4px solid #7D4CDB;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;

  @keyframes lds-ripple {
    0% {
      top: ${props => calc(props.size, 28)}px;
      left: ${props => calc(props.size, 28)}px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: -1px;
      left: -1px;
      width: ${props => calc(props.size, 58)}px;
      height: ${props => calc(props.size, 58)}px;
      opacity: 0;
    }
  }
`;

const Container = styled.div`
  display: inline-block;
  position: relative;
  width: ${props => calc(props.size, 64)}px;
  height: ${props => calc(props.size, 64)}px;
  & div:nth-child(2) {
    animation-delay: -0.5s;
  }
`;

export { Container, Circle };
