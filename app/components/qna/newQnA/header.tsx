/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-param-reassign */
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { getNewQnACategory } from '~/data/mock/qna/getNewQnACategory';
import type { IQuestionCategories } from '../../../data/qna/new-question/categories';
import { questionCategories } from '../../../data/qna/new-question/categories';

const Header = () => {
  const [newQuestionList, setnewQuestionList] =
    useRecoilState(questionCategories);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getCategory() {
      const newValue = await getNewQnACategory();
      setnewQuestionList(newQuestionList.concat(newValue));
      setLoading(false);
    }
    getCategory();
  }, []);

  const questionCategoryList = newQuestionList.map((value) => {
    const clicked = () => {
      const nextValue = JSON.parse(JSON.stringify(newQuestionList));
      nextValue.forEach((element: IQuestionCategories) => {
        element.isSelected = false;
        if (element.id === value.id) element.isSelected = true;
      });

      setnewQuestionList(nextValue);
    };
    const index = `index_${value.id}`;
    return (
      <List selected={value.isSelected} key={index} onClick={clicked}>
        {value.name}
      </List>
    );
  });
  const outputList = () => {
    if (loading) return <div>loading...</div>;
    return <Category>{questionCategoryList}</Category>;
  };
  return (
    <Wrapper>
      <Div>
        <HeaderText className='title4_BD'>새로운 질문</HeaderText>
        {outputList()}
      </Div>
    </Wrapper>
  );
};
export default Header;

const Wrapper = styled.div`
  gap: 24px;
`;
const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;
const HeaderText = styled.div`
  height: 32px;
  color: ${(prop) => prop.theme.color.grayScale.gray_900};
`;
const List = styled.div<{ selected: boolean }>`
  cursor: pointer;
  color: #a4a2a0;
  ${({ selected }) => selected && `color: #31302F;`};
`;
const Category = styled.div`
  display: flex;
  gap: 16px;
`;
