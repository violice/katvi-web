import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  .quill {
    margin: 20px 0px;
  }
  .ql-container {
    height: 300px;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  & > button:not(:last-child) {
    margin-right: 10px;
  }
`;

export { Container, Footer };
