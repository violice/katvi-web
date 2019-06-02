import styled from 'styled-components';

const Container = styled.div`
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0,0,0,.15);
  border-radius: 5px;
  padding: 30px;
  width: 730px;
  height: 400px;
`;

const Header = styled.div`
  font-weight: 500;
  font-size: 24px;
  margin-bottom: 30px;
`;

const HeaderRow = styled.div`
  display: flex;
  font-size: 16px;
  font-weight: 500;
  height: 32px;
  line-height: 32px;
  border-bottom: 2px solid #f2f2f2;
  & > div {
    min-width: 50px;
    margin-right: 10px;
    &:nth-child(2) {
      flex: 0.5;
    }
    &:nth-child(3) {
      flex: 1;
    }
  }
`;

const HeaderCell = styled.div``;

const BodyRow = styled.div`
  display: flex;
  & > div {
    min-width: 50px;
    margin-right: 10px;
    &:nth-child(2) {
      flex: 0.5;
    }
    &:nth-child(3) {
      flex: 1;
    }
  }
`;

const BodyCell = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 4px 0px;
  box-sizing: border-box;
  height: 32px;
  line-height: 24px;
`;

export {
  Container,
  Header,
  HeaderRow,
  HeaderCell,
  BodyRow,
  BodyCell,
};
