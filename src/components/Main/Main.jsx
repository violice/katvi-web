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
    header: 'Стартуйте легко',
    text: 'Начало работы над новый проектом не требует сложной настройки. Просто создайте проект, добавьте пару колонок и пригласите участников.',
    image: zeroConfiguration,
    alt: 'zeroConfiguration',
  },
  {
    header: 'Настраивайте уникальный рабочий процесс',
    text: 'Используя мощные инструменты настройте уникальный рабочий процесс для своей команды.',
    image: powerAndCustomizable,
    alt: 'powerAndCustomizable',
  },
  {
    header: 'Создавайте отчеты',
    text: 'Повышайте производительность команды, опираясь на визуальные данные, доступные ее членам в реальном времени.',
    image: createReports,
    alt: 'createReports',
  },
  {
    header: 'Ведите документацию',
    text: 'Добавляейте документацию в проект. Всего пару щелчков и всей команде доступны требования к проекту и описание планов.',
    image: projectDocumentation,
    alt: 'projectDocumentation',
  },
];

const Main = ({
  pathname, replace, loading, request,
}) => {
  const ModalProps = {
    loading,
    request,
    onClose: () => replace('/'),
  };
  return (
    <div style={{ overflow: 'auto', height: '100%' }}>
      <Header>
        <Container>
          <Link to="/">
            <Logo />
          </Link>
          {localStorage.getItem('token')
            ? <StyledLink to="/secure/dashboard">Рабочий стол</StyledLink>
            : <StyledLink to="/login">Войти / Зарегистироваться</StyledLink>
          }
        </Container>
      </Header>
      <Hero>
        <Container>
          <HeroContent>
            <HeroText>
              Отличное решение для управления проектами в больших и малых командах
            </HeroText>
            <Link to="/registration">
              <Button color="#7D4CDB" background="#6FFFB0">
                Попробовать
              </Button>
            </Link>
          </HeroContent>
          <img src={hero} alt="hero" />
        </Container>
      </Hero>
      <Workflow>
        <Container>
          <img src={workflow} alt="workflow" />
          <WorkflowContent>
            <WorkflowHeader>
              Настройте свой рабочий процесс сейчас и получите массу преимуществ
            </WorkflowHeader>
            <WorkflowText>
              Используйте katvi для улучшения и оптимизации командной работы.
              <br />
              Наша гибкость и особенности, позволяют соответствовать стилю любой команды.
            </WorkflowText>
          </WorkflowContent>
        </Container>
      </Workflow>
      <Features>
        <FeaturesHeader>Используйте возможности katvi</FeaturesHeader>
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
            Используя современные технологии мы позволяем
            удаленным командам работать как единое целое
          </TechnologiesHeader>
          <Link to="/registration">
            <Button color="#7D4CDB" background="#6FFFB0">
              Попробовать
            </Button>
          </Link>
        </TechnologiesContent>
        <img src={around} alt="around" />
      </Technologies>
      <Footer>
        <Link to="/">
          <Logo />
        </Link>
        <Copyright>
          © katvi 2019. Все права защищены.
        </Copyright>
      </Footer>
      <LoginModal opened={pathname.includes('login')} {...ModalProps} />
      <RegistrationModal opened={pathname.includes('registration')} {...ModalProps} />
    </div>
  );
};

Main.propTypes = {
  pathname: PropTypes.string.isRequired,
  replace: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  request: PropTypes.func.isRequired,
};

export default React.memo(Main);
