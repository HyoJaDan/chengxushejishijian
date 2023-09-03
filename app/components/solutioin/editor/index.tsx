import { useParams } from '@remix-run/react';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { ClientOnly } from 'remix-utils';
import styled from 'styled-components';
import { Category } from '~/components/problem/problem-box';
import { db } from '~/config/firebase.client';
import type { IProblem } from '~/models/problem-and-solution/problem/problem';
import { CustomEditor } from './editor.client';

export const SolutionTraining = () => {
  const params = useParams<string>();
  const [problem, setProblem] = useState<IProblem>();
  const problemClooectionRef = collection(db, 'problems');
  useEffect(() => {
    const getProblemList = async () => {
      try {
        const data = await getDocs(problemClooectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        const temp = filteredData.filter((item) => item.problemId == params.id);
        setProblem(temp[0]);
      } catch (err) {
        console.error(err);
      }
    };
    getProblemList();
  }, []);

  return (
    <Wrapper>
      <Header>
        <Head>
          <Category className='caption1_SB'>{problem?.categories}</Category>
          <Titles>
            <Title className='title4_BD'>{problem?.title}</Title>
            <DateFontcaption1SB className='caption1_SB'>
              {problem?.createdAt}
            </DateFontcaption1SB>
          </Titles>
        </Head>
      </Header>
      <ClientOnly>{() => <CustomEditor params={params.id} />}</ClientOnly>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 1256px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const Titles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Title = styled.div`
  color: ${(prop) => prop.theme.color.grayScale.gray_900};
`;

const Header = styled.div`
  width: 100%;
  height: 121px;
  background: ${(prop) => prop.theme.color.basic.white};
  border: 1px solid ${(prop) => prop.theme.color.grayScale.gray_200};
  border-radius: 8px;
  padding: 29px 24px 24px 24px;
`;
const Head = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-bottom: 23px;
`;

const DateFontcaption1SB = styled.div`
  text-align: right;
  color: #c2c0bd;
`;
