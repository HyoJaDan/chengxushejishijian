/* eslint-disable no-restricted-syntax */
import { userData } from '~/recoils/user-info/atoms';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

interface tagProps {
  tag: string;
}
const OutputTags = ({ tag }: tagProps) => {
  const output = [];
  const data = useRecoilValue(userData);

  if (tag === 'skills') {
    for (const key in data.skill) {
      if (data.skill[key].isTrue === true) output.push(data.skill[key].value);
    }
  } else if (tag === 'interests')
    for (const key in data.userInterest) {
      if (data.userInterest[key].isTrue === true)
        output.push(data.userInterest[key].value);
    }
  else if (tag === 'tags') {
    for (const key in data.tag) {
      if (data.tag[key].isTrue === true) output.push(data.tag[key].value);
    }
  }
  return (
    <Exist>
      {output?.map((outputs) => (
        <Tag key={`${outputs}`}>{outputs}</Tag>
      ))}
    </Exist>
  );
};
const Exist = styled.div`
  display: flex;
  gap: 8px;
  flex-basis: 80%;
  overflow-x: auto;
  white-space: nowrap;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const Tag = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 10px;
  gap: 8px;

  height: 28px;

  background: rgba(200, 200, 200, 0.05);
  border: 1px solid #4d4d4d;
  border-radius: 14px;

  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 100%;
  /* identical to box height, or 12px */
  cursor: pointer;
  color: #4d4d4d;

  &:hover {
    background: rgba(36, 120, 246, 0.13);
    border: 1px solid #2478f6;
    color: #2478f6;
  }
`;
export default OutputTags;
