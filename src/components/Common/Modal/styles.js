import styled from 'styled-components';

const Overlay = styled.div`
  position: absolute;
  height: calc(100% - 40px);
  width: calc(100% - 40px);
  padding: 20px;
  top: 0;
  left: 0;
  background: rgba(0,0,0,.05);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0,0,0,.15);
  border-radius: 5px;
`;

const Header = styled.div`
  padding: 20px;
  font-size: 24px;
  font-weight: 500;
  border-bottom: 1px solid #efefef;
`;

const Content = styled.div`
  padding: 20px;
`;

const Footer = styled.div`
  padding: 20px;
  border-top: 1px solid #efefef;
`;

export {
  Overlay, Container, Header, Content, Footer,
};
