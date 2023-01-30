import { Suspense } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { userArchiveSelector } from '~/recoils/user-info/archive';

const OutputArchive = () => {
  const archive = useRecoilValue(userArchiveSelector);
  const output = archive.map((data, index) => {
    const id = `${data}_${index}`;
    return (
      <Container key={id}>
        <Background src={data.previewUrl} />
        <ArchiveDate>{data.date}</ArchiveDate>
        <ArchiveName>{data.name}</ArchiveName>
      </Container>
    );
  });
  return <Content>{output}</Content>;
};

export default function MypageArchive() {
  return (
    <Wrapper>
      <Suspense fallback={<div>Loading...</div>}>
        <OutputArchive />
      </Suspense>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 1256px;
  margin: 40px 0 40px 0;
  background: #ffffff;
`;
const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 24px;
  margin: 74px 24px 24px 24px;
`;
const Container = styled.div`
  position: relative;
`;

const Background = styled.img`
  display: flex;
  flex-direction: column;
  gap: 4px;
  height: 200px;
  aspect-ratio: 284 / 200;
  width: 100%;
  object-fit: cover;
  aspect-ratio: 296 / 216;
  width: 100%;
  object-fit: cover;
  border-radius: 8px;
`;
const ArchiveDate = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  font-weight: 500;
  font-size: 14px;
  color: #efedea;
`;
const ArchiveName = styled.div`
  position: absolute;
  top: 40px;
  left: 16px;
  font-weight: 700;
  font-size: 20px;
  text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5);
  color: white;
`;
