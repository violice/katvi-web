import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;

const Content = styled.div`
  width: ${props => (props.sidebar ? 'calc(100% - 250px)' : '100%')};
  height: 100%;
`;

export { Container, Content };
