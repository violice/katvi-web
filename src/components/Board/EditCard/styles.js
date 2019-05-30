import styled from 'styled-components';

const Container = styled.div`
  width: 750px;
  display: flex;
`;

const Left = styled.div`
  flex: 1;
`;

const Right = styled.div`
  flex: 0.5;
  margin-left: 20px;
`;

export { Container, Left, Right };
