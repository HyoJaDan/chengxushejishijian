import { Link } from '@remix-run/react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { ProblemCategoryId } from '~/data/problem/get-problemList';

interface radioName {
  en: string;
  kor: string;
}

export default function ProblemRadio() {
  const name: radioName[] = [
    { en: 'createdAt', kor: '최신 순' },
    { en: 'lessonSolutions', kor: '제출 많은 순' },
    { en: 'lessonBookMarks', kor: '공감 순' },
    { en: 'lessonComments', kor: '댓글 순' },
  ];
  const [selectData, setSelectData] = useRecoilState(ProblemCategoryId);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: any) => {
    const nowValue = e.target.value;
    setSelectData(nowValue);
  };

  const outputRadios = name.map(({ en, kor }, index) => {
    const id = `radio_id_${index}`;
    return (
      <Label key={id}>
        <Radio
          type='radio'
          value={en}
          checked={selectData === en}
          onChange={handleChange}
        />
        {kor}
      </Label>
    );
  });

  return (
    <Wrapper>
      <RadioList>{outputRadios}</RadioList>
      <Setting className='body3_BD' to='/ask'>
        <SettingImg src='/icons/ask.svg' alt='' />
        <SettingFontBody3SB className='body3_SB'>물어보기</SettingFontBody3SB>
      </Setting>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  max-width: 1256px;
  margin: auto;
  display: flex;
  justify-content: space-between;
`;
const RadioList = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;
const Radio = styled.input``;
const Label = styled.label`
  display: flex;
  gap: 8px;
`;
const Setting = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px;
  gap: 6.5px;

  width: 107px;
  height: 45px;

  background-color: ${(prop) => prop.theme.color.primary.blue.blue_500};
  border-radius: 100px;

  &:hover {
    color: white;
  }
`;
const SettingImg = styled.img`
  width: 16px;
`;
const SettingFontBody3SB = styled.div`
  color: ${(prop) => prop.theme.color.basic.white};
`;
