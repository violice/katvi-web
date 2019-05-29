import styled from 'styled-components';

const Container = styled.div`
  width: 600px;
  & > form { 
    display: flex;
    flex-direction: column;
    & > div {
      margin-bottom: 20px;
    }
  }
`;

const Selects = styled.div`
  display: flex;
  & > div {
    margin-right: 20px;
    min-width: 230px;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  & > button:not(:last-child) {
    margin-right: 10px;
  }
`;

export { Container, Selects, Footer };
