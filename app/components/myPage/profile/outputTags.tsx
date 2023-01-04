import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { userData } from '~/recoils/user-info/atoms';

interface tagProps {
  name: string;
  tag: 'skill' | 'interest' | 'tag';
}
const OutputTags = ({ name, tag }: tagProps) => {
  const data = useRecoilValue(userData);
  const output = data[tag].filter(
    (idx: { isTrue: boolean }) => idx.isTrue === true
  );
  return (
    <Wrapper>
      <Font>{name}</Font>
      <Exist>
        {output?.map(({ value }) => (
          <Tag key={`${value}`}>{value}</Tag>
        ))}
      </Exist>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
const Font = styled.div`
  flex-basis: 20%;
  flex-shrink: 1;
  font-style: normal;
  font-size: 14px;
  line-height: 140%;
  color: #31302f;
  font-weight: 700;
`;
const Exist = styled.div`
  flex-basis: 80%;
  flex-shrink: 2;
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
