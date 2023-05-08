import { useNavigate, useParams } from '@remix-run/react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { myPageId } from '~/data/my-page/mypage-id';
import {
  getProblemDetail,
  getProblemDetailTags,
} from '~/data/problem/get-problem';
import { Banner } from './banner';

import { Comment } from './comment';
import { MainContent } from './main-content';
import { SimilerTraining } from './similer-problem';
import { WaitAnswer } from './waiting-solution-box';

export const ProblemMain = () => {
  const params = useParams<string>();
  const problemData = useRecoilValue(getProblemDetail(params.id));
  const hashTags = useRecoilValue(getProblemDetailTags(params.id as string));
  const navigate = useNavigate();
  const setMyPageId = useSetRecoilState(myPageId);
  return (
    <Wrapper>
      <FlexBox>
        <MainContent problemData={problemData} hashTags={hashTags} />
        <WaitAnswer id={params.id as string} />
        <SimilerTraining id={problemData.lessonCategory.id} />
        <Comment
          problemId={params.id as string}
          navigate={navigate}
          setMyPageId={setMyPageId}
        />
      </FlexBox>
      <Banner
        isBookmark={problemData.isBookmark as boolean}
        id={params.id as string}
      />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  max-width: 1256px;
  margin: 0 auto 50px auto;
  padding-top: 67px;
  display: flex;
  gap: 38px;
`;
const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
