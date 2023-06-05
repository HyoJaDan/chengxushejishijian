import { useNavigate, useParams } from '@remix-run/react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { OtherSolution } from '~/components/problem/other-solution';
import { getSolutionDetail } from '~/data/solution/get-solution-detail';
import { SolutionBanner } from './banner';
import { Comment } from './comment';
import { SolutionMainContent } from './main-content';

export const SolutionMain = () => {
  const params = useParams<string>();
  const navigate = useNavigate();
  /* const problemData = useRecoilValue(getProblemDetail(params.id)); */
  /* const hashTags = useRecoilValue(getProblemDetailTags(params.id as string)); */
  const solutionData = useRecoilValue(getSolutionDetail(params.id as string));

  return (
    <Wrapper>
      <FlexBox>
        <SolutionMainContent
          solutionData={solutionData}
          navigate={navigate} /* hashTags={hashTags} */
        />
        <OtherSolution id={solutionData.lessonId} />
        <Comment solutionId={params.id as string} navigate={navigate} />
      </FlexBox>
      <SolutionBanner
        navigate={navigate}
        lessonId={solutionData.lessonId}
        isBookmark={solutionData.isLike as boolean}
        id={params.id as string}
      />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  max-width: 1256px;
  margin: 0 auto;
  padding: 40px 0;
  display: flex;
  gap: 38px;
`;
const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 1149px;
`;
