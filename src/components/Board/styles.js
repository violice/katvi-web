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
  height: 100%;
  overflow: auto;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100%;
  background-color: #f8f8f8;
  border-radius: 5px;
  &:not(:last-child) {
    margin-right: 10px;
  }
  margin-bottom: 10px;
`;

const ColumnHeader = styled.div`
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  padding: 20px 15px;
  font-weight: 500;
  font-size: 24px;
  color: #000000;
  min-width: 250px;
  margin-bottom: 20px;
  background-color: #ffffff;
  margin: 10px;
  display: flex;
  justify-content: space-between;
`;

const ColumnContent = styled.div`
  flex: 1;
  max-height: 100%;
  overflow-y: auto;
  padding: 10px;
  & > div:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export {
  Container,
  Header,
  Content,
  Column,
  ColumnHeader,
  ColumnContent,
};
