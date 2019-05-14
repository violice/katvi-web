import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;

const Content = styled.div`
  width: calc(100% - 320px);
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export { Container, Content };
