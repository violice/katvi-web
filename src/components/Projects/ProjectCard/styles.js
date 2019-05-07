import styled from 'styled-components';

const Container = styled.div`
  width: 340px;
  height: 230px;
  box-shadow: 0 0 10px rgba(0,0,0,.15);
  border-radius: 5px;
`;

const Top = styled.div`
  height: 110px;
  padding: 30px;
  background-color: #7D4CDB;
  border-radius: 5px 5px 0px 0px
  display: flex;
  align-items: center;
`;

const Image = styled.div`
  width: 64px;
  min-width: 64px;
  height: 64px;
  background-color: #C4C4C4;
  border-radius: 5px;
  margin-right: 25px;
`;

const Text = styled.div``;

const Header = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 20px;
`;

const Description = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
`;

const Bottom = styled.div`
  height: 60px;
`;

export {
  Container, Top, Image, Text, Header, Description, Bottom,
};
