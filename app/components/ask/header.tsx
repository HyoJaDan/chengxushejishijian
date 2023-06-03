import styled from 'styled-components';
import { categoryList } from '~/models/problem-and-solution/common-used/category-list';

export const AskHeader = ({ title, setTitle, selectedId, setSelectedId }) => {
  const handleChange = (event: { target: { value: string } }) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };

  const handleLabelChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const id = parseInt(event.target.value, 10);
    setSelectedId(id);
  };
  console.log(selectedId);
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
        <Select
          id='selectInput'
          value={selectedId}
          onChange={handleLabelChange}
        >
          {categoryList.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </Select>
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
  display: flex;
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

const Select = styled.select`
  width: 150px;
  height: 35px;
  border-radius: 3px;
  border: 1px solid #bfbfbf;
  &:focus {
    border: 1px solid red;
    outline: none;
  }
`;
