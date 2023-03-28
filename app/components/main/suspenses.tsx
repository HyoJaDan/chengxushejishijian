import { Suspense } from 'react';
import styled from 'styled-components';
import { Default } from '../problem';

export default function temp() {
  return (
    <Wrapper>
      <Suspense fallback={<div>loadiong</div>}>
        <Default />
      </Suspense>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  max-width: 1256px;
  margin: 28px auto;
`;
