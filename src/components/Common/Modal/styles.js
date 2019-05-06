import styled from 'styled-components';

const Overlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: rgba(0,0,0,.05);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0,0,0,.15);
  padding: 20px;
  border-radius: 5px;
`;

export { Overlay, Container };
