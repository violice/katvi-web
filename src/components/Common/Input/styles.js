import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const BaseInput = styled.input`
  font-family: 'Montserrat';
  font-weight: 400;
  border: none;
  outline: none;
  padding: 5px 10px;
  border-bottom: 3px solid #efefef;
  outline-style: none;
  margin-bottom: 5px;

  ${(props) => {
    switch (props.size) {
      case 'medium':
        return css`
          font-size: 24px;
        `;
      case 'small':
        return css`
          font-size: 18px;
        `;
      default:
        return null;
    }
  }}
  
  &:placeholder {
    color: #999999;
  }
`;

const Error = styled.div`
  text-align: center;
  color: #FF4040;
`;

export { Container, BaseInput, Error };
