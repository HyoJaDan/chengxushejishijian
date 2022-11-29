import { userData, userData2 } from '~/recoils/user-info/atoms';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

interface ITag {
  tag: string;
}
const OutputTags = ({ tag }: ITag) => {
  let output;
  const data = useRecoilValue(userData);
  const data2 = useRecoilValue(userData2);

  if (tag === 'skills') output = data2.skill;
  else if (tag === 'interests') output = data.userInterest;
  else if (tag === 'tags') output = data2.tag;
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
