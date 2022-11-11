import styled from 'styled-components';
import type { FCChildren } from '~/components/common/types/function-component';

type PreviewSectionProps = {
  title: string;
  leadingContent?: JSX.Element;
};

export const PreviewSection: FCChildren<PreviewSectionProps> = ({
  title,
  children,
  leadingContent,
}) => (
  <Wrapper>
    <Title>{title}</Title>
    <ContentArea>
      {leadingContent}
      <PreviewList>{children}</PreviewList>
    </ContentArea>
  </Wrapper>
);

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: flex-start;
  color: #1f1f1f;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  line-height: 100%;
`;

const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;
`;

const PreviewList = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 24px;
`;
