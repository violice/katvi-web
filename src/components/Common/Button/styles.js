import styled, { css } from 'styled-components';

const BaseButton = styled.button`
  background-color: ${props => props.background};
  color: ${props => props.color};
  font-family: 'Montserrat';
  font-weight: 600;
  border: none;
  outline: none;
  opacity: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) => {
    switch (props.size) {
      case 'medium':
        return css`
          border-radius: 30px;
          height: 60px;
          padding: 0px 30px;
          font-size: 24px;
          min-width: 120px;
        `;
      case 'small':
        return css`
          border-radius: 23px;
          height: 40px;
          padding: 0px 20px;
          font-size: 18px;
          min-width: 100px;
        `;
      default:
        return null;
    }
  }}

  & > div {
    margin-right: 5px;
  }
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export { BaseButton };
