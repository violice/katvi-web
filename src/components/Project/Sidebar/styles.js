import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  width: 48px;
  background-color: #7D4CDB;
  padding: 16px;
  display: flex;
  flex-direction: column;
  & > a:not(:last-child) {
    margin-bottom: 30px;
  }
  & > a:first-child {
    margin-bottom: 60px;
  }
`;

const Thumb = styled(Link)`
  width: 48px;
  min-width: 48px;
  height: 48px;
  background-color: ${props => (props.active ? '#6FFFB0' : '#ffffff')};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 24px;
  color: #7D4CDB;
`;

const BottomItems = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  & > a:not(:last-child) {
    margin-bottom: 20px;
  }
`;

const Right = styled.div`
  width: 200px;
  background-color: #f8f8f8;
  padding: 25px;
  display: flex;
  flex-direction: column;
  & > div:nth-child(2) {
    margin: -10px -10px 50px -10px;
  }
`;

const ProjectHeader = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 50px;
  color: #000000;
  & > svg {
    margin-right: 5px;
    min-width: 24px;
  }
`;

const SidebarItem = styled(Link)`
  font-weight: 500;
  font-size: 18px;
  color: ${props => (props.active ? '#7D4CDB' : '#000000')};
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  &:nth-child(5) {
    margin-bottom: 50px;
  }
  & > svg {
    margin-right: 15px;
  }
`;

export {
  Container,
  Left,
  Thumb,
  BottomItems,
  Right,
  ProjectHeader,
  SidebarItem,
};
