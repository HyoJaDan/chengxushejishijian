import { useNavigate } from '@remix-run/react';
import axios from 'axios';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { lessonAddress } from '~/data/constants/adress';
import { userAccessToken } from '~/data/user/common/login-information';

export const Comment = ({ id }: { id: string }) => {
  const { register, handleSubmit } = useForm();
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
  const accessToken = useRecoilValue(userAccessToken);
  const navigate = useNavigate();
  const onValid = () => {
    if (textAreaRef.current !== null) {
      axios.post(
        `${lessonAddress}/${id}/comments`,
        {
          description: textAreaRef.current.value,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
    }
    textAreaRef.current = null;
    navigate(`/training/${id}`);
  };
  const handleResizeHeight = () => {
    if (textAreaRef.current !== null) {
      textAreaRef.current.style.height = 'auto';
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  };
  return (
    <Wrapper>
      <Header className='body1_BD'>댓글</Header>
      <Form onSubmit={handleSubmit(onValid)}>
        <Input
          className='body3_MD'
          {...register('comment')}
          placeholder='댓글 작성하기'
          onChange={() => handleResizeHeight()}
          ref={textAreaRef}
          rows={1}
        />
        <ButtonFlex>
          <Button className='body3_SB'>댓글 등록</Button>
        </ButtonFlex>
      </Form>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  padding: 24px;
  width: 1149px;
  min-height: 164px;
  background-color: ${(prop) => prop.theme.color.basic.white};
  border: 1px solid ${(prop) => prop.theme.color.grayScale.gray_200};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
const Header = styled.div`
  color: ${(prop) => prop.theme.color.grayScale.gray_900};
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const Input = styled.textarea`
  width: 100%;
  resize: none;
  overflow: hidden;
  padding: 8px 12px;
  background-color: ${(prop) => prop.theme.color.grayScale.gray_200};
  color: ${(prop) => prop.theme.color.grayScale.gray_600};
  border-radius: 8px;
  border: 1px solid ${(prop) => prop.theme.color.grayScale.gray_200};
  &:focus {
    outline: none;
    border: 1px solid ${(prop) => prop.theme.color.primary.blue.blue_500};
  }
`;
const ButtonFlex = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: -webkit-fill-available;
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  gap: 8px;
  border: 1px solid ${(prop) => prop.theme.color.grayScale.gray_300};
  border-radius: 100px;
  background-color: ${(prop) => prop.theme.color.basic.white};
  width: 84px;
  height: 36px;
  color: ${(prop) => prop.theme.color.grayScale.gray_800};
  cursor: pointer;
  &:hover {
    color: #2478f6;
  }
`;
