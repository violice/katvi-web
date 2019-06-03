import styled from 'styled-components';

const Container = styled.table`
  position: relative;
  width: 100%;
  height: 100%;
  flex: 1;
  border-spacing: 0px;
`;

const Header = styled.thead``;

const HeaderCell = styled.th`
  font-weight: 500;
  line-height: 24px;
  padding: 5px;
  border-bottom: 2px solid #f2f2f2;

  width: ${props => props.width || 'auto'};
  vertical-align: ${props => props.verticalAlign || 'middle'};
  text-align: ${props => props.align || 'left'}
`;

const Body = styled.tbody`
  display: block;
  width: 100%;
  max-height: calc(100% - 44px);
  overflow: auto;
`;

const BodyCell = styled.td`
  font-weight: 400;
  line-height: 24px;
  padding: 5px;
  
  width: ${props => props.width || 'auto'};
  vertical-align: ${props => props.verticalAlign || 'middle'};
  text-align: ${props => props.align || 'left'}
`;

const Row = styled.tr`
  display: table;
  width: 100%;
  table-layout: fixed;
`;

export {
  Container,
  Header,
  HeaderCell,
  Body,
  BodyCell,
  Row,
};
