/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import styled from 'styled-components';
import type { IValue } from '~/recoils/user-info/atoms';
import { userData } from '~/recoils/user-info/atoms';
import { useRecoilState } from 'recoil';

interface IClick {
  clicked: string;
}

export default function SettingPage({ clicked }: IClick) {
  const [data, setData] = useRecoilState(userData);
  let output: IValue[];
  if (clicked === 'skills') output = [...data.skill];
  else if (clicked === 'interests') output = data.userInterest;
  else output = data.tag;

  const skill = output.map(({ value, isTrue }, index) => {
    const id = `skill_${index}`;
    return (
      <Div
        key={id}
        className={isTrue ? 'FalseTag' : 'TrueTag'}
        onClick={() => {
          const Idx = output.findIndex((v) => v.value === value);
          if (clicked === 'skills')
            setData({
              ...data,
              skill: [
                ...output.slice(0, Idx),
                {
                  value: data.skill[Idx].value,
                  isTrue: !data.skill[Idx].isTrue,
                },
                ...output.slice(Idx + 1),
              ],
            });
          else if (clicked === 'interests')
            setData({
              ...data,
              userInterest: [
                ...output.slice(0, Idx),
                {
                  value: data.userInterest[Idx].value,
                  isTrue: !data.userInterest[Idx].isTrue,
                },
                ...output.slice(Idx + 1),
              ],
            });
          else if (clicked === 'tags')
            setData({
              ...data,
              tag: [
                ...output.slice(0, Idx),
                {
                  value: data.tag[Idx].value,
                  isTrue: !data.tag[Idx].isTrue,
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

const Div = styled.div``;
