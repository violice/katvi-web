import styled from 'styled-components';

const TextArea = styled.textarea`
  font-family: 'Montserrat';
  font-size: 24px;
  font-weight: 400;
  border: none;
  outline: none;
  padding: 5px 10px;
  border-bottom: 3px solid #efefef;
  &:placeholder {
    color: #999999;
  }
`;

export { TextArea };
