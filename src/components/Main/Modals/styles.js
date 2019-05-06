import styled from 'styled-components';

const Container = styled.div`
  padding: 20px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > a {
    font-size: 18px;
    margin-top: 15px;
    margin-bottom: 30px;
  }
  & > input {
    margin-bottom: 20px;
  }
  & > button {
    margin-top: 20px;
  }
`;

const Header = styled.div`
  font-size: 36px;
  font-weight: 600;
`;

export { Container, Header };
