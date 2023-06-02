import { useState } from 'react';
import { ClientOnly } from 'remix-utils';
import styled from 'styled-components';
import { AskEditor } from './editor';
import { AskHeader } from './header';

export default function Ask() {
  const [title, setTitle] = useState<string>('');
  return (
    <Wrapper>
      <AskHeader title={title} setTitle={setTitle} />
      <ClientOnly>{() => <AskEditor title={title} />}</ClientOnly>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 1256px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
