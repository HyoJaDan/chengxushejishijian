import { useState } from 'react';
import type { UseFormRegister } from 'react-hook-form';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { userData } from '~/data/user/user-data';
import type { IUserData } from '~/routes/account-info';

interface InputInterestProps {
  register: UseFormRegister<IUserData>;
}

export default function InputUserInterests({ register }: InputInterestProps) {
  const [isClicked, setisClicked] = useState([
    { id: 0, bool: false },
    { id: 1, bool: false },
    { id: 2, bool: false },
    { id: 3, bool: false },
    { id: 4, bool: false },
    { id: 5, bool: false },
    { id: 6, bool: false },
    { id: 7, bool: false },
  ]);

  const interests = useRecoilValue(userData);
  const checkBoxes = interests.interest.map(({ value }, index) => {
    const id = `interest_id_${index}`;
    const onfocus = () => {
      setisClicked((prev) =>
        prev.map((item) =>
          item.id === index
            ? { id: index, bool: !item.bool }
            : { id: item.id, bool: item.bool }
        )
      );
    };
    return (
      <Gapcheckbox className='body2_MD' key={id}>
        <Input
          {...register('userInterest')}
          type='checkbox'
          id={id}
          value={value}
          onClick={onfocus}
        />
        <Label htmlFor={id}>
          <Letter className='body2_MD' isClicked={isClicked[index].bool}>
            {value}
          </Letter>
        </Label>
      </Gapcheckbox>
    );
  });

  return (
    <UserInterests>
      <div className='body1_BD'>관심사</div>
      <GridCheckbox>{checkBoxes}</GridCheckbox>
    </UserInterests>
  );
}
const UserInterests = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  grid-gap: 24px;
  width: -webkit-fill-available;
`;
const GridCheckbox = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: start;
  width: -webkit-fill-available;
`;
const Gapcheckbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 10px;
`;
const Letter = styled.div<{ isClicked: boolean }>`
  padding: 8px;
  color: ${(prop) => prop.theme.color.grayScale.gray_700};
  ${({ isClicked }) => isClicked && `color:#31302F`}
`;
const Label = styled.label`
  cursor: pointer;
`;
const Input = styled.input`
  width: 24px;
  height: 24px;
  background: ${(prop) => prop.theme.color.grayScale.gray_300};
  border: 1px solid ${(prop) => prop.theme.color.grayScale.gray_300};
  border-radius: 4px;
  appearance: none;
  background-size: 70% 70%;
  background-position: 50%;
  background-repeat: no-repeat;
  background-image: url("data:image/svg+xml,%3Csvg width='14' height='11' viewBox='0 0 14 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13 1L4.78389 9L1.00005 5.5' stroke='white' stroke-width='2'/%3E%3C/svg%3E%0A");

  &:hover {
    cursor: pointer;
  }
  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3Csvg width='14' height='11' viewBox='0 0 14 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13 1L4.78389 9L1.00005 5.5' stroke='white' stroke-width='2'/%3E%3C/svg%3E%0A");
    background-size: 70% 70%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: #2db8f3;
  }
`;
