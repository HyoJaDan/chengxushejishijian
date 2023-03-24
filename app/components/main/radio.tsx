import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { categoryId } from '~/data/recoils/main/category';

interface radioName {
  en: string;
  kor: string;
}

export default function Radios() {
  const name: radioName[] = [
    { en: 'lessonSolutions', kor: '제출 많은 순' },
    { en: 'createdAt', kor: '최신 순' },
    { en: 'lessonLikes', kor: '공감 순' },
    { en: 'lessonComments', kor: '댓글 순' },
  ];

  const [selectData, setSelectData] = useRecoilState(categoryId);

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

  return <Wrapper>{outputRadios}</Wrapper>;
}
const Wrapper = styled.div`
  max-width: 1256px;
  margin: auto;
  display: flex;
  gap: 24px;
`;
const Radio = styled.input``;
const Label = styled.label`
  display: flex;
  gap: 8px;
`;
