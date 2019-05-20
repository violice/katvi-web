import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 200px;
  background-color: #7D4CDB;
  padding: 25px;
  display: flex;
  flex-direction: column;
  & > a {
    margin-bottom: 60px;
  }
`;

const SidebarItem = styled(Link)`
  font-weight: 500;
  font-size: 18px;
  color: ${props => (props.active ? '#6FFFB0' : '#ffffff')};
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 40px;
  }
  & > div {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  & > svg {
    margin-right: 15px;
    min-width: 24px;
  }
`;

const BottomItems = styled.div`
  margin-top: auto;
`;

export { Container, SidebarItem, BottomItems };
