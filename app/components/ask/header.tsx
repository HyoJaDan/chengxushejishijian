import styled from 'styled-components';

export const AskHeader = ({ title, setTitle }) => {
  const handleChange = (event: { target: { value: string } }) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };
  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Input
          className='title4_BD'
          type='text'
          value={title}
          placeholder='제목을 입력해 주세요'
          onChange={handleChange}
        />
      </Form>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
  height: 121px;
  background: ${(prop) => prop.theme.color.basic.white};
  border: 1px solid ${(prop) => prop.theme.color.grayScale.gray_200};
  border-radius: 8px;
  padding: 24px;
  display: flex;
  align-items: center;
`;

const Form = styled.form`
  width: 100%;
`;
const Input = styled.input`
  color: ${(prop) => prop.theme.color.grayScale.gray_900};
  width: 100%;
  max-width: 100%;
  border: none;
  &:focus {
    outline: none;
    border: none;
    background-color: transparent;
    box-shadow: none;
  }
`;
