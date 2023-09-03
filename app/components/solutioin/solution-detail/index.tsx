import { useNavigate, useParams } from '@remix-run/react';
import styled from 'styled-components';

import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { OtherSolution } from '~/components/problem/other-solution';
import { db } from '~/config/firebase.client';
import type { ISolutionDetail } from '~/models/solution-detail';
import type { ISolutions } from '~/models/solutions';
import { SolutionBanner } from './banner';
import { SolutionMainContent } from './main-content';

export const SolutionMain = () => {
  const params = useParams<string>();
  const navigate = useNavigate();
  const [solution, setSolution] = useState<ISolutionDetail>();
  const solutionCollectionRef = collection(db, 'solutions');
  const [otherSolutions, setOtherSolution] = useState<ISolutions[]>([]);
  useEffect(() => {
    const getSolutionList = async () => {
      try {
        const solutionData = await getDocs(solutionCollectionRef);
        const filteredData = solutionData.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        const solutionDatas = filteredData.filter(
          (item) => item.solutionId == params.id
        );

        setSolution(solutionDatas[0]);

        const otherSolutionData = filteredData.filter(
          (item) => item.problemId == solutionDatas[0].problemId
        );
        setOtherSolution(otherSolutionData);
      } catch (err) {
        console.error(err);
      }
    };

    getSolutionList();
  }, []);
  if (solution !== undefined)
    return (
      <Wrapper>
        <FlexBox>
          <SolutionMainContent solutionData={solution} navigate={navigate} />
          <OtherSolution solutionList={otherSolutions} />
        </FlexBox>
        <SolutionBanner navigate={navigate} lessonId={solution.lessonId} />
      </Wrapper>
    );
  return null;
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
/* export const SolutionMain = () => {
  return null;
};
 */
