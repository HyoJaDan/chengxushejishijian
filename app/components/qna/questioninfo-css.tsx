import styled from 'styled-components';

export const OutputQuestionInfo = ({ value, isMain }) => {
  return (
    <Footer isMain={isMain}>
      <Answer>답변</Answer>
      <NumOfAnswers>{value.numOfAnswers}</NumOfAnswers>
      <Border />
      <NickName>{value.nickName}</NickName>
      <Border />
      <Others>
        <div>조회수</div>
        <div>{value.views}</div>
        <div>{value.date}</div>
      </Others>
    </Footer>
  );
};

const Footer = styled.div<{ isMain: boolean }>`
  display: flex;
  gap: 8px;
  ${({ isMain }) => isMain && `margin: 24px;`}
`;
const Answer = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 140%;
  /* identical to box height, or 20px */

  /* grayscale/700 */

  color: #787573;
`;
const NumOfAnswers = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 140%;
  /* identical to box height, or 20px */

  /* Secondary/Red */

  color: #f5564c;
`;
const Border = styled.div`
  border: 1px solid #dddad7;
`;
const NickName = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 140%;
  /* identical to box height, or 20px */

  /* grayscale/700 */

  color: #787573;
`;
const Others = styled.div`
  display: flex;
  gap: 8px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  /* identical to box height, or 20px */

  /* grayscale/600 */

  color: #959290;
`;
