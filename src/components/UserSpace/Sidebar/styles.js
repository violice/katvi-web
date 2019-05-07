import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 200px;
  background-color: #7D4CDB;
  padding: 25px;
  display: flex;
  flex-direction: column;
  & > img {
    margin-bottom: 60px;
  }
`;

const SidebarItem = styled(Link)`
  font-weight: 500;
  font-size: 18px;
  color: #ffffff;
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 40px;
  }
  & > svg {
    margin-right: 15px;
  }
  ${props => props.active && css`
    color: #6FFFB0;
    & > svg > path {
      fill: #6FFFB0;
    }
  `}
`;

const BottomItems = styled.div`
  margin-top: auto;
`;

export { Container, SidebarItem, BottomItems };
