import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  & > input {
    margin-bottom: 20px;
  }
  & > textarea:not(:last-child) {
    margin-bottom: 40px;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export { Container, Footer };
