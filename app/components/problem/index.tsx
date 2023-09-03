import { useNavigate, useParams } from '@remix-run/react';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { db } from '~/config/firebase.client';
import type { IProblem } from '~/models/problem-and-solution/problem/problem';
import type { IProblems } from '~/models/problem-and-solution/problem/problems';
import { ProblemBanner } from './banner';
import { ProblemMainContent } from './main-content';
import { SimilerTraining } from './similer-training';
import { WaitAnswer } from './waiting-solution-box';

export const ProblemMain = () => {
  const params = useParams<string>();
  const navigate = useNavigate();
  const [problem, setProblem] = useState<IProblems>();
  const [similerProblemList, setSimilerProblemList] = useState<IProblems[]>([]);
  const problemClooectionRef = collection(db, 'problems');
  let newData: IProblems[] = [];
  useEffect(() => {
    const getProblemList = async () => {
      try {
        const data = await getDocs(problemClooectionRef);

        let temp: IProblem;
        data.docs.map((doc) => {
          if (doc.data().problemId == params.id) {
            setProblem({ ...doc.data() });
            temp = doc.data();
          }
        });

        data.docs.map((doc) => {
          if (temp.categories === doc.data().categories) {
            newData = [...newData, doc.data()];
          }
        });
        setSimilerProblemList(newData);
      } catch (err) {
        console.error(err);
      }
    };
    getProblemList();
  }, []);

  if (problem !== undefined) {
    return (
      <Wrapper>
        <FlexBox>
          <ProblemMainContent problemData={problem} />
          <WaitAnswer id={params.id as string} />
          <SimilerTraining
            similerProblemList={similerProblemList}
            paramsId={params.id}
          />
          {/* <Temp id={problemData.lessonCategory.id} paramsId={params.id} />
        <OtherSolution id={params.id} />
        <Comment problemId={params.id as string} navigate={navigate} /> */}
        </FlexBox>
        <ProblemBanner id={params.id as string} />
      </Wrapper>
    );
  }
  return null;
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
