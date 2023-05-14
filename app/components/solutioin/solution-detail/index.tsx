import { useNavigate, useParams } from '@remix-run/react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { getProblemDetailTags } from '~/data/problem/get-problem-detail';

import { getSolutionDetail } from '~/data/solution/get-solution-detail';
import { Comment } from './comment';
import { SolutionMainContent } from './main-content';
import { SolutionBanner } from './solution-banner';

export const SolutionMain = () => {
  const params = useParams<string>();
  const navigate = useNavigate();
  const hashTags = useRecoilValue(getProblemDetailTags(params.id as string));
  const solutionData = useRecoilValue(getSolutionDetail(params.id as string));
  return (
    <Wrapper>
      <FlexBox>
        <SolutionMainContent solutionData={solutionData} hashTags={hashTags} />
        <Comment solutionId={params.id as string} navigate={navigate} />
      </FlexBox>
      <SolutionBanner
        isBookmark={solutionData.isLike as boolean}
        thumbnail={solutionData.thumbnail}
        id={params.id as string}
        navigate={navigate}
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
