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
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  & > div {
    margin-bottom: 30px;
    &:not(:last-child) {
      margin-right: 30px;
    }
  }
`;

export { Container, Header, Content };
