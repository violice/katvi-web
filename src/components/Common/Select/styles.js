import styled from 'styled-components';

const Container = styled.div`
  position: relative;
`;

const Value = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
  & > svg:first-child {
    margin-right: 10px;
  }
  & > svg:last-child {
    margin: 0 0 0 auto;
  }
`;

const Label = styled.span`
  font-weight: 500;
  font-size: 18px;
  margin-right: 15px;
`;

const Menu = styled.div`
  position: absolute;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0,0,0,.15);
  border-radius: 5px;
  z-index: 1;
`;

const MenuItem = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  & > svg:first-child {
    margin-right: 15px;
    min-width: 24px;
  }
  &:hover {
    cursor: pointer;
    background-color: #f2f2f2;
  }
`;

export {
  Container, Value, Label, Menu, MenuItem,
};
