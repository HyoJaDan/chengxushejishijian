import styled from 'styled-components';

export const OutputQuestionInfo = ({ value, isMain }) => {
  return (
    <Footer isMain={isMain}>
      <Answer className='body3_SB'>답변</Answer>
      <NumOfAnswers className='body3_BD'>{value.numOfAnswers}</NumOfAnswers>
      <Border />
      <NickName className='body3_SB'>{value.nickName}</NickName>
      <Border />
      <Others className='body3_MD'>
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
  color: ${(prop) => prop.theme.color.grayScale.gray_700};
`;
const NumOfAnswers = styled.div`
  color: #f5564c;
`;
const Border = styled.div`
  border: 1px solid ${(prop) => prop.theme.color.grayScale.gray_300};
`;
const NickName = styled.div`
  color: ${(prop) => prop.theme.color.grayScale.gray_700};
`;
const Others = styled.div`
  display: flex;
  gap: 8px;
  color: ${(prop) => prop.theme.color.grayScale.gray_600};
`;
