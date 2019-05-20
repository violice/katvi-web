import styled from 'styled-components';

const Container = styled.div`
  padding: 50px 80px 0px 80px;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  font-size: 36px;
  margin-bottom: 30px;
`;

const Content = styled.div`
  flex: 1;
`;

export { Container, Header, Content };
