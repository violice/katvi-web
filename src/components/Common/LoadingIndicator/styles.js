import styled from 'styled-components';

const Circle = styled.div`
  position: absolute;
  border: 4px solid #7D4CDB;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;

  @keyframes lds-ripple {
    0% {
      top: 28px;
      left: 28px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: -1px;
      left: -1px;
      width: 58px;
      height: 58px;
      opacity: 0;
    }
  }
`;

const Container = styled.div`
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
  & div:nth-child(2) {
    animation-delay: -0.5s;
  }
`;

export { Container, Circle };
