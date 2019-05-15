import styled from 'styled-components';

const Container = styled.div``;

const BaseInput = styled.input`
  font-family: 'Montserrat';
  font-size: 24px;
  font-weight: 400;
  border: none;
  outline: none;
  padding: 5px 10px;
  border-bottom: 3px solid #efefef;
  outline-style: none;
  margin-bottom: 5px;
  &:placeholder {
    color: #999999;
  }
`;

const Error = styled.div`
  text-align: center;
  color: #FF4040;
`;

export { Container, BaseInput, Error };
