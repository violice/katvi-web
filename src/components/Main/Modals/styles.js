import styled from 'styled-components';

const Container = styled.div`
  width: 350px;
  padding: 20px 40px;
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
  & > img {
    margin-left: 15px;
  }
`;

export { Container, Header };
