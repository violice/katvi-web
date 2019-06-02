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

const Field = styled.div`
  margin-bottom: 10px;
`;

const LargeLabel = styled.div`
  margin-left: 10px;
  font-size: 16px;
  font-weight: 600;
  color: #333333;
  line-height: 32px;
`;

const Label = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #777777;
  line-height: 32px;
`;

const Tag = styled.div`
  padding: 5px 12px;
  font-weight: 500;
  font-size: 14px;
  background-color: #f2f2f2;
  border-radius: 14px;
  display: inline-flex;
`;

const Author = styled.div`
  display: flex;
  align-items: center;
`;

const Member = styled.div`
  height: 24px;
  width: 24px;
  border-radius: 12px;
  background-color: #f2f2f2;
  display: inline-flex;
  margin-right: 10px;
`;

const Date = styled.div`
  font-size: 12px;
  color: #333333;
  line-height: 20px;
`;

export {
  Container,
  Left,
  Right,
  Field,
  LargeLabel,
  Label,
  Tag,
  Author,
  Member,
  Date,
};
