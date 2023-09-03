import styled from 'styled-components';
import { CopyLink } from '~/components/common/copy-link';

interface IGetData {
  navigate: Function;
  lessonId: number;
}
export const SolutionBanner = ({ navigate, lessonId }: IGetData) => {
  const Adress = `/problem/${lessonId}`;
  const clickProblem = () => {
    navigate(Adress);
  };
  return (
    <Sticky>
      <Wrapper>
        <Flex>
          <ProblemCircle onClick={clickProblem} />
          <Title className='body3_MD'>问题</Title>
        </Flex>
        <Flex>
          <CopyLink />
        </Flex>
      </Wrapper>
    </Sticky>
  );
};
const Sticky = styled.div``;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: sticky;
  top: 72px;
  width: max-content;
`;
const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;
const Circle = styled.div`
  width: 54px;
  height: 54px;
  background: ${(prop) => prop.theme.color.basic.white};
  border: 1px solid ${(prop) => prop.theme.color.grayScale.gray_200};
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const Title = styled.div`
  color: ${(prop) => prop.theme.color.grayScale.gray_600};
`;

const ProblemCircle = styled(Circle)`
  background-color: ${(prop) => prop.theme.color.grayScale.gray_300};
`;
