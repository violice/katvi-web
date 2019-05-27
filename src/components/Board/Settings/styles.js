import styled from 'styled-components';

const Container = styled.div`
  width: 600px;
  & > form { 
    display: flex;
    flex-direction: column;
    & > div {
      margin-bottom: 20px;
    }
  }
`;

const ColumnsHeader = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 20px;
`;

const Column = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  & > span {
    flex: 1;
  }
  & > svg {
    margin-left: 10px;
    :hover {
      cursor: pointer;
    }
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  & > button:not(:last-child) {
    margin-right: 10px;
  }
`;

export {
  Container, ColumnsHeader, Column, Footer,
};
