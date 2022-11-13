import type{ UseFormRegister } from "react-hook-form";
import type{ IUserData } from "~/routes/login/Detail";
import styled from "styled-components";

interface InputInterestProps{
  register : UseFormRegister<IUserData>
}

export default function InputUserInterests({ register }: InputInterestProps) {
  const interests = [
    '백엔드개발',
    'IOS',
    'Android',
    'UX/UI',
    'BX',
    'WEB개발',
    '기타디자인',
    '기타개발'
  ];
  const checkBoxes = interests.map((interest, index) => {
    const id = `interest-id-${index}`;
    return (
      <Gapcheckbox key={id}>
        <input
          {...register("checkbox")}
          type="checkbox" id={id}
          className="cb1"
          value={interest}
        />
        <Label htmlFor={id}>
          <CheckboxSpan>
            {interest}
          </CheckboxSpan>
        </Label>
      </Gapcheckbox>
    );
  });

  return (
    <UserInterests>
      <Header>
        관심 분야
      </Header> 
      <GridCheckbox>
        {checkBoxes}
      </GridCheckbox>
    </UserInterests>
  );
}
const UserInterests = styled.div`
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  grid-gap:19px;
  width: -webkit-fill-available;
`;
const Header = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
`
const GridCheckbox = styled.div`
  display:grid;
  grid-template-rows:1fr 1fr 1fr;
  grid-template-columns:1fr 1fr 1fr;
  justify-items:start;
  width: -webkit-fill-available;
  gap:5px;
`;
const Gapcheckbox = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
`;
const CheckboxSpan = styled.span`
  padding:9px;
`;
const Label = styled.label``;