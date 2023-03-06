import { Suspense } from 'react';
import styled from 'styled-components';
import { Training } from '.';

export default function Suspenses() {
  return (
    <Wrapper>
      <Suspense fallback={<div>loadiong</div>}>
        <Training />
      </Suspense>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  max-width: 1256px;
  margin: 28px auto;
`;
