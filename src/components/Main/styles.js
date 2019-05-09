import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Header = styled.div`
  padding: 30px 0px;
`;

const StyledLink = styled(Link)`
  font-weight: 500;
  font-size: 24px;
  &:hover {
    opacity: 0.8;
  }
`;

const Hero = styled.div`
  padding: 100px 0px;
`;

const HeroContent = styled.div``;

const HeroText = styled.div`
  font-weight: 600;
  font-size: 36px;
  margin-bottom: 50px;
  max-width: 455px;
`;

const Workflow = styled.div`
  background-color: #F2F2F2;
  padding: 70px 0px;
`;

const WorkflowContent = styled.div`
  max-width: 680px;
`;

const WorkflowHeader = styled.div`
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 40px;
`;

const WorkflowText = styled.div`
  font-size: 24px;
`;

const Features = styled.div``;

const FeaturesHeader = styled.div`
  font-weight: 600;
  font-size: 36px;
  padding: 120px 0px;
  text-align: center;
`;

const Feature = styled.div`
  max-width: 950px;
  margin: 0 auto;
  padding: 50px;
  display: flex;
  flex-direction: ${props => (props.index % 2 === 0 ? 'row' : 'row-reverse')}
  align-items: center;
  justify-content: space-between;
`;

const FeatureContent = styled.div`
  max-width: 400px;
`;

const FeatureHeader = styled.div`
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 30px;
`;

const FeatureText = styled.div`
  font-size: 24px;
`;

const Technologies = styled.div`
  background-color: #F2F2F2;
  padding: 70px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TechnologiesContent = styled.div`
  max-width: 710px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TechnologiesHeader = styled.div`
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 70px;
  text-align: center;
  padding: 0px 110px;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
`;

const Copyright = styled.div`
  font-weight: 500;
  font-size: 24px;
  text-align: center;
  margin-top: 40px;
`;

export {
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
};
