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
  display: flex;
`;

const Menu = styled.div`
  width: 300px;
`;

const MenuItem = styled.div`
  font-weight: 500;
  font-size: 16px;
  color: ${props => (props.active ? '#7D4CDB' : '#000000')};
  line-height: 36px;
  &:hover {
    cursor: pointer;
  }
`;

export {
  Container, Header, Content, Menu, MenuItem,
};
