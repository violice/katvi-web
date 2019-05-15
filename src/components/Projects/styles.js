import styled from 'styled-components';

const Container = styled.div`
  padding: 50px 80px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  font-size: 36px;
  margin-bottom: 65px;
`;

const Content = styled.div`
  & > a {
    margin-bottom: 20px;
    &:not(:last-child) {
      margin-right: 20px;
    }
  }
`;

export { Container, Header, Content };
