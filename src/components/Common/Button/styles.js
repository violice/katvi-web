import styled from 'styled-components';

const BaseButton = styled.button`
  background-color: #6FFFB0;
  color: #7D4CDB;
  font-family: 'Montserrat';
  font-size: 24px;
  font-weight: 600;
  border: none;
  outline: none;
  border-radius: 30px;
  height: 60px;
  padding: 0px 30px;
  opacity: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  & > div {
    margin-right: 5px;
  }
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export { BaseButton };
