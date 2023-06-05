import { useNavigate, useParams } from '@remix-run/react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import {
  getProblemDetail,
  getProblemDetailTags,
} from '~/data/problem/get-problem-detail';
import { ProblemBanner } from './banner';

import { Comment } from './comment';
import { ProblemMainContent } from './main-content';
import { OtherSolution } from './other-solution';

import { SimilerTraining } from './similer-training';
import { WaitAnswer } from './waiting-solution-box';

export const ProblemMain = () => {
  const params = useParams<string>();
  const problemData = useRecoilValue(getProblemDetail(params.id));
  const hashTags = useRecoilValue(getProblemDetailTags(params.id as string));
  const navigate = useNavigate();
  return (
    <Wrapper>
      <FlexBox>
        <ProblemMainContent problemData={problemData} hashTags={hashTags} />
        <WaitAnswer id={params.id as string} />
        <SimilerTraining
          id={problemData.lessonCategory.id}
          paramsId={params.id}
        />
        {/* <Temp id={problemData.lessonCategory.id} paramsId={params.id} /> */}
        <OtherSolution id={params.id} />
        <Comment problemId={params.id as string} navigate={navigate} />
      </FlexBox>
      <ProblemBanner
        isBookmark={problemData.isBookmark as boolean}
        id={params.id as string}
      />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  max-width: 1256px;
  margin: 0px auto;
  padding: 40px 0px;
  display: flex;
  gap: 38px;
`;
const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 1149px;
`;
