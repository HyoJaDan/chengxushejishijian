import styled from 'styled-components';

interface IValue {
  value: string;
}
interface IClick {
  clicked: string;
}
export default function SettingPage({ clicked }: IClick) {
  const skills: IValue[] = [
    { value: 'HTML' },
    { value: 'CSS' },
    { value: 'Javascript' },
    { value: 'Typescript' },
    { value: 'React' },
    { value: 'IOS개발' },
    { value: '안드로이드 개발' },
    { value: 'DevOps' },
    { value: '보안' },
    { value: '블록체인 개발' },
  ];
  const skill = skills.map(({ value }, index) => {
    const id = `skill_${index}`;
    return (
      <Hello key={id}>
        <Text>{value}</Text>
      </Hello>
    );
  });
  return (
    <Wrapper>
      <Header>사용 가능한 스킬</Header>
      <Content>{skill}</Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Header = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  color: #1f1f1f;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #d5d5d5;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 10px;
`;
const Text = styled.div`
  margin-left: 15px;
`;

const Hello = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.1s ease-out;
  &:hover {
    background-color: #d5d5d5;
    /* transform: scale(1.1) */
  }
`;
