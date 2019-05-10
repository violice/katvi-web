import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  overflow: hidden;
`;

const Header = styled.div`
  font-size: 48px;
  font-weight: 500;
  margin: 50px;
`;

const Image = styled.img`
  max-height: calc(100% - 300px);
  max-width: calc(100% - 40px);
`;

const Footer = styled(Link)`
  margin: 50px;
  font-size: 36px;
  & > img {
    margin-left: 15px;
  }
`;


export {
  Container, Image, Header, Footer,
};
