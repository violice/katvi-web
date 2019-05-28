import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  & > form {
    width: 100%;
    & > div {
      margin-bottom: 20px;
    }
  }
`;

export { Container };
