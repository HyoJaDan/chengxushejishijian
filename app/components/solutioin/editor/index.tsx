import { useParams } from '@remix-run/react';
import { useRecoilValue } from 'recoil';
import { ClientOnly } from 'remix-utils';
import styled from 'styled-components';
import { Category } from '~/components/problem/problem-box';
import { getProblemDetail } from '~/data/problem/get-problem-detail';
import { SubEditor } from './newEditor.client';

export const SolutionTraining = () => {
  const params = useParams<string>();
  const problemData = useRecoilValue(getProblemDetail(params.id));
  return (
    <Wrapper>
      <Header>
        <Head>
          <Category className='caption1_SB'>
            {problemData.lessonCategory.name}
          </Category>
          <Titles>
            <Title className='title4_BD'>{problemData.title}</Title>
            <DateFontcaption1SB className='caption1_SB'>
              {problemData.updatedAt.substr(0, 10)}
            </DateFontcaption1SB>
          </Titles>
        </Head>
      </Header>
      {/*       <ClientOnly>{() => <MainEditor />}</ClientOnly> */}
      <ClientOnly>{() => <SubEditor params={params.id} />}</ClientOnly>
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
