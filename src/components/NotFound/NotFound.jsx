import React from 'react';

import { Logo } from 'components/Common';

import notFound from 'images/notFound.svg';

import {
  Container,
  Header,
  Image,
  Footer,
} from './styles';

const NotFound = () => (
  <Container>
    <Header>Page Not Found</Header>
    <Image src={notFound} alt="notFound" />
    <Footer to="/">
        Back to
      <Logo />
    </Footer>
  </Container>
);

export default NotFound;
