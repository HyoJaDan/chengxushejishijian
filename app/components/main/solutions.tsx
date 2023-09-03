import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { db } from '~/config/firebase.client';
import { heightestSolutionNumber } from '~/data/heightNumber';
import type { ISolutions } from '~/models/solutions';
import { SolutionBox } from '../solutioin/main-page/solution-box';

export const Solution = () => {
  const [solution, setSolution] = useState<ISolutions[]>([]);
  const problemClooectionRef = collection(db, 'solutions');
  const setNumber = useSetRecoilState<number>(heightestSolutionNumber);
  const getSolutionList = async () => {
    try {
      const data = await getDocs(problemClooectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setNumber(filteredData.length);
      setSolution(filteredData);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getSolutionList();
  }, []);

  const solutionList = solution.map((data, index) => {
    // eslint-disable-next-line no-new-wrappers
    const str = new String(data.description);
    console.log(data.description);
    return SolutionBox(data, index, 1256);
  });
  return <Wrapper>{solutionList}</Wrapper>;
};
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 24px;
  max-width: 1256px;
  margin: 28px auto;
  padding-bottom: 40px;
`;
