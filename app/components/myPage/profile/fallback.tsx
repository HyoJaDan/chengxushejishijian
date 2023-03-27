import styled from 'styled-components';

export const ProfileFallback = () => {
  return (
    <Wrapper>
      <UserInformation />
      <Flex>
        <IntroductionAndLink />
        <SmallFlex>
          <Chart />
          <Statistics />
        </SmallFlex>
      </Flex>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 24px;
`;
const UserInformation = styled.div`
  width: 1256px;
  height: 212px;
  background: ${(prop) => prop.theme.color.basic.white};
  border: 1px solid #efedea;
  border-radius: 8px;
  padding: 32px;
`;
const IntroductionAndLink = styled.div`
  width: 936px;
  height: 500px;
  border: 1px solid #efedea;
  background: ${(prop) => prop.theme.color.basic.white};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  padding: 32px;
`;
const Chart = styled.div`
  width: 296px;
  height: 316px;
  background: ${(prop) => prop.theme.color.basic.white};
  border: 1px solid #efedea;
  border-radius: 8px;
`;
const Statistics = styled.div`
  width: 296px;
  height: 160px;
  background: ${(prop) => prop.theme.color.basic.white};
  border: 1px solid #efedea;
  border-radius: 8px;
`;

const Flex = styled.div`
  display: flex;
  gap: 24px;
`;
const SmallFlex = styled(Flex)`
  flex-direction: column;
`;
