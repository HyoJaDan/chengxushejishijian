import { useNavigate, useParams } from '@remix-run/react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { getProblemDetailTags } from '~/data/problem/get-problem-detail';

import { getSolutionDetail } from '~/data/solution/get-solution-detail';
import { Comment } from './comment';
import { SolutionMainContent } from './main-content';

export const SolutionMain = () => {
  const params = useParams<string>();
  const navigate = useNavigate();
  /* const problemData = useRecoilValue(getProblemDetail(params.id)); */
  const hashTags = useRecoilValue(getProblemDetailTags(params.id as string));
  const solutionData = useRecoilValue(getSolutionDetail(params.id as string));
  console.log(solutionData, 'solutionData');
  /* console.log(problemData, 'problemData'); */
  return (
    <Wrapper>
      <FlexBox>
        <SolutionMainContent solutionData={solutionData} hashTags={hashTags} />
        <Comment solutionId={params.id as string} navigate={navigate} />
      </FlexBox>
      {/* <Banner
        isBookmark={problemData.isBookmark as boolean}
        id={params.id as string}
      /> */}
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
  gap: 40px;
`;
