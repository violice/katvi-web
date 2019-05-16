import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Logo, Button } from 'components/Common';

import hero from 'images/hero.svg';
import workflow from 'images/workflow.svg';
import zeroConfiguration from 'images/zeroConfiguration.svg';
import powerAndCustomizable from 'images/powerAndCustomizable.svg';
import createReports from 'images/createReports.svg';
import projectDocumentation from 'images/projectDocumentation.svg';
import react from 'images/react.svg';
import around from 'images/around.svg';

import { LoginModal, RegistrationModal } from './Modals';
import {
  Container,
  Header,
  StyledLink,
  Hero,
  HeroContent,
  HeroText,
  Workflow,
  WorkflowContent,
  WorkflowHeader,
  WorkflowText,
  Features,
  FeaturesHeader,
  Feature,
  FeatureContent,
  FeatureHeader,
  FeatureText,
  Technologies,
  TechnologiesContent,
  TechnologiesHeader,
  Footer,
  Copyright,
} from './styles';

const FEATURES = [
  {
    header: 'Zero configuration',
    text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    image: zeroConfiguration,
    alt: 'zeroConfiguration',
  },
  {
    header: 'Powerful and customizable',
    text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    image: powerAndCustomizable,
    alt: 'powerAndCustomizable',
  },
  {
    header: 'Create reports',
    text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    image: createReports,
    alt: 'createReports',
  },
  {
    header: 'Project documentation',
    text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    image: projectDocumentation,
    alt: 'projectDocumentation',
  },
];

const Main = ({ location: { pathname }, history: { replace } }) => (
  <div style={{ overflow: 'auto', height: '100%' }}>
    <Header>
      <Container>
        <Link to="/">
          <Logo />
        </Link>
        {document.cookie.includes('katvi-token')
          ? <StyledLink to="/secure/dashboard">Dashboard</StyledLink>
          : <StyledLink to="/login">Log In / Sign Up</StyledLink>
        }
      </Container>
    </Header>
    <Hero>
      <Container>
        <HeroContent>
          <HeroText>
          Excellent solution for project management in large and small teams
          </HeroText>
          <Link to="/registration">
            <Button>Try now</Button>
          </Link>
        </HeroContent>
        <img src={hero} alt="hero" />
      </Container>
    </Hero>
    <Workflow>
      <Container>
        <img src={workflow} alt="workflow" />
        <WorkflowContent>
          <WorkflowHeader>Set up your workflow now and got a lot of benefits</WorkflowHeader>
          <WorkflowText>
            Use Katwi the way your team works best.
            <br />
            We’ve got the flexibility & features to fit any team’s style.
          </WorkflowText>
        </WorkflowContent>
      </Container>
    </Workflow>
    <Features>
      <FeaturesHeader>Features</FeaturesHeader>
      {FEATURES.map(({
        header, text, image, alt,
      }, index) => (
        <Feature index={index} key={alt}>
          <FeatureContent>
            <FeatureHeader>
              {header}
            </FeatureHeader>
            <FeatureText>
              {text}
            </FeatureText>
          </FeatureContent>
          <img src={image} alt={alt} />
        </Feature>
      ))}
    </Features>
    <Technologies>
      <img src={react} alt="react" />
      <TechnologiesContent>
        <TechnologiesHeader>
            Using modern technologies,
            we provide an opportunity for remote
            teams to work as one
        </TechnologiesHeader>
        <Link to="/registration">
          <Button>Try now</Button>
        </Link>
      </TechnologiesContent>
      <img src={around} alt="around" />
    </Technologies>
    <Footer>
      <Link to="/">
        <Logo />
      </Link>
      <Copyright>© Copyright 2019. All rights reserved.</Copyright>
    </Footer>
    <LoginModal opened={pathname.includes('login')} onClose={() => replace('/')} />
    <RegistrationModal opened={pathname.includes('registration')} onClose={() => replace('/')} />
  </div>
);

Main.propTypes = {
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default React.memo(Main);
