import type { UseFormRegister } from 'react-hook-form';
import type { IUserData } from '~/routes/login/account-info';
import styled from 'styled-components';
import { userData } from '~/recoils/user-info/atoms';
import { useRecoilValue } from 'recoil';
import { Header } from './input-name';

interface InputInterestProps {
  register: UseFormRegister<IUserData>;
}

export default function InputUserInterests({ register }: InputInterestProps) {
  const interests = useRecoilValue(userData);

  const checkBoxes = interests.userInterest.map(({ value }, index) => {
    const id = `interest_id_${index}`;
    return (
      <Gapcheckbox key={id}>
        <input
          {...register('userInterest')}
          type='checkbox'
          id={id}
          className='cb1'
          value={value}
        />
        <Label htmlFor={id} style={{ cursor: 'pointer' }}>
          <CheckboxSpan>{value}</CheckboxSpan>
        </Label>
      </Gapcheckbox>
    );
  });

  return (
    <UserInterests>
      <Header>관심 분야</Header>
      <GridCheckbox>{checkBoxes}</GridCheckbox>
    </UserInterests>
  );
}
const UserInterests = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  grid-gap: 19px;
  width: -webkit-fill-available;
`;
const GridCheckbox = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: start;
  width: -webkit-fill-available;
  gap: 22px;
  margin-left: 15px;
`;
const Gapcheckbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  cursor: pointer;
  padding: 10px;
`;
const CheckboxSpan = styled.span`
  padding: 9px;
`;
const Label = styled.label``;
