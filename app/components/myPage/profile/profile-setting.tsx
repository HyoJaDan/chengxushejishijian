import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import type { IValue } from '~/recoils/user-info/atoms';
import { userData } from '~/recoils/user-info/atoms';

interface clickProps {
  clicked: string;
}

export default function SettingPage({ clicked }: clickProps) {
  const [data, setData] = useRecoilState(userData);

  const output: IValue[] = data[clicked];
  const skill = output.map(({ value, isTrue }, index) => {
    const id = `skill_${index}`;
    return (
      <Div
        key={id}
        className={isTrue ? 'FalseTag' : 'TrueTag'}
        onClick={() => {
          const Idx = output.findIndex((v) => v.value === value);
          setData({
            ...data,
            [clicked]: [
              ...output.slice(0, Idx),
              {
                value: data[clicked][Idx].value,
                isTrue: !data[clicked][Idx].isTrue,
              },
              ...output.slice(Idx + 1),
            ],
          });
        }}
      >
        <Text>{value}</Text>
      </Div>
    );
  });
  return (
    <Wrapper>
      <Header>사용 가능한 {clicked}</Header>
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

const Div = styled.div``;
