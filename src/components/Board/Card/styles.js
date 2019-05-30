import styled from 'styled-components';

const Container = styled.div`
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  padding: 12px 12px 12px 16px;
  background-color: #ffffff;
  position: relative;
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 10px rgba(0,0,0,.25);
  }
`;

const Priority = styled.div`
  position: absolute;
  top: 5px;
  left: 5px;
  height: calc(100% - 10px);
  width: 3px;
  background: ${(props) => {
    switch (props.priority) {
      case 'Critical':
        return '#FF4040';
      case 'High':
        return '#FF4040';
      case 'Medium':
        return '#FFAA15';
      case 'Low':
        return '#00C781';
      default:
        return null;
    }
  }};
`;

const Top = styled.div`
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 20px;
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  & > svg {
    margin-right: 5px;
  }
`;

const Tag = styled.div`
  padding: 5px 12px;
  font-weight: 500;
  font-size: 14px;
  background-color: #f2f2f2;
  border-radius: 14px;
`;

const Member = styled.div`
  height: 24px;
  width: 24px;
  border-radius: 12px;
  background-color: #f2f2f2;
  margin: 0px 0px 0px auto;
`;

export {
  Container,
  Priority,
  Top,
  Bottom,
  Tag,
  Member,
};
