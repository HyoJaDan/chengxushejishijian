import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { db } from '~/config/firebase.client';
import { heightestProblemNumber } from '~/data/heightNumber';
import type { IProblems } from '~/models/problem-and-solution/problem/problems';
import { TrainBox } from '../problem/problem-box';

export const Training = () => {
  const [problem, setProblem] = useState([]);
  const setNumber = useSetRecoilState<number>(heightestProblemNumber);
  const problemClooectionRef = collection(db, 'problems');
  useEffect(() => {
    const getProblemList = async () => {
      try {
        const data = await getDocs(problemClooectionRef);
        const filteredData = data.docs.map((doc) => {
          return {
            ...doc.data(),
            id: doc.id,
          };
        });

        setNumber(filteredData.length);
        setProblem(filteredData);
      } catch (err) {
        console.error(err);
      }
    };
    getProblemList();
  }, []);

  const problemList = problem.map((data: IProblems, index: number) => {
    return TrainBox(data, index, 1256);
  });
  return <Wrapper>{problemList}</Wrapper>;
};
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 24px;
  max-width: 1256px;
  margin: 28px auto;
  padding-bottom: 40px;
`;
